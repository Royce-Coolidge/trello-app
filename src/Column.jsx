import { Droppable } from "react-beautiful-dnd";
import styled from "styled-components"
import { Task } from "./Task";


export function Column({ id,  column, tasks }){

    const Container = styled.div`
    margin: 5px;
    border: 1px solid lightgrey;
    border-radius: 2px
    margin-bottom: 8px
    `;

    const Title = styled.h3`
        padding: 8px
    `;

    const TaskList = styled.ul`
        padding: 8px;
        transition: background-color 0.4s ease;
        background-color: ${props => props.isDraggingOver ? "skyblue" : "white"}
    `;


    return (
        <Container>
             <Title>{ column.title }</Title>
                <Droppable droppableId={column.id}>


                    { (provided, snapshot) => (
                <TaskList
                        {...provided.droppableProps} ref={provided.innerRef}
                        isDraggingOver={snapshot.isDraggingOver}
                >
                        {tasks.map((task, i) => <Task task={task} index={i} />)}
                        {provided.placeholder}
                </TaskList>

)}

                </Droppable>
</Container>

    )

}