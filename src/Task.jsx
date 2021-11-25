import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components"

export function Task({ task, index }){

    const Task = styled.div`
        padding: 3px 2px 3px;

        border: 1px solid lightgrey;
        margin-bottom: 8px;
        border-radius: 2px;
        background-color: ${props => (props.isDragging ? "lightgreen" : "white")};

`;

    return (
        <Draggable draggableId={ task.id } index={index}>
            {(provided, snapshot) => (
                <Task
                    ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}
                    isDragging={snapshot.isDragging}
                >
                    { task.content }
                </Task>

)}
</Draggable>

    )
}