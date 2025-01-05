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
    <h3>{card.name}</h3>
    <p>{card.description}</p>
    <p>{formattedDate}</p>
    <div>
      <p>{Priority[card.priority]}</p>
    </div>
  </div>
}