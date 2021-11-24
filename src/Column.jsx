import styled from "styled-components"


export function Column({ id,  column, tasks }){

    const Container = styled.div`
    margin: 5px;
    border: 1px solid lightgrey;
    border-radius: 2px
    `;

    const Title = styled.h3`
        padding: 8px
    `;

    const TaskList = styled.div`
        padding: 8px
    `;




    return (
            <Container>
                <Title>{ column.id }</Title>
                <TaskList>Task go here</TaskList>


            </Container>

    )

}