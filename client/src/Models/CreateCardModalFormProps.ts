import { CreateNewTaskCardDTO } from './CreateNewTaskCardDTO.ts';

export interface CreateCardModalFormProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: ( card: CreateNewTaskCardDTO ) => void;
}