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
    Container
} from "reactstrap";

//import images 

import main from "../../assets/img/pl-main.png";
import button from "../../assets/img/pl-button.png";
import text from "../../assets/img/pl-text.png";
import alternative from "../../assets/img/pl-alternative.png";
import icon from "../../assets/img/pl-icon-lg.png";









class Panels extends React.Component {
    constructor(props) {
        super(props);
 
    }




    render() {


        return (
            <div>


                    <Row className="justify-content-center">
                        <Col lg={8} md={8} xs={12}>
                            <Card>
                                <CardHeader className="meal-item-header">
                                    <CardTitle tag="h6" className="text-center meal-time">{this.props.mealTime}
                                    </CardTitle>
                                </CardHeader>
                                <Container>
                                    
                                <Row>
                                    <Col lg={6} md={8} xs={12}>
                                        <CardBody>
                                            <Row>
                                                <Col xs={12} sm={6} lg={3}>
                                                    <Card
                                                        style={{
                                                        width: "20rem"
                                                    }}>
                                                        {main}

                                                        <CardBody>
                                                            <Row>
                                                                <Col xs={6} sm={6} lg={6}>
                                                                    <CardTitle className="title-size">
                                                                        
                                                                            {text}</CardTitle>
                                                                    
                                                                </Col>
                                                                <Col xs={6} sm={6} lg={6}>

                                                                    

                                                                </Col>
                                                            </Row>

                                                            <Row>
                                                                <Col xs={12} sm={12} lg={12}>
                                                                    <Row>

                                                                        <Col className="font-icon-list" xs={2} sm={2} lg={2}>
                                                                            <div className="menu-icons">
                                                                                <i className="fa fa-star"/>
                                                                                <p>
                                                                                    {icon}
                                                                                </p>
                                                                            </div>
                                                                        </Col>

                                                                        <Col className="font-icon-list" xs={4} sm={4} lg={4}>
                                                                            <div className="menu-icons">
                                                                                <i className="fa fa-clock-o"/>
                                                                                <p>
                                                                                    {icon}
                                                                                </p>
                                                                            </div>
                                                                        </Col>

                                                                        <Col className="font-icon-list" xs={3} sm={3} lg={3}>
                                                                            <div className="menu-icons">
                                                                                <i className="fa fa-money"/>
                                                                                <p>
                                                                                    {icon}
                                                                                </p>
                                                                            </div>
                                                                        </Col>
                                                                    </Row>
                                                                </Col>

                                                            </Row>

                                                            <Row>

                                                                <Col xs={12} sm={12} lg={12}>
                                                                    <Row>
                                                                        <Col className="font-icon-list" xs={4} sm={4} lg={4}>
                                                                            <div className="menu-icons">
                                                                                <i className="fa fa-heart-o"/>
                                                                                <p>
                                                                                    {text}
                                                                                </p>
                                                                            </div>
                                                                        </Col>

                                                                        <Col className="font-icon-list" xs={4} sm={4} lg={4}>
                                                                            <div className="menu-icons">
                                                                                <i className="fa fa-thumbs-up"/>
                                                                                <p>
                                                                                   {text}
                                                                                </p>
                                                                            </div>
                                                                        </Col>

                                                                        <Col className="font-icon-list" xs={4} sm={4} lg={4}>
                                                                            <div className="menu-icons">
                                                                                <i className="fa fa-trash"/>
                                                                                <p>
                                                                                    {text}
                                                                                </p>
                                                                            </div>
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
                                    <Col lg={6} md={8} xs={12}>
                                        <CardBody>
                                            <Nav pills className="nav-pills-primary">
                                                <NavItem>
                                                    <NavLink
                                                        className={this.state.hTabs === "ht1"
                                                        ? "active"
                                                        : ""}
                                                        onClick={() => this.setState({hTabs: "ht1"})}>
                                                       {button}
                                                    </NavLink>
                                                </NavItem>
                                                <NavItem>
                                                    <NavLink
                                                        className={this.state.hTabs === "ht2"
                                                        ? "active"
                                                        : ""}
                                                        onClick={() => this.setState({hTabs: "ht2"})}>
                                                           {button}
                                                    </NavLink>
                                                </NavItem>
                                                <NavItem>
                                                    <NavLink
                                                        className={this.state.hTabs === "ht3"
                                                        ? "active"
                                                        : ""}
                                                        onClick={() => this.setState({hTabs: "ht3"})}>
                                                          {button}
                                                    </NavLink>
                                                </NavItem>
                                            </Nav>
                                            <TabContent activeTab={this.state.hTabs} className="tab-space">
                                                <TabPane tabId="ht1">
                                                    <ul>
                                                    {text}
                                                    </ul>

                                                    <Row>
                                                        <Col xs={4} sm={4} lg={4}>

                                                            <Button color="primary">
                                                            {button}
                                                            </Button>

                                                        </Col>

                                                        <Col xs={4} sm={4} lg={4}>

                                                            <Button color="primary">
                                                               {text}
                                                            </Button>

                                                        </Col>

                                                    </Row>

                                                </TabPane>
                                                <TabPane tabId="ht2">

                                                    <Table>
                                                        <thead>
                                                            <tr>
                                                                <th>{text}</th>
                                                                <th>{text}</th>
                                                                <th>{text}</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                           {text}
                                                        </tbody>
                                                    </Table>

                                                </TabPane>
                                                <TabPane tabId="ht3">{text}</TabPane>
                                            </TabContent>
                                        </CardBody>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Card>
                                        {alternative}
                                            <CardTitle>
                                                {text}
                                            </CardTitle>
                                            <CardBody>
                                                <CardText>

                                                    <Row>
                                                        <Col xs={12} sm={12} lg={12}>
                                                            <Row>

                                                                <Col className="font-icon-list" xs={2} sm={2} lg={2}>
                                                                 <div className="">
                                                                        <i className=" fa fa-star"/>
                                                                       
                                                                           {icon}
                                                                     
                                                                    </div>
                                                                </Col>

                                                                <Col className="font-icon-list" xs={4} sm={4} lg={4}>
                                                                    <div className="menu-icons">
                                                                        <i className="fa fa-clock-o"/>
                                                                     
                                                                           {icon}
                                                                        
                                                                    </div>
                                                                </Col>

                                                                <Col className="font-icon-list" xs={3} sm={3} lg={3}>
                                                                    <div className="menu-icons">
                                                                        <i className="fa fa-money"/>
                                                                      
                                                                          {icon}
                                                                     
                                                                    </div>
                                                                </Col>
                                                            </Row>
                                                        </Col>

                                                    </Row>

                                                </CardText>

                                                <Button
                                                    onClick={() => {
                                                    this.switchSelectionHandler('altOne')
                                                }}
                                                    color="primary"
                                                    round>
                                                    Select
                                                </Button>

                                            </CardBody>
                                        </Card>
                                    </Col>

                                    <Col>
                                        <Card>
                                           {alternative}
                                            <CardBody>
                                                <CardTitle>
                                               {text}
                                                </CardTitle>
                                                <CardText>

                                                    <Row>
                                                        <Col xs={12} sm={12} lg={12}>
                                                            <Row>

                                                                <Col className="font-icon-list" xs={2} sm={2} lg={2}>
                                                                    <div className="menu-icons">
                                                                        <i className="fa fa-star"/>
                                                                        {/* <p> */}
                                                                           {icon}
                                                                        {/* </p> */}
                                                                    </div>
                                                                </Col>

                                                                <Col className="font-icon-list" xs={4} sm={4} lg={4}>
                                                                    <div className="menu-icons">
                                                                        <i className="fa fa-clock-o"/>
                                                                        {/* <p> */}
                                                                           {icon}
                                                                        {/* </p> */}
                                                                    </div>
                                                                </Col>

                                                                <Col className="font-icon-list" xs={3} sm={3} lg={3}>
                                                                    <div className="menu-icons">
                                                                        <i className="fa fa-money"/>
                                                                        {/* <p> */}
                                                                            {icon}
                                                                        {/* </p> */}
                                                                    </div>
                                                                </Col>
                                                            </Row>
                                                        </Col>

                                                    </Row>

                                                </CardText>
                                                <Button
                                                    onClick={() => {
                                                    this.switchSelectionHandler('altTwo')
                                                }}
                                                    color="primary"
                                                    round>
                                                   {button}
                                                </Button>
                                            </CardBody>
                                        </Card>
                                    </Col>

                                    <Col>
                                        <Card>
                                            {alternative}
                                            <CardBody>
                                                <CardTitle>
                                                    {text}
                                                </CardTitle>
                                                <CardText>{text} </CardText>
                                                <Button
                                                    onClick={() => {
                                                    this.switchSelectionHandler('altThree')
                                                }}
                                                    color="primary"
                                                    round>
                                               {text}
                                                </Button>
                                            </CardBody>
                                        </Card>
                                    </Col>
                                </Row>
                                </Container>
                            </Card>
                        </Col>
                    </Row>
            </div>
        );
    }
}

export default Panels;
