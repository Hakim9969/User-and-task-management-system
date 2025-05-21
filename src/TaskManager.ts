// src/TaskManager.ts

import { Task } from './task';
import { UserManager } from './UserManager';

export class TaskManager {
  private tasks: Task[] = [];

  constructor(private userManager: UserManager) {}

  createTask(title: string, description: string): Task {
    const task = new Task(title, description);
    this.tasks.push(task);
    return task;
  }

  getTask(id: number): Task | undefined {
    return this.tasks.find(task => task.id === id);
  }

  updateTask(id: number, title?: string, description?: string): boolean {
    const task = this.getTask(id);
    if (!task) return false;
    if (title) task.title = title;
    if (description) task.description = description;
    return true;
  }

  deleteTask(id: number): boolean {
    const index = this.tasks.findIndex(task => task.id === id);
    if (index === -1) return false;
    this.tasks.splice(index, 1);
    return true;
  }

  assignTask(taskId: number, userId: number): boolean {
    const task = this.getTask(taskId);
    if (!task || !this.userManager.getUser(userId)) return false;
    task.assignedUserId = userId;
    return true;
  }

  unassignTask(taskId: number): boolean {
    const task = this.getTask(taskId);
    if (!task || task.assignedUserId === null) return false;
    task.assignedUserId = null;
    return true;
  }

  getTasksByUser(userId: number): Task[] {
    return this.tasks.filter(task => task.assignedUserId === userId);
  }

  listTasks(): Task[] {
    return this.tasks;
  }
}
