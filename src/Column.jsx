import { Droppable, Draggable } from "react-beautiful-dnd";
import styled from "styled-components";
import { Task } from "./Task";

const Container = styled.div`
    margin: 5px;
    border: 1px solid lightgrey;
    border-radius: 2px;
    margin-bottom: 8px;
    width: 220px;
    diplay: flex;
    background-color: white;
    flex-direction: column;
  `;

  const Title = styled.h3`
    padding: 8px;
  `;

  const TaskList = styled.div`
    padding: 8px;
    transition: background-color 0.4s ease;
    background-color: ${(props) =>
      props.isDraggingOver ? "skyblue" : "inherit"};
    flex-grow: 1;
    min-height: 200px;
  `;
export function Column({ column, tasks, index }) {

  return (
    <Draggable draggableId={column.id} index={index}>
      {provided => (

        <Container {...provided.draggableProps} ref={provided.innerRef}>
      <Title { ...provided.dragHandleProps}>{column.title}</Title>
      <Droppable droppableId={column.id} type="task">
        {(provided, snapshot) => (
          <TaskList
          {...provided.droppableProps}
          ref={provided.innerRef}
                isDraggingOver={snapshot.isDraggingOver}

          >
            {tasks.map((task, i) => (
              <Task key={i} task={task} index={i} />
              ))}
            {provided.placeholder}
          </TaskList>
        )}
      </Droppable>
    </Container>
              )}
  </Draggable>
  );
}
