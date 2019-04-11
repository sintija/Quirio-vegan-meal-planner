import React from "react";
import { Col, Button } from "reactstrap";



class PanelHeader extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
        visible: true
    };
    this.onDismiss = this.onDismiss.bind(this);
 
  }
  onDismiss(){
    this.setState({visible: !this.state.visible})
  }


  render() {
    return (
      <div
      style={this.props.style}

      
        className={
          "panel-header " +
          (this.props.size !== undefined
            ? "panel-header-" + this.props.size
            : "")      

        }
      >

      <h5 className="inspirationalQuote text-center"> {this.props.inspirationalQuote} </h5>
        {this.props.content}

        <Col md={4} xs={12}>

                          </Col>


       


      </div>
    );
  }
}

export default PanelHeader;
