import React from "react";
import { TaskCardVM } from "../../Models/TaskCardVM";
import { Priority } from "../../Enums/Priority";

export function TaskCard({card}: {card: TaskCardVM}) {
  const options: Intl.DateTimeFormatOptions = {
    weekday: "short",
    day: "2-digit",
    month: "short",
  };
  
  const formattedDate = new Intl.DateTimeFormat("en-US", options).format(card.date);
  
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
        <label htmlFor="move-to" style={{ 
          fontSize: '0.9em', 
          display: 'block', 
          marginBottom: '5px' 
        }}>Move to:</label>
        <select id="move-to" style={{ 
          width: '100%', 
          padding: '5px', 
          fontSize: '0.9em' 
        }}>
          <option value="">Select</option>
          {/* Add options here */}
        </select>
      </div>
    </div>
  </div>
</div>
}