"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Book_1 = require("./Book");
var arrayBooks = [];
var book1 = new Book_1.Book('Fifty Shades of Grey', 'E L James', true);
var book2 = new Book_1.Book(' Les miserables', 'Victor Hugo', true);
var book3 = new Book_1.Book('How the steel was tempered', 'Nikolai Alekseyevich Ostrovsky', false);
function addBook(book) {
    arrayBooks.push(book);
}
function display(arrayBooks) {
    // for (let i = 0; i < books.length ; i++) {
    //     if(books[i].alreadyReady){
    //         console.log(`sach ${books[i].title} da dok`)
    //     }else{
    //         console.log(`sach ${books[i].title} chua dok`)
    //     }
    // }
    arrayBooks.forEach(function (value) {
        if (value.alreadyReady) {
            return console.log("sach ".concat(value.title, " da dok"));
        }
        else {
            return console.log("sach ".concat(value.title, " chua dok"));
        }
    });
}
addBook(book1);
addBook(book2);
addBook(book3);
display(arrayBooks);
