import React from "react";
import NotificationAlert from 'react-notification-alert';
import {
    Button,
    Card,
    CardHeader,
    CardTitle,
    CardBody,
    Row,
    Col, Container
} from "reactstrap";

import Select from "react-select";

import { PanelHeader } from "components";
import DragAndDrop from '../../components/DragAndDrop';


// plugin that creates slider
import {CircleSlider} from "react-circle-slider";

import PreferencesService from '../../services/FireBase/preferences';
import User from "../../services/FireBase/user";


class Preferences extends React.Component {
    constructor(props) {
        super(props);


        this.state = {
            value: 0,
            hTabs: "ht1",
            vTabs: "vt1",
            vTabsIcons: "vti1",
            pageSubcategories: "ps1",
            search: '',
            veganDay: '',
            maxCalPerMeal: 0,
            maxPrepTime: 0,
            maxAmountOfIng: 0,

        };
    }

    componentWillMount() {
        User.authListener((user) => {
            if (!user) {
                this
                    .props
                    .history
                    .push('/pages/login-page');
            }
        });
    }

    handleChange = value => {
        this.setState({value});
    };


    handleChangeRange = event => {
        this.setState({
            value: event.target.valueAsNumber
        });
    };

    /**
     * Sets state for user preferences i.e vegan day, maxCalPerMeal, maxPrepTime, maxAmountOfIng
     */
    componentDidMount() {
        PreferencesService
            .fetchPreferencesDoc()
            .then((preferences) => {
                if (preferences) {
                    this.setState({
                        veganDay: preferences.veganDay,
                        maxCalPerMeal: preferences.maxCalPerMeal,
                        maxPrepTime: preferences.maxPrepTime,
                        maxAmountOfIng: preferences.maxAmountOfIng,

                    })
                }
            });

    }

    veganDaySelectHandler = event => {

        this.setState({
            veganDay: event
        });

    };


    maxCalPerMealSelectHandler = event => {

        this.setState({
            maxCalPerMeal: event
        });

    };


    maxPrepTimeSelectHandler = event => {

        this.setState({
            maxPrepTime: event
        });

    };


    maxAmountOfIngSelectHandler = event => {

        this.setState({
            maxAmountOfIng: event
        });

    };

    updatePreferencesHandler = () => {
        PreferencesService.updateMealSpecificPreferencesDoc(this.state.veganDay, this.state.maxCalPerMeal, this.state.maxPrepTime, this.state.maxAmountOfIng).then(() => {
            this.refs.notify.notificationAlert({
                place: 'bc',
                message: (
                    "Your Preferences are now updated"
                ),
                type: "success",
                icon: "now-ui-icons ui-1_bell-53",
                autoDismiss: 2
            });
        })
    }


    render() {


        let selectOptions = [
            {value: "Monday", label: "Monday"},
            {value: "Tuesday", label: "Tuesday"},
            {value: "Wednesday", label: "Wednesday"},
            {value: "Thursday", label: "Thursday"},
            {value: "Friday", label: "Friday"},
            {value: "Saturtday", label: "Saturtday"},
            {value: "Sunday", label: "Sunday"}
        ];


        return (
            <div>

                <NotificationAlert ref="notify"/>


                <PanelHeader size="sm"/>
                <div className="content">

                    <Container>
                    <Row>
                        <Col md={12} xs={12} className="ml-auto mr-auto">


                            <Card className="card-plain card-subcategories">
                                <CardHeader className="Card-Header">
                                    <CardTitle tag="h4" className="text-center">
                                        Your Preferences
                                    </CardTitle>
                                    <br/>
                                </CardHeader>

                                <CardBody className="page-body">

                                    <Row>
                                        <Col>
                                            <DragAndDrop></DragAndDrop>
                                        </Col>
                                    </Row>


                                    <br/>
                                    <br/>

                                    <Row>
                                        <Col xs={12} sm={12} md={12} lg={12}>
                                            <h6 className="ml-auto"> Meal Specific preferences </h6>

                                            <CardTitle tag="h4">Choose your vegan day</CardTitle>

                                            <Select
                                                className="react-select primary"
                                                classNamePrefix="react-select"
                                                placeholder="Select a day"
                                                name="veganDay"
                                                value={this.state.veganDay}
                                                options={selectOptions}
                                                onChange={this.veganDaySelectHandler}
                                            />


                                        </Col>
                                    </Row>


                                    <br/>
                                    <br/>

                                    <Row>
                                        <Col>
                                            <h4>Choose your preferred</h4>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xs={12} sm={12} md={4} lg={4}>
                                            <p className="justify-center"> Calories </p>
                                            <CircleSlider
                                                value={this.state.maxCalPerMeal}
                                                size={200}
                                                knobRadius={15}
                                                progressWidth={20}
                                                circleWidth={3}
                                                progressColor="#94DC19"
                                                tooltipColor="#fa7a50"
                                                showTooltip={true}
                                                tooltipSize={26}
                                                max={1500}
                                                textFill="#F3F3F3"
                                                onChange={this.maxCalPerMealSelectHandler}
                                            />
                                        </Col>
                                            <Col xs={12} sm={12} md={4} lg={4}>
                                            <p className="justify-center"> Max Prep Time </p>
                                            <CircleSlider
                                                value={this.state.maxPrepTime}
                                                size={200}
                                                knobRadius={15}
                                                progressWidth={20}
                                                circleWidth={3}
                                                progressColor="#94DC19"
                                                tooltipColor="#fa7a50"
                                                showTooltip={true}
                                                tooltipSize={26}
                                                max={120}
                                                onChange={this.maxPrepTimeSelectHandler}
                                            />
                                            </Col>
                                                <Col xs={12} sm={12} md={4} lg={4}>
                                            <p className="justify-center"> Max Amount of Ingredients  </p>
                                            <CircleSlider
                                                value={this.state.maxAmountOfIng}
                                                size={200}
                                                knobRadius={15}
                                                progressWidth={20}
                                                circleWidth={3}
                                                progressColor="#94DC19"
                                                tooltipColor="#fa7a50"
                                                showTooltip={true}
                                                tooltipSize={26}
                                                max={25}
                                                onChange={this.maxAmountOfIngSelectHandler}
                                            />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <Button color="primary" className="justify-middle"
                                                    onClick={this.updatePreferencesHandler}>
                                                Update Preferences
                                            </Button>
                                        </Col>
                                    </Row>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                    </Container>
                </div>

            </div>
        );
    }
}

export default Preferences;
