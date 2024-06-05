export interface Task {
  id: string;
  userId: string;
  dueDate: string;
  summary: string;
  title: string;
}

export interface NewTaskData {
  title: string;
  summary: string;
  date: string;
}
