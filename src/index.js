"use strict";
// src/index.ts
Object.defineProperty(exports, "__esModule", { value: true });
var UserManager_1 = require("./UserManager");
var TaskManager_1 = require("./TaskManager");
var userManager = new UserManager_1.UserManager();
var taskManager = new TaskManager_1.TaskManager(userManager);
// Create users
var user1 = userManager.createUser("Alice", "alice@example.com");
var user2 = userManager.createUser("Bob", "bob@example.com");
// Create tasks
var task1 = taskManager.createTask("Write Report", "Write the annual report.");
var task2 = taskManager.createTask("Design Logo", "Create a logo for the project.");
// Assign tasks
taskManager.assignTask(task1.id, user1.id);
taskManager.assignTask(task2.id, user2.id);
// Display data
console.log("All Users:", userManager.listUsers());
console.log("All Tasks:", taskManager.listTasks());
console.log("Tasks assigned to ".concat(user1.name, ":"), taskManager.getTasksByUser(user1.id));
// Update a task
taskManager.updateTask(task1.id, "Write Full Report");
// Unassign a task
taskManager.unassignTask(task2.id);
console.log("Updated Tasks:", taskManager.listTasks());
