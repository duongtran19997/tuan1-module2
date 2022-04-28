import {BookManager} from "./BookManager";
import {Book} from "./Book";
let book1 = new Book('Conan', '1412')
let book2 = new Book('Doraemon', '2345')
let book3 = new Book('DragonBall', '1212')
let book4 = new Book('MasterChef', '4953');
let bookManager1 = new BookManager()
bookManager1.addBook(book1);
bookManager1.addBook(book2);
bookManager1.addBook(book3);
bookManager1.addBook(book4);
bookManager1.fixName('3334','MasterChef')
console.log(bookManager1.getList());
console.log(bookManager1.findBook('4953'));

