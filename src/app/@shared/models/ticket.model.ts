export interface ITicket {
  title: string;
  description: string;
  customerName: string;
  updatedAt: Date;
  createdAt: Date;
  priority: number;
  dueDate: Date;
}