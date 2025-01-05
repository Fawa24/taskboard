import { Priority } from "../Enums/Priority";

export interface TaskCardVM {
  name: string;
  description: string;
  date: Date;
  priority: Priority
}