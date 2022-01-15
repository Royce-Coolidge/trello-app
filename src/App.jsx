import { useState } from "react";
import "./App.css";
import { Column } from "./Column";
import initialData from "./initial-data";
import {
  DragDropContext, Droppable
} from "react-beautiful-dnd";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;

function App() {
  const [state, setState] = useState(initialData);

  function onDragEnd(result) {

    const { destination, source, draggableId, type } = result;
    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    if (type === "column") {
      //create new column order array
      const newColumnOrder = Array.from(state.columnOrder)
      // remove old column id from origional column order array
      newColumnOrder.splice(source.index, 1)
      // and inserting the column id into the new postion
      newColumnOrder.splice(destination.index, 0, draggableId)

      // create newState object to mutate changes
      const newState = {
        ...state,
        columnOrder: newColumnOrder,
      }

      setState(newState)

    }



    const start = state.columns[source.droppableId];
    const end = state.columns[destination.droppableId];

console.log(source)
    if (start === end && type === "task") {
      const newTaskIds = Array.from(start.taskIds);
      newTaskIds.splice(source.index, 1);
      newTaskIds.splice(destination.index, 0, draggableId);

      const newColumn = {
        ...start,
        taskIds: newTaskIds,
      };

      const newState = {
        ...state,
        columns: {
          ...state.columns,
          [newColumn.id]: newColumn,
        },
      };

      setState(newState);
      return;

    }
      // Moving from one list to another
      // create new task id array to mutate
      const startTaskIds = Array.from(start.taskIds)
      // remove dragged task id from this array
      startTaskIds.splice(source.index, 1)
      // create new start column with same properties as old column but with our new start task is array

      const newStart =
      {
        ...start,
        taskIds: startTaskIds
      }

      const endTaskIds = Array.from(end.taskIds)
      // insert draggable id at destination index
      endTaskIds.splice(destination.index, 0, draggableId)
      const newEnd = {
        ...end,
        taskIds: endTaskIds
      }

      const newState = {
        ...state,
        columns: {
          ...state.columns,
          [newStart.id]: newStart,
          [newEnd.id]: newEnd,
        }
      }
      setState(newState)



  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="all-columns" direction="horizontal" type="column">
        {provided => (

          <Container
          {...provided.droppableProps}
            ref={provided.innerRef}
          >

        {state.columnOrder.map((columnId, index) => {
          return (
            <Column
              index={index}
            key={state.columns[columnId].id}
            column={state.columns[columnId]}
            tasks={state.columns[columnId].taskIds.map(
              (taskId) => state.tasks[taskId]
              )}
              />
              );
        })}
            { provided.placeholder}
      </Container>
            )
        }
      </Droppable>
    </DragDropContext>
  );
}

export default App;
