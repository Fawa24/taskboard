import React, { useState } from "react";
import { TaskCardVM } from "../../Models/TaskCardVM";
import { Priority } from "../../Enums/Priority";

interface TaskCardGroupDropdownOptions {
  id: number;
  name: string;
}

export interface TaskCardProps {
  card: TaskCardVM;
  groupOptions: TaskCardGroupDropdownOptions[];
  currentGroupId: number;
  onCardGroupChange;
}

export function TaskCard({card, groupOptions, currentGroupId, onCardGroupChange} : TaskCardProps) {
  
  const options: Intl.DateTimeFormatOptions = {
    weekday: "short",
    day: "2-digit",
    month: "short",
  };
  
  const formattedDate = new Intl.DateTimeFormat("en-US", options).format(card.date);

  function handleOptionsChange(cardId: number, fromGroupId: number, toGroupId: number): void {
    onCardGroupChange(cardId, fromGroupId, toGroupId);
  }
  
return <div>
<div style={{
    border: '2px solid #ccc',
    borderRadius: '12px',
    padding: '15px'
  }}>
    <div style={{ 
      fontWeight: 'bold',
      fontSize: '1.2em',
      marginBottom: '10px'
    }}>{card.name}</div>
    <div style={{color: 'rgb(90 90 90)'}}>
      <div style={{ 
        marginBottom: '10px', 
        fontSize: '0.9em' 
      }}>
        {card.description}
      </div>
      <div style={{ 
        marginBottom: '10px'
      }}>
        <div style={{ 
          display: 'flex', 
          alignItems: 'center' 
        }}>
          <span role="img" aria-label="calendar" style={{ 
            marginRight: '5px' 
          }}>📅</span>
          <span>{formattedDate}</span>
        </div>
        <div style={{ 
          display: 'inline-flex',
          alignItems: 'center',
          marginTop: '10px',
          background: '#dcdcdc',
          padding: '7px 10px 7px 10px',
          borderRadius: '12px'
        }}>
          <span style={{
            backgroundColor: 'rgb(90 90 90)',
            borderRadius: '50%',
            width: '8px',
            height: '8px',
            display: 'inline-block',
            marginRight: '5px'
          }}></span>
          <span>{Priority[card.priority]}</span>
        </div>
      </div>
      <div>
        <GroupOption cardId={card.id} groupOptions={groupOptions} currentGroupId={currentGroupId} handleOptionsChange={handleOptionsChange} />
      </div>
    </div>
  </div>
</div>
}

interface GroupOptionProps {
  groupOptions: TaskCardGroupDropdownOptions[];
  currentGroupId: number;
  cardId: number;  
  handleOptionsChange; 
}

function GroupOption({groupOptions, currentGroupId, handleOptionsChange, cardId}: GroupOptionProps) {
  return(<>
    <label htmlFor="move-to" style={{ 
        fontSize: '0.9em', 
        display: 'block', 
        marginBottom: '5px' 
    }}>Move to:</label>
    <select id="move-to" style={{ 
      width: '100%', 
      padding: '5px', 
      fontSize: '0.9em'
    }}
    value={currentGroupId}
    onChange={(event) => handleOptionsChange(cardId, currentGroupId, parseInt(event.target.value, 10))}>
      {groupOptions.map(group => 
        <Option id={group.id} name={group.name} />
      )}
    </select>
  </>)
}

interface OptionProps {
  id: number;
  name: string;  
}

function Option({id, name}: OptionProps) {
  return <option key={id} value={id}>{name}</option>
}