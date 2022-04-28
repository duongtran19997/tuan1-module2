import {Book} from "./Book";

export class BookManager {
    books: Book[] = [];

    constructor() {
        this.books = []
    }

    addBook(book: Book) {
        this.books.push(book)
    }

    getList() {
        return this.books
    }

    findBook(id: string) {
        let i = -1
        this.books.forEach((book,index) => {
            if (book.id === id) {
                i = index;
            }
        })
        return i;
    }

    fixName(id: string, name: string): void { //đang lỗi không chạy, vấn đề ở chỗ findBook
        let bookUpdate = +this.findBook(id)
        if (bookUpdate != -1) {
            this.books[bookUpdate].setName(name)
        } else {
            throw new Error('wrong id')
        }
    }
    delete(id: string): void {
        let indexBookDelete = +this.findBook(id);
        if (indexBookDelete != -1) {
            this.books.splice(indexBookDelete, 1);
        } else {
            throw new Error('delete error')
        }
    }
}
