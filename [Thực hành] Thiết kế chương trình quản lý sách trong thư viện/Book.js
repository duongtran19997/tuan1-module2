"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Book = void 0;
var Book = /** @class */ (function () {
    function Book(name, id) {
        this.name = name;
        this.id = id;
    }
    Book.prototype.getName = function () {
        return this.name;
    };
    Book.prototype.setName = function (name) {
        this.name = name;
    };
    Book.prototype.getId = function () {
        return this.id;
    };
    return Book;
}());
exports.Book = Book;
