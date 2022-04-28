"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User_1 = require("./User");
var user1 = new User_1.User('Trung trau', 'Trungtinh@gmail.com', 1);
var user2 = new User_1.User('Trung trau', 'Trungtinh@gmail.com', 1);
user1.isAdmin();
user2.isAdmin();
