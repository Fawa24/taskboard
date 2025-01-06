import React, { useState } from "react";
import { TaskCardGroupVM } from "../../Models/TaskCardGroupVM";
import { Priority } from "../../Enums/Priority";
import { TaskCardGroup } from "../TaskCardGroup/TaskCardGroup";

const taskGroups: TaskCardGroupVM[] = [
  {
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
        id: 2,
        name: 'Card name',
        description: 'Task descriptions should be unambiguous, accurate, factual, comprehensible, correct and uniformly designed.',
        date: new Date(),
        priority: Priority.Low
      }
    ]
  },
  {
    id: 2,
    name: 'Second group',
    tasks: [
      {
        id: 3,
        name: 'Card name',
        description: 'Task descriptions should be unambiguous, accurate, factual, comprehensible, correct and uniformly designed.',
        date: new Date(),
        priority: Priority.Low
      }
    ]
  }
]

export function TaskBoard() {
  const [groups, setGroups] = useState<TaskCardGroupVM[]>(taskGroups)
  
  return <div className="taskboard">
    {groups.map(group => <TaskCardGroup group={group} />)}
  </div>
}