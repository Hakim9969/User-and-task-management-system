"use strict";
// src/User.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
var User = /** @class */ (function () {
    function User(name, email) {
        this.id = User.nextId++;
        this.name = name;
        this.email = email;
    }
    User.nextId = 1;
    return User;
}());
exports.User = User;
