import React, { useState } from "react";
import { TaskCardGroupVM } from "../../Models/TaskCardGroupVM";
import { TaskCard } from "../TaskCard/TaskCard";
import { TaskCardVM } from "../../Models/TaskCardVM";
import CreateCardModal from "./CreateCardModal";
import { CreateNewTaskCardDTO } from "../../Models/CreateNewTaskCardDTO";
import { TaskCardGroupDropdownOptions } from "../../Models/TaskCardGroupDropdownOptions";

export interface TaskCardGroupProps {
  group: TaskCardGroupVM;
  groupOptions: TaskCardGroupDropdownOptions[];
  onCardGroupChange;
}

export function TaskCardGroup({group, groupOptions, onCardGroupChange} : TaskCardGroupProps) {
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

  return(<div className="taskgroup-body">
    <div className="taskgroup-header">
      <div className="taskgroup-name">
        <span>{group.name}</span> 
        <span>{group.tasks.length}</span>
      </div>
      <button className="taskgroup-addbutton"
        onClick={() => handleOpenModal()}>
        Add new card
      </button>
    </div>

    <div className="card-container">
      {group.tasks.map(x => 
        <TaskCard card={x} groupOptions={groupOptions} currentGroupId={group.id} onCardGroupChange={onCardGroupChange} />
      )}
      <CreateCardModal 
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSave={handleSaveCard}/>
    </div>
  </div>);
}