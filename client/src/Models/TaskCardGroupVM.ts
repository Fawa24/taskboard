import { TaskCardVM } from "./TaskCardVM";

export interface TaskCardGroupVM {
  id: number;
  name: string;
  tasks: TaskCardVM[];
}