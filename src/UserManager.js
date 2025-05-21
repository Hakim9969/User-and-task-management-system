"use strict";
// src/UserManager.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserManager = void 0;
var user_1 = require("./user");
var UserManager = /** @class */ (function () {
    function UserManager() {
        this.users = [];
    }
    UserManager.prototype.createUser = function (name, email) {
        var user = new user_1.User(name, email);
        this.users.push(user);
        return user;
    };
    UserManager.prototype.getUser = function (id) {
        return this.users.find(function (user) { return user.id === id; });
    };
    UserManager.prototype.updateUser = function (id, name, email) {
        var user = this.getUser(id);
        if (!user)
            return false;
        if (name)
            user.name = name;
        if (email)
            user.email = email;
        return true;
    };
    UserManager.prototype.deleteUser = function (id) {
        var index = this.users.findIndex(function (user) { return user.id === id; });
        if (index === -1)
            return false;
        this.users.splice(index, 1);
        return true;
    };
    UserManager.prototype.listUsers = function () {
        return this.users;
    };
    return UserManager;
}());
exports.UserManager = UserManager;
