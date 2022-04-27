"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BookManager_1 = require("./BookManager");
var Book_1 = require("./Book");
var book1 = new Book_1.Book('Conan', '1412');
var book2 = new Book_1.Book('Doraemon', '2345');
var book3 = new Book_1.Book('DragonBall', '1212');
var book4 = new Book_1.Book('MasterChef', '4953');
var bookManager1 = new BookManager_1.BookManager();
bookManager1.addBook(book1);
bookManager1.addBook(book2);
bookManager1.addBook(book3);
bookManager1.addBook(book4);
// bookManager1.fixName('3334','MasterChef')
// console.log(bookManager1.getList());
bookManager1.findBook('4434');
