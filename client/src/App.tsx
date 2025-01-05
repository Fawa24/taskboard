import React from "react"
import { Priority } from "./Enums/Priority"
import { TaskCardGroupVM } from "./Models/TaskCardGroupVM"
import { TaskCardGroup } from "./Components/TaskCardGroup/TaskCardGroup"

function App() {

  const cardGroup: TaskCardGroupVM = {
    id: 1,
    name: 'To Do',
    tasks: [
      {
        id: 1,
        name: 'Card name',
        description: 'Task descriptions should be unambiguous, accurate, factual, comprehensible, correct and uniformly designed.',
        date: new Date(),
        priority: Priority.Low
      },
      {
        id: 1,
        name: 'Card name',
        description: 'Task descriptions should be unambiguous, accurate, factual, comprehensible, correct and uniformly designed.',
        date: new Date(),
        priority: Priority.Low
      }
    ]
  }

  return (
    <TaskCardGroup group={cardGroup}/>
  )
}

export default App
