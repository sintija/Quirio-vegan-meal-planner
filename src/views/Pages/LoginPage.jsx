import React from "react";
import {
    Card,
    CardBody,
    CardHeader,
    CardFooter,
    Form,
    Container,
    Col,
    Input,
    InputGroup,
    InputGroupAddon,
    InputGroupText, Alert
} from "reactstrap";

import {Button} from "components";

import Logo from "assets/img/quirio-logo.png";

import User from '../../services/FireBase/user';

import bgImage from "assets/img/bg14.jpg";



/*Reference taken from https://www.youtube.com/watch?v=f4Lg-nzE0u8 and https://auth0.com/blog/react-tutorial-building-and-securing-your-first-app/ */
/**
 * Styling Components taken from
 */

class LoginPage extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this
            .handleChange
            .bind(this);
        this.login = this
            .login
            .bind(this);
    }

    state = {
        email: '',
        password: '',
        loggedIn: null,
        errorMessage: null
    };

    /**
     * update user state
     */
    componentDidMount() {
        User.authListener((user) => {
            if (user) {
                this.setState({loggedIn: user});
            } else {
                this.setState({loggedIn: null});
            }
        });
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    login(e) {
        e.preventDefault();
        User.logIn(this.state.email, this.state.password, (error) => {
            if(error){
                this.setState({ errorMessage: error.message});
            } else {
                this
                    .props
                    .history
                    .push('/dashboard');
            }
        });
    }

    render() {
        return (


            <div>

                <div className="full-page-content">
                    <div className="login-page">
                        <Container>

                            <Col xs={12} md={12} lg={4} className="ml-auto mr-auto">
                                <div className="logo-container align-middle">
                                    <img src={Logo} alt="quirio-logo"/>
                                </div>

                                <Form>
                                    <Card className="card-login card-plain">
                                        <CardHeader></CardHeader>
                                        <p className="main-title text-center">
                                            A seamless and affordable way for a plant-based diet
                                        </p>

                                        <CardBody>
                                            <InputGroup
                                                className={"no-border form-control-lg " + (this.state.firstnameFocus
                                                ? "input-group-focus"
                                                : "")}>
                                                <InputGroupAddon addonType="prepend">
                                                    <InputGroupText>
                                                        <i className="now-ui-icons users_circle-08"/>
                                                    </InputGroupText>
                                                </InputGroupAddon>
                                                <Input
                                                    value={this.state.email}
                                                    onChange={this.handleChange}
                                                    type="email"
                                                    name="email"
                                                    placeholder="Email Address..."/>
                                            </InputGroup>
                                            <InputGroup
                                                className={"no-border form-control-lg " + (this.state.lastnameFocus
                                                ? "input-group-focus"
                                                : "")}>
                                                <InputGroupAddon addonType="prepend">
                                                    <InputGroupText>
                                                        <i className="now-ui-icons text_caps-small"/>
                                                    </InputGroupText>
                                                </InputGroupAddon>
                                                <Input
                                                    value={this.state.password}
                                                    onChange={this.handleChange}
                                                    type="password"
                                                    name="password"
                                                    placeholder="Password..."/>
                                            </InputGroup>
                                        </CardBody>
                                        <CardFooter>
                                            <Button
                                                block
                                                round
                                                color="primary"
                                                size="lg"
                                                href="#login"
                                                className="mb-3"
                                                onClick={this.login}>
                                                Log In
                                            </Button>
                                            <div className="pull-left">
                                                <h6>
                                                    <a href="/pages/register-page" className="link footer-link register">
                                                        Register
                                                    </a>
                                                </h6>
                                            </div>
                                            <div className="pull-right"></div>
                                            {(this.state.errorMessage
                                                ? <Alert color="danger">
                                                    {this.state.errorMessage}</Alert>
                                                : null)}
                                        </CardFooter>
                                    </Card>
                                </Form>
                            </Col>
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

export default LoginPage;
