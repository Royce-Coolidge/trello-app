import { useState } from 'react'
import './App.css'
import { Column } from './Column'
import initialData from './initial-data'
import { DragDropContext } from "react-beautiful-dnd"


function App() {

  const [state, setState] = useState(initialData)

  function onDragEnd(result) {
    const { destination, source, draggableId } = result

    if (!destination) {
      return;
    }

    if (destination.droppableId === source.droppableId && destination.index === source.index) {
      return;
    }

    const column = state.columns[source.droppableId]
    const newTaskIds = Array.from(column.taskIds)
    newTaskIds.splice(source.index, 1)
    newTaskIds.splice(destination.index, 0, draggableId)

    console.log(column)

    const newColumn = {
      ...column,
      taskIds: newTaskIds
    }

    const newState = {
      ...state,
      columns: {
        ...state.columns,
        [newColumn.id] : newColumn
      }
    }

    setState(newState)

  }

  return (
      <DragDropContext onDragEnd={onDragEnd}>
    <div>
      { state.columnOrder.map((columnId) => {
        return (
          <Column
            key={state.columns[columnId].id}
            column={state.columns[columnId]}
            tasks={state.columns[columnId].taskIds.map(taskId => state.tasks[taskId])}
            />)

      })}
    </div>
            </DragDropContext>
  )
}

export default App
