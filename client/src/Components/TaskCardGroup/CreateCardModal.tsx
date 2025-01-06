import React, { useState } from "react";
import { CreateCardModalFormProps } from "../../Models/CreateCardModalFormProps";
import { Priority } from "../../Enums/Priority";

const CreateCardModal: React.FC<CreateCardModalFormProps> = ({ isOpen, onClose, onSave }) => {
  if (!isOpen) return null;
  const [name, setName] = useState('New card');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState<string>(new Date().toISOString().split('T')[0]);
  const [priority, setPriority] = useState(Priority.Low);

  const onCardNameChange = (newName: string) => {
    setName(newName);
  }

  const onCardDescriptionChange = (newDescription: string) => {
    setDescription(newDescription);
  }
  
  const onCardDateChange = (newDate: string) => {
    setDate(newDate);
  }

  const onCardPriorityChange = (newPriority: Priority) => {
    setPriority(newPriority);
  }

  const handleSave = () => {
    onSave({name: name, description: description, date: new Date(date), priority: priority});
    onClose();
  };

  return (
    isOpen && (
      <div className="modal-backdrop">
        <div className="modal-header">
          <button className="close" onClick={onClose}>
            &times;
          </button>
        </div>

        <div className="modal-content">

          <input value={name} onChange={(e) => onCardNameChange(e.target.value)} className="no-border-input bold-24" />
          
          <div>
            <input type="date" className="no-border-input" value={date} onChange={(e) => onCardDateChange(e.target.value)} />
          </div>

          <select className="dropdown" 
            value={Priority[priority]} onChange={(e) => {
              const newPriority = Priority[e.target.value as keyof typeof Priority];
              onCardPriorityChange(newPriority);
            }}>
            {Object.keys(Priority)
              .filter((key) => isNaN(Number(key)))
              .map((key) => (
            <option key={key} value={key}>
              {key}
            </option>
            ))}
          </select>

          <div className="description-container">
            <label>Description</label>
            <textarea style={{height: '75px'}}
              onChange={(e) => onCardDescriptionChange(e.target.value)}
              placeholder="Write some information" />
          </div>
          
            <div className="action-buttons-container">
              <button className="action-button save-button" onClick={handleSave}>Save</button>
              <button className="action-button close-button" onClick={onClose}>Cancel</button>
            </div>
        </div>
      </div>
    )
  );
};

export default CreateCardModal;