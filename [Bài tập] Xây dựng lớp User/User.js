"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
var User = /** @class */ (function () {
    function User(name, email, role) {
        this.name = name;
        this.email = email;
        this.role = role;
    }
    User.prototype.getInfo = function () {
        var userList = [this.role, this.name, this.email];
        return userList;
    };
    User.prototype.isAdmin = function () {
        if (this.role === 1) {
            console.log('là Admin');
        }
        else if (this.role === 2) {
            console.log('là User');
        }
        else {
            console.log('nhập sai cú pháp');
        }
    };
    User.prototype.setName = function (name) {
        this.name = name;
    };
    User.prototype.setEmail = function (email) {
        this.email = email;
    };
    User.prototype.setRole = function (role) {
        this.role = role;
    };
    return User;
}());
exports.User = User;
