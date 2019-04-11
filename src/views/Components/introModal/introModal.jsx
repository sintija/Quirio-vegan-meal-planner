import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, Row, Col, ModalFooter } from 'reactstrap';
import {Instructions} from 'components';

import img1 from 'assets/img/onboarding1.png';
import img2 from 'assets/img/onboarding2.png';
import img3 from 'assets/img/onboarding3.png';


class IntroModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: true
        };

        this.goToPreferences = this.goToPreferences.bind(this);
        this.closeModal = this.closeModal.bind(this);

    }

    goToPreferences () {
        this
        .props
        .history
        .push('/preferences');
    }

    closeModal(){
        this.setState({modal:false})
    }

    render() {
        return (
            <div>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>Get Started </ModalHeader>
                    <ModalBody>

                        <Row> 
                            <Col md={6} xs={6} lg={6}> 
                             Step 1 - Choose Your Favourite Food, Add it to preferences. 
                            </Col>

                            <Col  md={6} xs={6} lg={6}> 
                            <img className="modal-graphics" src={img1} alt="img1"/>
                            </Col>
                            </Row>

                            <br />

                            <Row> 
                            <Col md={6} xs={6} lg={6}> 
                             Step 2 - Meal Plan will be generated according to your taste. You wil have have three alternative
                             options to choose from. 
                            </Col>

                          

                            <Col  md={6} xs={6} lg={6}> 
                            <img className="modal-graphics" src={img2} alt="img1"/>
                            </Col>
                            </Row>

                            <br />


                            <Row> 
                            <Col md={6} xs={6} lg={6}> 
                             Step 3 - Save ingredients to the shopping list, follow instructions to prepare meal. 
                            </Col>

                            <Col  md={6} xs={6} lg={6}> 
                            <img className="modal-graphics" src={img3} alt="img1"/>
                            </Col>
                            </Row>

                         
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.goToPreferences}>Go To preferences</Button>{' '}
                        <Button color="danger" onClick={this.closeModal}>Close</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}

export default IntroModal;