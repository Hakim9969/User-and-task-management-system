"use strict";
// src/Task.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.Task = void 0;
var Task = /** @class */ (function () {
    function Task(title, description) {
        this.id = Task.nextId++;
        this.title = title;
        this.description = description;
        this.assignedUserId = null;
    }
    Task.nextId = 1;
    return Task;
}());
exports.Task = Task;
