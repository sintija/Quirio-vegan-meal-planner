import React from 'react';
import yummlyApi from "../../services/yummlyApi/yummlyApi";
import Menuitems from '../Components/MenuItems';
import inspirationalQuotes from '../../services/FireBase/inspirationalQuotes';

import {PanelHeader} from "components";
import Loading from "../Components/loading/loading";
import IntroModal from "../Components/introModal/introModal";
import {Row, Col, Button, Container} from "reactstrap";
import NotificationAlert from 'react-notification-alert';

export default class Menulist extends React.Component {

    constructor(props) {
        super(props);

        this.loadNutritionInfoHandler = this
            .loadNutritionInfoHandler
            .bind(this);
        this.notify = this
            .notify
            .bind(this);
        this.state = {
            activeTab: '1',
            BreakfastList: [],
            LunchList: [],
            DinnerList: [],
            BreakfastNutritionalInfo: {},
            LunchNutritionalInfo: {},
            DinnerNutritionalInfo: {},
            inspirationalQuote: '',
            loading: true,
            firstTime: false
        };

        this.mealTimes = ["Breakfast", "Lunch", "Dinner"];
    }

    componentDidMount() { //

        let yummlyApiService = new yummlyApi();

        if (this.props.location.search.indexOf('register') !== -1) {
            this.setState({firstTime: true});
        }

        yummlyApiService
            .breakfastSearch()
            .then((result) => {
                this.setState({BreakfastList: result.data.matches});
                this.setState({loading: false});

                if (result.data.matches.length !== 0) {
                    yummlyApiService
                        .getNutritionalInfo(result.data.matches[0].id)
                        .then((result) => {
                            this.setState({BreakfastNutritionalInfo: result});

                        });
                }

            });

        yummlyApiService
            .lunchSearch()
            .then((result) => {
                this.setState({LunchList: result.data.matches})

                if (result.data.matches.length !== 0) {
                    yummlyApiService
                        .getNutritionalInfo(result.data.matches[0].id)
                        .then((result) => {

                            this.setState({LunchNutritionalInfo: result});
                        });
                }

            });

        yummlyApiService
            .dinnerSearch()
            .then((result) => {
                this.setState({DinnerList: result.data.matches});
                if (result.data.matches.length !== 0) {
                    yummlyApiService
                        .getNutritionalInfo(result.data.matches[0].id)
                        .then((result) => {
                            this.setState({DinnerNutritionalInfo: result});
                        });
                }

            });
        inspirationalQuotes.getRandomQuote((quote) => {
            this.setState({inspirationalQuote: quote});
        })
    }

    
    loadNutritionInfoHandler(recipeId, mealTime) {

        let yummlyApiService = new yummlyApi();
        yummlyApiService
            .getNutritionalInfo(recipeId)
            .then((result) => {

                this.setState({loading: false});
                switch (mealTime) {
                    case "Breakfast":
                        this.setState({BreakfastNutritionalInfo: result});
                        break;
                    case "Lunch":
                        this.setState({LunchNutritionalInfo: result});
                        break;
                    case "Dinner":
                        this.setState({DinnerNutritionalInfo: result});
                        break;
                }

            })

    }


    notify() {

        this
            .refs
            .notify
            .notificationAlert({place: 'bc', message: ("Well Done! You Finished Your Vegan Day"), type: "success", icon: "now-ui-icons ui-1_check", autoDismiss: 2});
    }

    render() {

        let BreakfastItem = null;
        let LunchItem = null;
        let DinnerItem = null;

        if (this.state.BreakfastList.length !== 0) {

            BreakfastItem = <Menuitems
                matches={this.state.BreakfastList}
                nutritionalInfo={this.state.BreakfastNutritionalInfo}
                updatenutritionalInfoHander={this.loadNutritionInfoHandler}
                mealTime="Breakfast"/>

        }

        if (this.state.LunchList.length !== 0) {

            LunchItem = <Menuitems
                matches={this.state.LunchList}
                nutritionalInfo={this.state.LunchNutritionalInfo}
                updatenutritionalInfoHander={this.loadNutritionInfoHandler}
                mealTime="Lunch"/>

        }

        if (this.state.DinnerList.length !== 0) {

            DinnerItem = <Menuitems
                matches={this.state.DinnerList}
                nutritionalInfo={this.state.DinnerNutritionalInfo}
                updatenutritionalInfoHander={this.loadNutritionInfoHandler}
                mealTime="Dinner"/>

        }
        const panelStyle = {
            borderBottomRightRadius: '10px',
            borderBottomLeftRadius: '10px',
            zIndex: '1'
        }

        return (
            <div>

                {this.state.firstTime
                    ? <IntroModal history={this.props.history}/>
                    : null}
                {this.state.loading
                    ? <Loading/>
                    : null}
                <PanelHeader
                    style={panelStyle}
                    inspirationalQuote={this.state.inspirationalQuote}
                    size="sm"/>s 


                <Container>
                {BreakfastItem}
                {LunchItem}
                {DinnerItem}
                </Container>
                <Container>
                <Row className="justify-content-center text-center">
                    <Col xs={12} sm={12} lg={12}>
                        <NotificationAlert ref="notify"/>
                        <Button className="Finish-day" color="primary" onClick={this.notify}>
                            Finish The Day
                        </Button>
                    </Col>

                </Row>
                </Container>

            </div>

        )
    }

};
