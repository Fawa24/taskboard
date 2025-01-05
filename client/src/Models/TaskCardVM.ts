import { Priority } from "../Enums/Priority";

export interface TaskCardVM {
  id: number;
  name: string;
  description: string;
  date: Date;
  priority: Priority;
}