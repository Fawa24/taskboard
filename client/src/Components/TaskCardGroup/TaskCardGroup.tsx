import React from "react";
import { TaskCardGroupVM } from "../../Models/TaskCardGroupVM";
import { TaskCard } from "../TaskCard/TaskCard";

export function TaskCardGroup({group}: {group: TaskCardGroupVM}) {
  return <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      gap: '10px',
      width: '250px'
    }}>
    <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '35px'}}>
      <span>{group.name}</span> 
      <span>{group.tasks.length}</span>
    </div>
    <button style={{width: '250px', height: '35px'}}>
      Add new card
    </button>
    {group.tasks.map(x => 
      <TaskCard card={x} />
    )}
  </div>
}