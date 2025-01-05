import React from "react";
import { TaskCardGroupVM } from "../../Models/TaskCardGroupVM";
import { TaskCard } from "../TaskCard/TaskCard";

export function TaskCardGroup({group}: {group: TaskCardGroupVM}) {
  return <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      gap: '10px',
      width: '250px',
      fontFamily: 'Arial, sans-serif'
    }}>
    <div style={{
      display: 'flex', 
      justifyContent: 'space-between', 
      alignItems: 'center', 
      height: '35px',
      borderTop: '2px solid #ccc',
      borderBottom: '2px solid #ccc'}}>
      <span>{group.name}</span> 
      <span>{group.tasks.length}</span>
    </div>
    <button style={{
      width: '250px', 
      height: '35px',
      border: '2px dashed #ccc',
      background: 'white',
      borderRadius: '6px',
      fontSize: '14px'}}>
      Add new card
    </button>
    {group.tasks.map(x => 
      <TaskCard card={x} />
    )}
  </div>
}