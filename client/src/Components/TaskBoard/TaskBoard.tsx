import React, { useEffect, useState } from "react";
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
        name: 'Card 1',
        description: 'Task descriptions should be unambiguous, accurate, factual, comprehensible, correct and uniformly designed.',
        date: new Date(),
        priority: Priority.Low
      },
      {
        id: 2,
        name: 'Card 2',
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
        name: 'Card 3',
        description: 'Task descriptions should be unambiguous, accurate, factual, comprehensible, correct and uniformly designed.',
        date: new Date(),
        priority: Priority.Low
      }
    ]
  }
]

export function TaskBoard() {
  const [groups, setGroups] = useState<TaskCardGroupVM[]>(taskGroups)
  const [taskIdCounter, setTaskIdCounter] = useState<number>(4);

  function onCardGroupChange(cardId: number, fromGroupId: number, toGroupId: number) {
    let updatedGroups = [...groups];
    const currentGroup = updatedGroups.find(x => x.id === fromGroupId);
    
    if (currentGroup){
      const cardToMove = currentGroup?.tasks.find(x => x.id === cardId);
      if (cardToMove) {
        currentGroup.tasks = currentGroup.tasks.filter(x => x.id !== cardId);
        const groupToMoveTo = updatedGroups.find(x => x.id === toGroupId);
        if (groupToMoveTo) {
          groupToMoveTo.tasks.push(cardToMove);
        }
        setGroups(updatedGroups);
      }
    }
  }
  
  return <div className="taskboard">
    {groups.map(group => <TaskCardGroup taskIdCounter={taskIdCounter} setTaskIdCounter={setTaskIdCounter} onCardGroupChange={onCardGroupChange} group={group} groupOptions={taskGroups}/>)}
  </div>
}