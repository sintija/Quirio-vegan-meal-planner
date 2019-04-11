import React from "react";
import {Link} from "react-router-dom";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Container,
} from "reactstrap";

import dashboardRoutes from "routes/dashboard.jsx";
import User from '../../services/FireBase/user';
import mainLogo from "assets/img/Assets/logo.png";

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            dropdownOpen: false,
            color: "transparent",
            firstName: ""
        };
        this.toggle = this.toggle.bind(this);
        this.dropdownToggle = this.dropdownToggle.bind(this);
    }


    toggle() {
        if (this.state.isOpen) {
            this.setState({
                color: "transparent"
            });
        } else {
            this.setState({
                color: "white"
            });
        }
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    dropdownToggle(e) {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }

    getBrand() {
        var name;
        dashboardRoutes.map((prop, key) => {
            if (prop.collapse) {
                prop.views.map((prop, key) => {
                    if (prop.path === this.props.location.pathname) {
                        name = prop.name;
                        if (prop.path === "/rtl-support") {
                            name = " وحة القيادة";
                        }
                    }
                    return null;
                });
            } else {
                if (prop.redirect) {
                    if (prop.path === this.props.location.pathname) {
                        name = prop.name;
                    }
                } else {
                    if (prop.path === this.props.location.pathname) {
                        name = prop.name;
                    }
                }
            }
            return null;
        });
        return name;
    }

    openSidebar() {
        document.documentElement.classList.toggle("nav-open");
        this.refs.sidebarToggle.classList.toggle("toggled");
    }

    // function that adds color white/transparent to the navbar on resize (this is for the collapse)
    updateColor() {
        if (window.innerWidth < 993 && this.state.isOpen) {
            this.setState({
                color: "white"
            });
        } else {
            this.setState({
                color: "transparent"
            });
        }
    }

    componentDidMount() {
        User.getUserInfo((payload) => {
            if(payload){
                this.setState({firstName: payload.firstName})
            }
        });
        window.addEventListener("resize", this.updateColor.bind(this));
    }

    componentDidUpdate(e) {
        if (
            window.innerWidth < 993 &&
            e.history.location.pathname !== e.location.pathname &&
            document.documentElement.className.indexOf("nav-open") !== -1
        ) {
            document.documentElement.classList.toggle("nav-open");
            this.refs.sidebarToggle.classList.toggle("toggled");
        }
    }

    signOutHandler() {
        User.logOut();
    }

    render() {
        const {pathname} = this.props.location;

        return (
            <Navbar expand="lg" color="white" style={{"zIndex": 2}}>
                <Container>
                    <NavbarBrand className="quirio-logo-img">
                        <img src={mainLogo} alt="main-logo"/>
                    </NavbarBrand>
                    <NavbarToggler onClick={this.toggle}>
                        <span className="navbar-toggler-bar navbar-kebab"/>
                        <span className="navbar-toggler-bar navbar-kebab"/>
                        <span className="navbar-toggler-bar navbar-kebab"/>
                    </NavbarToggler>
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar >
                            <NavItem active={ pathname === "/dashboard" ? true : false }>
                                <Link to="/dashboard" className="nav-link">
                                    Home
                                </Link>
                            </NavItem>
                            <NavItem active={ pathname === "/preferences" ? true : false }>
                                <Link to="/preferences" className="nav-link">
                                    Preferences
                                </Link>
                            </NavItem>
                            <NavItem active={ pathname === "/shoppinglist" ? true : false }>
                                <Link to="/shoppinglist" className="nav-link">
                                    Shopping List
                                </Link>
                            </NavItem>
                            <Dropdown tag="nav" isOpen={this.state.dropdownOpen} toggle={(e) => this.dropdownToggle(e)}>
                                <DropdownToggle caret nav>
                                    <p>Hi {(this.state.firstName !== "" ? this.state.firstName : ":)")}</p>
                                </DropdownToggle>
                                <DropdownMenu>
                                    <DropdownItem tag="a" onClick={this.signOutHandler}>Logout</DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                        </Nav>
                    </Collapse>
                </Container>
            </Navbar>
        );
    }
}

export default Header;
