"use strict";
// src/TaskManager.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskManager = void 0;
var task_1 = require("./task");
var TaskManager = /** @class */ (function () {
    function TaskManager(userManager) {
        this.userManager = userManager;
        this.tasks = [];
    }
    TaskManager.prototype.createTask = function (title, description) {
        var task = new task_1.Task(title, description);
        this.tasks.push(task);
        return task;
    };
    TaskManager.prototype.getTask = function (id) {
        return this.tasks.find(function (task) { return task.id === id; });
    };
    TaskManager.prototype.updateTask = function (id, title, description) {
        var task = this.getTask(id);
        if (!task)
            return false;
        if (title)
            task.title = title;
        if (description)
            task.description = description;
        return true;
    };
    TaskManager.prototype.deleteTask = function (id) {
        var index = this.tasks.findIndex(function (task) { return task.id === id; });
        if (index === -1)
            return false;
        this.tasks.splice(index, 1);
        return true;
    };
    TaskManager.prototype.assignTask = function (taskId, userId) {
        var task = this.getTask(taskId);
        if (!task || !this.userManager.getUser(userId))
            return false;
        task.assignedUserId = userId;
        return true;
    };
    TaskManager.prototype.unassignTask = function (taskId) {
        var task = this.getTask(taskId);
        if (!task || task.assignedUserId === null)
            return false;
        task.assignedUserId = null;
        return true;
    };
    TaskManager.prototype.getTasksByUser = function (userId) {
        return this.tasks.filter(function (task) { return task.assignedUserId === userId; });
    };
    TaskManager.prototype.listTasks = function () {
        return this.tasks;
    };
    return TaskManager;
}());
exports.TaskManager = TaskManager;
