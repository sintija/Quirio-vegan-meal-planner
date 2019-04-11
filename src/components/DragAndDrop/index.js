import Preferences from '../../services/FireBase/preferences';
import React from 'react';
import '@atlaskit/css-reset';
import styled from 'styled-components';
import {DragDropContext} from 'react-beautiful-dnd';
import initalData from './initial-data';
import Column from './column';

import {Row} from "reactstrap";

const Container = styled.div`
  display:flex; 

`;

/**
 * Reordering functionality
 */
class DragAndDrop extends React.Component {
    state = initalData;

    onDragEnd = result => {

        const {destination, source, draggableId} = result;

        if (!destination) {
            return;
        }

        if (destination.droppableId === source.droppableId && destination.index === source.index) {

            return;
        }

        const start = this.state.columns[source.droppableId];
        const finish = this.state.columns[destination.droppableId];

        if (start === finish) {

            const newTaskIds = Array.from(start.taskIds);
            newTaskIds.splice(source.index, 1);
            newTaskIds.splice(destination.index, 0, draggableId);

            const newColumn = {
                ...start,
                tasksIds: newTaskIds
            };

            const newState = {

                ...this.state,
                columns: {
                    ...this.state.columns,
                    [newColumn.id]: newColumn
                }
            };

            this.setState(newState);


            return;

        }

        //Moving From One List To Another

        const startTaskIds = Array.from(start.taskIds);
        startTaskIds.splice(source.index, 1);

        const newStart = {

            ...start,
            taskIds: startTaskIds
        };

        const finishTaskIds = Array.from(finish.taskIds);
        finishTaskIds.splice(destination.index, 0, draggableId);
        const newFinish = {
            ...finish,
            taskIds: finishTaskIds
        };

        const newState = {

            ...this.state,
            columns: {
                ...this.state.columns,
                [newStart.id]: newStart,
                [newFinish.id]: newFinish
            }
        };

        this.setState(newState);

        Preferences.updatePreferencesDoc(newState.columns["column-1"].taskIds, newState.columns["column-3"].taskIds, newState.columns["column-2"].taskIds);
    };

    componentDidMount() {
        this.getPreferences();
    }

    /**
     * Fetch preferences data
     */

    getPreferences() {
        Preferences
            .fetchPreferencesDoc()
            .then((preferences) => {
                if (preferences) {


                    this.setState(prevState => ({
                        ...prevState,
                        columns: {
                            ...prevState.columns,
                            'column-1': {
                                ...prevState.columns['column-1'],
                                taskIds: (preferences.popularItems ? preferences.popularItems : [])
                            }
                        }
                    }));


                    this.setState(prevState => ({
                        ...prevState,
                        columns: {
                            ...prevState.columns,
                            'column-2': {
                                ...prevState.columns['column-2'],
                                taskIds: (preferences.allowedIngredient ? preferences.allowedIngredient : [])
                            }
                        }
                    }));

                    this.setState(prevState => ({
                        ...prevState,
                        columns: {
                            ...prevState.columns,
                            'column-3': {
                                ...prevState.columns['column-3'],
                                taskIds: (preferences.excludedIngredient ? preferences.excludedIngredient : [])
                            }
                        }
                    }));

                }
            })
    }


    render() {

        return (

            <Row>
                <DragDropContext onDragEnd={this.onDragEnd}>

                        {this
                            .state
                            .columnOrder
                            .map(columnId => {
                                const column = this.state.columns[columnId];
                                const tasks = column
                                    .taskIds
                                    .map((taskId, index) => this.state.tasks[taskId],);

                                return <Column key={columnId} column={column} tasks={tasks}/>

                            })}

                </DragDropContext>
            </Row>
        );
    }
}

export default DragAndDrop;
