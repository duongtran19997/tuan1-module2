import {Book} from "./Book";

let arrayBooks = [];
let book1 = new Book('Fifty Shades of Grey', 'E L James', true);
let book2 = new Book(' Les miserables', 'Victor Hugo', true);
let book3 = new Book('How the steel was tempered', 'Nikolai Alekseyevich Ostrovsky', false);

function addBook(book: Book) {
    arrayBooks.push(book)
}

function display(arrayBooks) {
    // for (let i = 0; i < books.length ; i++) {
    //     if(books[i].alreadyReady){
    //         console.log(`sach ${books[i].title} da dok`)
    //     }else{
    //         console.log(`sach ${books[i].title} chua dok`)
    //     }
    // }
    arrayBooks.forEach((value) => {
        if (value.alreadyReady) {
            return console.log(`sach ${value.title} da dok`)
        } else {
            return console.log(`sach ${value.title} chua dok`)
        }

    })
}

addBook(book1)
addBook(book2)
addBook(book3)
display(arrayBooks)