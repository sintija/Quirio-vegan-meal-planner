import React from "react";

import {
    TabContent,
    TabPane,
    Nav,
    NavItem,
    NavLink,
    Card,
    CardHeader,
    CardTitle,
    CardImg,
    Button,
    CardBody,
    CardText,
    Row,
    Table,
    Col,
    Container,
    CardFooter,
    Form,
    FormGroup,
    Input
} from "reactstrap";
import {UncontrolledTooltip} from 'reactstrap';
//Import the images
import card1 from "assets/img/Assets/test-food.jpg";
import moment from 'moment';
import shoppingList from '../../services/FireBase/shoppinList';
import reviewService from '../../services/FireBase/reviews';
import NotificationAlert from 'react-notification-alert';

class Panels extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hTabs: "ht1",
            vTabs: "vt1",
            vTabsIcons: "vti1",
            pageSubcategories: "ps1",
            BreakfastList: [],
            LunchList: [],
            DinnerList: [],
            selection: 0,
            altOne: 1,
            altTwo: 2,
            altThree: 3,
            shoppingList: [],
            reviews: [],
            newReview: ""
        };
        this.handleNewReviewChange = this
            .handleNewReviewChange
            .bind(this);
    }

    /**
     * replace original url size with higher resolution image
     * @param url
     * @returns {*}
     */
    parseImageUrl(url) {
        return url.replace('=s90-c', '=s1600-c');
    }

    /**
     * Function to add ingredient items to the shopping list
     * @param e
     */

    handleIngredientCheckboxChange = (e) => {
        const item = e.target.name;
        const isChecked = e.target.checked;
        let shoppinList = this.state.shoppingList;
        if (isChecked) {
            shoppinList.push(item);
            this.setState({shoppingList: shoppinList})
        } else {
            let index = shoppinList.indexOf(item);
            if (index > -1) {
                shoppinList.splice(index, 1);
                this.setState({shoppinList: shoppinList});
            }
        }
    }
    /**
     * Adding Notifications when items
     */
    addSelectedHandler = () => {
        if (this.state.shoppingList.length !== 0) {

            shoppingList.updateDoc(this.state.shoppingList);
            this
                .refs
                .notify
                .notificationAlert({place: 'bc', message: ("Items added to the shopping list"), type: "success", icon: "now-ui-icons ui-1_check", autoDismiss: 2});

        }

    }

    switchSelectionHandler(alt) {
        let currentSelection = this.state.selection;
        let currentAlt = null;

        switch (alt) {
            case 'altOne':

                currentAlt = this.state.altOne;
                this.setState({selection: currentAlt, altOne: currentSelection});
                this
                    .props
                    .updatenutritionalInfoHander(this.props.matches[currentAlt].id, this.props.mealTime);

                break;

            case 'altTwo':

                currentAlt = this.state.altTwo;
                this.setState({selection: currentAlt, altTwo: currentSelection});

                this
                    .props
                    .updatenutritionalInfoHander(this.props.matches[currentAlt].id, this.props.mealTime);

                break;

            case 'altThree':

                currentAlt = this.state.altThree;
                this.setState({selection: currentAlt, altThree: currentSelection});
                this
                    .props
                    .updatenutritionalInfoHander(this.props.matches[currentAlt].id, this.props.mealTime);

                break;
        }

        this.reviewTabClickHandler(this.props.matches[currentAlt].id);
    }

    reviewTabClickHandler(recipeId) {
        reviewService.getReviews(recipeId, (result) => {
            this.setState({reviews: result});
        });
    }

    addReviewHandler(recipeId) {
        if (this.state.newReview) {
            reviewService.addReview(recipeId, this.state.newReview, () => {
                this.reviewTabClickHandler(recipeId);
                this.setState({newReview: ""});
            });
        }
    }

    handleNewReviewChange(e) {
        this.setState({newReview: e.target.value});
    }

    render() {

        let mainCardImg,
            altCardImg1,
            altCardImg2,
            altCardImg3 = <CardImg top src={card1} alt="..."/>;

        let ingredients = null;
        let recipeName = null;
        let rating = null;
        let prepTime = null;
        let altOnerecipeName = null;
        let altTworecipeName = null;
        let altThreerecipeName = null;
        let altOneRating  = null;
        let altTwoRating = null;
        let altThreeRating = null;
        let altOnePrepTime = null;
        let altTwoPrepTime = null;
        let altThreePrepTime = null;
        let nutritionEstimates = null;
        let recipeId = null;
        // let  calories = null;

        let sourceUrl = null;
        let reviewsList = null;

        if (Object.keys(this.props.nutritionalInfo).length !== 0) {

            sourceUrl = this.props.nutritionalInfo.data.source.sourceRecipeUrl;
            nutritionEstimates = this
                .props
                .nutritionalInfo
                .data
                .nutritionEstimates
                .map((nutritionEstimate, index) => {
                    return (
                        <tr key={index}>
                            <th scope="row">{nutritionEstimate.description}</th>
                            <td>{nutritionEstimate.value}</td>
                            <td></td>
                        </tr>
                    )
                })
        }

        if (this.props.matches.length !== 0) {

            if (this.props.matches[this.state.selection]) {
                mainCardImg = <CardImg
                    top
                    src={this.parseImageUrl(this.props.matches[this.state.selection].imageUrlsBySize[90])}
                    alt="..."/>;
            }
            if (this.props.matches[this.state.altOne]) {
                altCardImg1 = <CardImg
                    top
                    src={this.parseImageUrl(this.props.matches[this.state.altOne].imageUrlsBySize[90])}
                    alt="..."/>;
            }
            if (this.props.matches[this.state.altTwo]) {
                altCardImg2 = <CardImg
                    top
                    src={this.parseImageUrl(this.props.matches[this.state.altTwo].imageUrlsBySize[90])}
                    alt="..."/>;
            }
            if (this.props.matches[this.state.altThree]) {
                altCardImg3 = <CardImg
                    top
                    src={this.parseImageUrl(this.props.matches[this.state.altThree].imageUrlsBySize[90])}
                    alt="..."/>;
            }

            ingredients = this
                .props
                .matches[this.state.selection]
                .ingredients
                .map((ingredient, i) => {
                    return (
                        <div key={i} className="position-relative form-check">
                            <label className="form-check-label">
                                <input
                                    type="checkbox"
                                    name={ingredient}
                                    onChange={this.handleIngredientCheckboxChange}
                                    className="form-check-input"></input>
                                <span className="form-check-sign"></span>{ingredient}
                            </label>
                        </div>
                    );

                });

            if (this.state.reviews) {
                reviewsList = this
                    .state
                    .reviews
                    .map((review, i) => {
                        return (
                            <Card key={i}>
                                <CardBody>
                                    <span>
                                        <b>{review.description}</b>
                                    </span>
                                </CardBody>
                                <CardFooter>
                                    {review.userEmail}
                                </CardFooter>
                            </Card>
                        );
                    });
            }

            if (this.props.matches[this.state.selection]) {
                recipeName = this.props.matches[this.state.selection].recipeName;
            }

            if (this.props.matches[this.state.selection]) {
                recipeId = this.props.matches[this.state.selection].id;
            }

            if (this.props.matches[this.state.altOne]) {
                altOnerecipeName = this.props.matches[this.state.altOne].recipeName;
            }

            if (this.props.matches[this.state.altTwo]) {
                altTworecipeName = this.props.matches[this.state.altTwo].recipeName;
            }

            if (this.props.matches[this.state.altThree]) {
                altThreerecipeName = this.props.matches[this.state.altThree].recipeName;
            }

            altOneRating = `${this.props.matches[this.state.altOne].rating}/5`;
            altTwoRating = `${this.props.matches[this.state.altTwo].rating}/5`;
            altThreeRating = `${this.props.matches[this.state.altThree].rating}/5`;

            

            let getPrepTime = (altRef) => {
                if (this.props.matches[altRef]) {
                    let mins = moment
                        .utc(this.props.matches[altRef].totalTimeInSeconds * 1000)
                        .format('mm');
                    return `${parseInt(mins)} mins`;
                } else {
                    return null;
                }
            };

            altOnePrepTime = getPrepTime(this.state.altOne);

            altTwoPrepTime = getPrepTime(this.state.altTwo);

            altThreePrepTime = getPrepTime(this.state.altThree);

            //Nutritional Values

            if (this.props.matches[this.state.selection]) {
                rating = `${this.props.matches[this.state.selection].rating}/5`;

                prepTime = getPrepTime(this.state.selection);
            }

            // calories = this .props .nutritionEstimates[0] .ENERC_KCAL;

        }

        return (

            <Row className="justify-content-center">
                <Col lg={12} md={12} xs={12}>

                    <Card>
                        <CardHeader className="text-center meal-item-header">
                            <CardTitle tag="h6" className="meal-time">{this.props.mealTime}
                            </CardTitle>
                        </CardHeader>
                        <Container>

                            <Row>
                                <Col lg={6} md={6} xs={12}>
                                    <CardBody>
                                        <Row>
                                            <Col xs={12} sm={6} lg={3} className="text-center">
                                                <Card
                                                    style={{
                                                    width: "20rem"
                                                }}>
                                                    {mainCardImg}

                                                    <CardBody>
                                                        <Row>
                                                            <Col xs={10} sm={10} lg={10}>
                                                                <CardTitle className="title-size">

                                                                    {recipeName}</CardTitle>

                                                            </Col>

                                                            <Col xs={2} sm={2} lg={2}>
                                                                <i id="right" className="now-ui-icons ui-2_favourite-28"/> {` `}

                                                                <UncontrolledTooltip placement="right" target="right" delay={0}>
                                                                    Add to the favourites
                                                                </UncontrolledTooltip>

                                                            </Col>

                                                        </Row>

                                                        <Row>
                                                            <Col xs={12} sm={12} lg={12}>
                                                                <Row>

                                                                    <Col className="font-icon-list" xs={4} sm={4} lg={4}>

                                                                        <p className="text-center">
                                                                            <i className="fa fa-info-circle"/>
                                                                            <br/>
                                                                            370 cal
                                                                        </p>

                                                                    </Col>

                                                                    <Col className="font-icon-list" xs={4} sm={4} lg={4}>

                                                                        <p className="text-center">
                                                                            <i className="fa fa-clock-o"/>
                                                                            <br/> {prepTime}
                                                                        </p>

                                                                    </Col>

                                                                    <Col className="font-icon-list" xs={4} sm={4} lg={4}>

                                                                        <span tag="div">
                                                                            <i className="fa fa-star"/>
                                                                            <br/> {rating}
                                                                        </span>

                                                                    </Col>

                                                                </Row>
                                                            </Col>

                                                        </Row>

                                                    </CardBody>
                                                </Card>
                                            </Col>
                                        </Row>

                                    </CardBody>
                                </Col>
                                <Col lg={6} md={12} xs={12}>

                                    <Nav pills className="nav-pills-primary">
                                        <NavItem>
                                            <NavLink
                                                className={this.state.hTabs === "ht1"
                                                ? "active"
                                                : ""}
                                                onClick={() => this.setState({hTabs: "ht1"})}>
                                                ingredients
                                            </NavLink>
                                        </NavItem>

                                        <NavItem>
                                            <NavLink
                                                className={this.state.hTabs === "ht2"
                                                ? "active"
                                                : ""}
                                                onClick={() => this.setState({hTabs: "ht2"})}>
                                                Nutrition
                                            </NavLink>
                                        </NavItem>

                                        <NavItem>
                                            <NavLink
                                                className={this.state.hTabs === "ht3"
                                                ? "active"
                                                : ""}
                                                onClick={() => this.setState({hTabs: "ht3"})}>
                                                Instructions
                                            </NavLink>
                                        </NavItem>

                                        <NavItem>
                                            <NavLink
                                                className={this.state.hTabs === "ht4"
                                                ? "active"
                                                : ""}
                                                onClick={() => {
                                                this.setState({hTabs: "ht4"});
                                                this.reviewTabClickHandler(recipeId);
                                            }}>
                                                Reviews
                                            </NavLink>
                                        </NavItem>
                                    </Nav>

                                    <TabContent activeTab={this.state.hTabs} className="tab-space">
                                        <TabPane tabId="ht1">

                                            <CardBody>
                                                <ul>
                                                    {ingredients}
                                                </ul>

                                                <Row>
                                                    <Col xs={12} sm={12} lg={12} className="text-center">
                                                        <NotificationAlert ref="notify"/>
                                                        <Button onClick={this.addSelectedHandler} color="primary">
                                                            Add to shoping list
                                                        </Button>

                                                    </Col>
                                                </Row>
                                            </CardBody>

                                        </TabPane>
                                        <TabPane tabId="ht2">

                                            <Card>
                                                <CardBody>
                                                    <div
                                                        style={{
                                                        "maxHeight": "30rem",
                                                        "overflow": "auto"
                                                    }}>
                                                        <Table>
                                                            <thead>
                                                                <tr>
                                                                    <th>Nutrition</th>
                                                                    <th>In Grams</th>

                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                {nutritionEstimates}
                                                            </tbody>
                                                        </Table>
                                                    </div>
                                                </CardBody>
                                            </Card>

                                        </TabPane>
                                        <TabPane tabId="ht3">
                                            <Card>
                                                <CardBody>

                                                    <div className="iframe-container">
                                                        <iframe src={sourceUrl} title={recipeName} allowFullScreen/>
                                                    </div>
                                                    <Button onClick={() => window.open(sourceUrl, "_blank")} color="primary">Open instructions in new tab</Button>

                                                </CardBody>
                                            </Card>

                                        </TabPane>

                                        <TabPane tabId="ht4">
                                            {reviewsList}
                                            <Card>
                                                <CardHeader>
                                                    <h4>Add Review</h4>
                                                </CardHeader>
                                                <CardBody>
                                                    <Form>
                                                        <FormGroup>
                                                            <Input
                                                                type="textarea"
                                                                name="newReview"
                                                                id="newReview"
                                                                value={this.state.newReview}
                                                                onChange={this.handleNewReviewChange}/>
                                                        </FormGroup>
                                                    </Form>
                                                </CardBody>
                                                <CardFooter>
                                                    <Button onClick={() => this.addReviewHandler(recipeId)}>Add</Button>
                                                </CardFooter>
                                            </Card>
                                        </TabPane>

                                    </TabContent>

                                </Col>
                            </Row>

                            <Row>
                                <Col>

                                    <br/>

                                    <h5 className="header-title alternative">
                                        Alternative options
                                    </h5>

                                </Col>

                            </Row>

                            <Row>

                                <Col lg={4} md={12} xs={12}>
                                    <Card className="alternative-recipe">
                                        {altCardImg1}
                                        <CardTitle>
                                            {altOnerecipeName}
                                        </CardTitle>
                                        <CardBody>

                                            <Row>
                                                <Col xs={12} sm={12} lg={12}>
                                                    <Row>

                                                        <Col className="font-icon-list" xs={4} sm={4} lg={4}>

                                                            <p className="text-center">
                                                                <i className="fa fa-info-circle"/>
                                                                <br/>
                                                                400 cal
                                                            </p>

                                                        </Col>

                                                        <Col className="font-icon-list" xs={4} sm={4} lg={4}>

                                                            <p className="text-center">
                                                                <i className="fa fa-clock-o"/>
                                                                <br/> {altOnePrepTime}
                                                            </p>

                                                        </Col>

                                                        <Col className="font-icon-list" xs={4} sm={4} lg={4}>

                                                            <span tag="div">
                                                                <i className="fa fa-star"/>
                                                                <br/> {altOneRating}
                                                            </span>

                                                        </Col>

                                                    </Row>
                                                </Col>

                                            </Row>

                                            <Button
                                                onClick={() => {
                                                this.switchSelectionHandler('altOne')
                                            }}
                                                color="primary">
                                                Select
                                            </Button>

                                        </CardBody>
                                    </Card>
                                </Col>

                                <Col lg={4} md={12} xs={12}>
                                    <Card className="alternative-recipe">
                                        {altCardImg2}
                                        <CardBody>
                                            <CardTitle>
                                                {altTworecipeName}
                                            </CardTitle>


                                            <Row>
                                                <Col xs={12} sm={12} lg={12}>
                                                    <Row>

                                                        <Col className="font-icon-list" xs={4} sm={4} lg={4}>

                                                            <p className="text-center">
                                                                <i className="fa fa-info-circle"/>
                                                                <br/>
                                                                278 cal
                                                            </p>

                                                        </Col>

                                                        <Col className="font-icon-list" xs={4} sm={4} lg={4}>

                                                            <p className="text-center">
                                                                <i className="fa fa-clock-o"/>
                                                                <br/> {altTwoPrepTime}
                                                            </p>

                                                        </Col>

                                                        <Col className="font-icon-list" xs={4} sm={4} lg={4}>

                                                            <span tag="div">
                                                                <i className="fa fa-star"/>
                                                                <br/> {altTwoRating}
                                                            </span>

                                                        </Col>

                                                    </Row>
                                                </Col>

                                            </Row>





                                          
                                            <Button
                                                onClick={() => {
                                                this.switchSelectionHandler('altTwo')
                                            }}
                                                color="primary">
                                                Select
                                            </Button>
                                        </CardBody>
                                    </Card>
                                </Col>

                                <Col lg={4} md={12} xs={12}>
                                    <Card className="alternative-recipe">
                                        {altCardImg3}
                                        <CardBody>
                                            <CardTitle>
                                                {altThreerecipeName}
                                            </CardTitle>

                                            <Row>
                                                <Col xs={12} sm={12} lg={12}>
                                                    <Row>

                                                        <Col className="font-icon-list" xs={4} sm={4} lg={4}>

                                                            <p className="text-center">
                                                                <i className="fa fa-info-circle"/>
                                                                <br/>
                                                                360 cal
                                                            </p>

                                                        </Col>

                                                        <Col className="font-icon-list" xs={4} sm={4} lg={4}>

                                                            <p className="text-center">
                                                                <i className="fa fa-clock-o"/>
                                                                <br/> {altThreePrepTime}
                                                            </p>

                                                        </Col>

                                                        <Col className="font-icon-list" xs={4} sm={4} lg={4}>

                                                            <span tag="div">
                                                                <i className="fa fa-star"/>
                                                                <br/> {altThreeRating}
                                                            </span>

                                                        </Col>

                                                    </Row>
                                                </Col>

                                            </Row>

                                       

                                            <Button
                                                onClick={() => {
                                                this.switchSelectionHandler('altThree')
                                            }}
                                                color="primary">
                                                Select
                                            </Button>
                                        </CardBody>
                                    </Card>
                                </Col>
                            </Row>

                        </Container>

                    </Card>

                </Col>

            </Row>

        );
    }
}

export default Panels;
