import React, {Component} from 'react';
import {PanelHeader} from "components";
import ShopingListService from '../../../services/FireBase/shoppinList';
import {ListGroup, ListGroupItem, Button, Container, Card, Row, Col, CardHeader, CardTitle, CardBody} from 'reactstrap';
import User from "../../../services/FireBase/user";

export default class ShoppingList extends Component {

    state = {
        shoppingListItems: null,
    };

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

    loadListItems() {
        ShopingListService
            .fetchDoc()
            .then((result) => {
                if (result) {

                    let filteredList = result.filter((el) => {
                        return el != null || el !== "";
                    });

                    this.setState({
                        shoppingListItems: filteredList
                    });
                }

            });
    }

    deleteListItem(listItem) {
        ShopingListService.removeDoc(listItem, () => {
            this.loadListItems();
        });
    }

    componentDidMount() {
        this.loadListItems();
    }

    render()  {

        let shoppingListItems = <ListGroupItem> Shopping list is currently empty. </ListGroupItem>;
        if (this.state.shoppingListItems) {
            shoppingListItems = this
                .state
                .shoppingListItems
                .map((listItem, i) => {
                    return (
                        <ListGroupItem tag="a" href="#" key={i}

                        >
                            <Button color="danger" aria-label="Delete" onClick={() => {
                                this.deleteListItem(listItem)
                            }}>
                                <span aria-hidden>X</span>
                            </Button>
                            <span style={{"display": "inline-block", "marginLeft" : "0.5rem"}}>
                                <p>{listItem}</p>
                            </span>
                        </ListGroupItem>
                    );

                })
        }

        return (
            <div>
                <PanelHeader size="sm"/>

                <Container>
                    <Row>
                        <Col>
                            <Card>
                                <CardHeader className="Card-Header">
                                    <CardTitle tag="h4" className="text-center">
                                        Your Shopping List
                                    </CardTitle>
                                    <br/>
                                </CardHeader>
                                <CardBody>
                                <ListGroup>
                                    {shoppingListItems}
                                </ListGroup>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>

            </div>

        )
    }
}