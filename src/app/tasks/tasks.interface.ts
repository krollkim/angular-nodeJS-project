export interface Task {
  id: number;
  createTime: Date;
  task: string;
  status: TaskStatuses;
  level: LevelTypes;
  remark: string;
  isDeleted: boolean;
}

export enum TaskStatuses {
  open = 0,
  inProgress = 1,
  complete = 2,
}

export interface Structure {
  status: TaskStatuses;
  title: string;
  color: string;
  cards: Task[];
  isDrag?: boolean;
}

export enum LevelTypes {
  low = 0,
  medium = 1,
  high = 2,
}

export const UrLevel = [
  {
    level: LevelTypes.low,
    title: 'low-priority',
    color: 'yellow',
  },
  {
    level: LevelTypes.medium,
    title: 'medium-priority',
    color: 'orange',
  },
  {
    level: LevelTypes.high,
    title: 'high-priority',
    color: 'red',
  }
 
];