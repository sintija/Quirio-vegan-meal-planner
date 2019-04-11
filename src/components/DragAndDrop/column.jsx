import React from 'react';
import styled from 'styled-components';
import {Droppable} from 'react-beautiful-dnd';
import Task from './task';

import {
    Card,
    CardTitle,
    CardBody,
    Col,
    Row
  } from "reactstrap";

const Container = styled.div `
margin:8px ;

display:flex; 
flex-direction:column; 

`;
const Title = styled.h3 `
padding:8px;

`;
const TaskList = styled.div `
padding:8px;
transition:background-color 0.2s ease;
background-color : ${props => (props.isDraggingOver
    ? '#F3F3F3'
    : 'white')};
flex-grow:1;
min:height:100px;

`;
/*
Column Adjustments for Drag and Drop element
 */
export default class Column extends React.Component {

    render() {
        return (

            <Col
                xs={this.props.column.columnWidths.xs}
                sm={this.props.column.columnWidths.sm}
                md={this.props.column.columnWidths.md}
                lg={this.props.column.columnWidths.lg}>
                <Card>

                    <Container>
                        <CardTitle tag="h4" className="text-center">
                            <img src={this.props.column.img} alt=""/>
                        </CardTitle>
                        <Title>
                                {this.props.column.title}
                            </Title>
                        <CardBody className="preferences-card">

                            <Droppable droppableId={this.props.column.id}>

                                {(provided, snapshot) => (

                                    <TaskList
                                        ref={provided.innerRef}
                                        {...provided.droppableProps}
                                        isDraggingOver={snapshot.isDraggingOver}>
                                        <Row>
                                            {this
                                                .props
                                                .tasks
                                                .map((task, index) => {
                                                    if(task){
                                                        return <Task key={task.id} column={this.props.column.id} task={task} index={index}/>
                                                    }
                                                })}
                                            {provided.placeholder}
                                        </Row>
                                    </TaskList>

                                )}

                            </Droppable>
                        </CardBody>
                    </Container>
                </Card>
            </Col>
        );
    }

}