// src/index.ts

import { UserManager } from './UserManager';
import { TaskManager } from './TaskManager';

const userManager = new UserManager();
const taskManager = new TaskManager(userManager);

// Create users
const user1 = userManager.createUser("Alice", "alice@example.com");
const user2 = userManager.createUser("Bob", "bob@example.com");

// Create tasks
const task1 = taskManager.createTask("Write Report", "Write the annual report.");
const task2 = taskManager.createTask("Design Logo", "Create a logo for the project.");

// Assign tasks
taskManager.assignTask(task1.id, user1.id);
taskManager.assignTask(task2.id, user2.id);

// Display data
console.log("All Users:", userManager.listUsers());
console.log("All Tasks:", taskManager.listTasks());

console.log(`Tasks assigned to ${user1.name}:`, taskManager.getTasksByUser(user1.id));

// Update a task
taskManager.updateTask(task1.id, "Write Full Report");

// Unassign a task
taskManager.unassignTask(task2.id);

console.log("Updated Tasks:", taskManager.listTasks());
