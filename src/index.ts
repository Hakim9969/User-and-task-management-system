

import { UserManager } from './UserManager';
import { TaskManager } from './TaskManager';

const userManager = new UserManager();
const taskManager = new TaskManager(userManager);


const user1 = userManager.createUser("Hakim", "hakim@example.com");
const user2 = userManager.createUser("Hak", "hak@example.com");


const task1 = taskManager.createTask("Write Report", "Write the annual report.");
const task2 = taskManager.createTask("Design Logo", "Create a logo for the project.");


taskManager.assignTask(task1.id, user1.id);
taskManager.assignTask(task2.id, user2.id);


console.log("All Users:", userManager.listUsers());
console.log("All Tasks:", taskManager.listTasks());

console.log(`Tasks assigned to ${user1.name}:`, taskManager.getTasksByUser(user1.id));


taskManager.updateTask(task1.id, "Write Full Report");


taskManager.unassignTask(task2.id);

console.log("Updated Tasks:", taskManager.listTasks());
