import React from "react";
import { Link } from "react-router-dom";
import {
    Card,
    CardHeader,
    CardTitle,
    CardBody,
    CardFooter,
    Container,
    Row,
    Col,
    Form,
    InputGroup,
    InputGroupAddon,
    InputGroupText,
    Input,
    Alert
} from "reactstrap";



import { Button } from "components";
import UserService from '../../services/FireBase/user';

import Logo from "assets/img/quirio-logo.png";
import bgImage from "assets/img/bg14.jpg";

class RegisterPage extends React.Component {
    state = {
        email: "",
        password: "",
        firstName: "",
        lastName: "",
        errorMessage: null
    };

    constructor(props) {
        super(props);
        this.registerUser = this
            .registerUser
            .bind(this);
    }

    registerUser() {
        this.setState({errorMessage: null});
        UserService.registerUser(this.state.email, this.state.password, (errorMessage) => {

            if (errorMessage) {
                this.setState({errorMessage: errorMessage});
                setTimeout(() => {
                    this.setState({errorMessage: null});
                }, 2000);
            } else {
                UserService.addUserInfo(
                    this.state.firstName,
                    this.state.lastName
                );
                this
                    .props
                    .history
                    .push('/dashboard?register');
            }
        });
    }

    render() {
        return (
            <div>
                <div className="full-page-content">
                    <div className="register-page">
                        <Container>
                            <Row className="justify-content-center">

                                <Col lg={4} md={8} xs={12}>
                                <div className="logo-container">
                                    <img src={Logo} alt="quirio-logo" />
                                </div>
                                
                                <p className="main-title text-center"> A seamless and affordable way for a plant-based diet </p>
                                    <Card className="card-signup">
                                        <CardHeader className="text-center">
                                      
                                            <CardTitle tag="h4">Register</CardTitle>

                                        </CardHeader>
                                       
                                        <CardBody>
                                            <Form>
                                                <InputGroup
                                                    className={this.state.firstnameFocus
                                                    ? "input-group-focus"
                                                    : ""}>
                                                    <InputGroupAddon addonType="prepend">
                                                        <InputGroupText>
                                                            <i className="now-ui-icons users_circle-08"/>
                                                        </InputGroupText>
                                                    </InputGroupAddon>
                                                    <Input
                                                        type="text"
                                                        placeholder="First Name..."
                                                        onFocus={e => this.setState({firstnameFocus: true})}
                                                        onBlur={e => this.setState({firstnameFocus: false})}
                                                        onChange={e => this.setState({firstName: e.target.value})}
                                                    />
                                                </InputGroup>
                                                <InputGroup
                                                    className={this.state.lastnameFocus
                                                    ? "input-group-focus"
                                                    : ""}>
                                                    <InputGroupAddon addonType="prepend">
                                                        <InputGroupText>
                                                            <i className="now-ui-icons text_caps-small"/>
                                                        </InputGroupText>
                                                    </InputGroupAddon>
                                                    <Input
                                                        type="text"
                                                        placeholder="Last Name..."
                                                        onFocus={e => this.setState({lastnameFocus: true})}
                                                        onBlur={e => this.setState({lastnameFocus: false})}
                                                        onChange={e => this.setState({lastName: e.target.value})}
                                                    />
                                                </InputGroup>
                                                <InputGroup
                                                    className={this.state.emailFocus
                                                    ? "input-group-focus"
                                                    : ""}>
                                                    <InputGroupAddon addonType="prepend">
                                                        <InputGroupText>
                                                            <i className="now-ui-icons ui-1_email-85"/>
                                                        </InputGroupText>
                                                    </InputGroupAddon>
                                                    <Input
                                                        type="email"
                                                        placeholder="Email..."
                                                        onFocus={e => this.setState({emailFocus: true})}
                                                        onBlur={e => this.setState({emailFocus: false})}
                                                        onChange={e => this.setState({email: e.target.value})}/>
                                                </InputGroup>
                                                <InputGroup>
                                                    <Input
                                                        type="password"
                                                        placeholder="password..."
                                                        minLength="8"
                                                        required
                                                        onChange={e => this.setState({password: e.target.value})}/>
                                                </InputGroup>

                                            </Form>
                                            {(this.state.errorMessage
                                                ? <Alert color="danger">
                                                        {this.state.errorMessage}</Alert>
                                                : null)}
                                        </CardBody>
                                        <CardFooter className="text-center">
                                            <Button color="primary" size="lg" round onClick={this.registerUser}>
                                                Get Started
                                            </Button>
                                            
                                            <Link to="/LoginPage" className="nav-link">
                                            Back to Log-in
                                                </Link>
                                           
                                        </CardFooter>
                                    </Card>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </div>
                <div
                    className="full-page-background"
                    style={{
                    backgroundImage: "url(" + bgImage + ")"
                }}/>
            </div>
        );
    }
}

export default RegisterPage;
