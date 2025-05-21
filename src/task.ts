// src/Task.ts

export class Task {
  static nextId = 1;
  public id: number;
  public title: string;
  public description: string;
  public assignedUserId: number | null;

  constructor(title: string, description: string) {
    this.id = Task.nextId++;
    this.title = title;
    this.description = description;
    this.assignedUserId = null;
  }
}
