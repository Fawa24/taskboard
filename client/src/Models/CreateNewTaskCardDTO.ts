import { Priority } from "../Enums/Priority";

export interface CreateNewTaskCardDTO {
  name: string;
  description: string;
  date: Date;
  priority: Priority;
}