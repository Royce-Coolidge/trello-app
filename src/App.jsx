import { useState } from "react";
import "./App.css";
import { Column } from "./Column";
import initialData from "./initial-data";
import { DragDropContext } from "react-beautiful-dnd";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;

function App() {
  const [state, setState] = useState(initialData);

  function onDragEnd(result) {

    const { destination, source, draggableId } = result;
    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }
    const start = state.columns[source.droppableId];
    const end = state.columns[destination.droppableId];

    if (start === end) {
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
    } else {
      // Moving from one list to another
      const startTaskIds = Array.from(start.taskIds)
      startTaskIds.splice(source.index, 1)
      const newStart =
      {
        ...start,
        taskIds: startTaskIds
      }

      const endTaskIds = Array.from(end.taskIds)
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

  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Container>
        {state.columnOrder.map((columnId) => {
          return (
            <Column
              key={state.columns[columnId].id}
              column={state.columns[columnId]}
              tasks={state.columns[columnId].taskIds.map(
                (taskId) => state.tasks[taskId]
              )}
            />
          );
        })}
      </Container>
    </DragDropContext>
  );
}

export default App;
