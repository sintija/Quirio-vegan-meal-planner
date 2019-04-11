import React from 'react'; 
import styled from 'styled-components'; 
import {Draggable} from 'react-beautiful-dnd';
import { Col } from 'reactstrap';

const Container  = styled.div`
border: 1px solid #93BE27; 
padding:8px; 
margin-bottom:8px;
background-color: ${props => (props.isDragging ? '#94DC19' : 'white')};
border-radius: 3px;

`;

/**
 * Task component within a draggable elements
 */
export default class Task extends React.Component {
    render() {
        return ( 
        <Draggable draggableId={this.props.task.id} index={this.props.index}>  
        {(provided, snapshot)  => (
        <Col  xs={(this.props.column !== "column-1" ? 12 : 6)}
            sm={(this.props.column !== "column-1" ? 12 : 6)}
            md={6}
            lg={6}>

        <Container

        className="card"

        {...provided.draggableProps}
        {...provided.dragHandleProps}
        ref={provided.innerRef}
        isDragging={snapshot.isDragging}
        
        
        >
        <div style={{"marginLeft":"23%"}}>
            <img src={this.props.task.img} alt={this.props.task.content} style={{"height":"2rem"}} />
            <p>{this.props.task.content}</p>
        </div>
        
        
        
        </Container>
        </Col>


        )}

       
        </Draggable>
     
        );
    }
}