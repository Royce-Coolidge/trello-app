import { useState } from 'react'
import './App.css'
import { Column } from './Column'
import initialData from './initial-data'


function App() {

  const [state , initialState] = useState(initialData)

  return (
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
  )
}

export default App
