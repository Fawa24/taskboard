import React, { useState } from "react";
import { TaskCardGroupVM } from "../../Models/TaskCardGroupVM";
import { TaskCard } from "../TaskCard/TaskCard";
import { TaskCardVM } from "../../Models/TaskCardVM";
import CreateCardModal from "./CreateCardModal";
import { Priority } from "../../Enums/Priority";
import { CreateNewTaskCardDTO } from "../../Models/CreateNewTaskCardDTO";

export function TaskCardGroup({group}: {group: TaskCardGroupVM}) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = (card?: TaskCardVM) => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSaveCard = (card: CreateNewTaskCardDTO) => {
    group.tasks.push({
      id: 0, 
      name: card.name, 
      description: card.description, 
      date: card.date, 
      priority: card.priority
    });
  };

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
      fontSize: '14px'}}
      onClick={() => handleOpenModal()}>
      Add new card
    </button>
    {group.tasks.map(x => 
      <TaskCard card={x} />
    )}
    <CreateCardModal 
    isOpen={isModalOpen}
    onClose={handleCloseModal}
    onSave={handleSaveCard}
    />
  </div>
}