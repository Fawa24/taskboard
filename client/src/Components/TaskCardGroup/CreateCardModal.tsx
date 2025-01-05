import React, {useEffect, useState} from "react";
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
          <input value={name} onChange={(e) => onCardNameChange(e.target.value)} className="no-border-input" />
          <input value={description} onChange={(e) => onCardDescriptionChange(e.target.value)} className="no-border-input" />
          <input type="date" value={date} onChange={(e) => onCardDateChange(e.target.value)} />
          <select value={Priority[priority]} onChange={(e) => {
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
          <button onClick={handleSave}>Save</button>
        </div>
      </div>
    )
  );
};

export default CreateCardModal;