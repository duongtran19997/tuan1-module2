"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookManager = void 0;
var BookManager = /** @class */ (function () {
    function BookManager() {
        this.books = [];
        this.books = [];
    }
    BookManager.prototype.addBook = function (book) {
        this.books.push(book);
    };
    BookManager.prototype.getList = function () {
        return this.books;
    };
    BookManager.prototype.findBook = function (id) {
        var i = null;
        this.books.forEach(function (book, index) {
            if (book.id == id) {
                i = index;
            }
            return i;
        });
    };
    BookManager.prototype.fixName = function (id, name) {
        var bookUpdate = +this.findBook(id);
        if (bookUpdate != -1) {
            this.books[bookUpdate].setName(name);
        }
        else {
            throw new Error('wrong id');
        }
    };
    BookManager.prototype.delete = function (id) {
        var indexBookDelete = +this.findBook(id);
        if (indexBookDelete != -1) {
            this.books.splice(indexBookDelete, 1);
        }
        else {
            throw new Error('delete error');
        }
    };
    return BookManager;
}());
exports.BookManager = BookManager;
