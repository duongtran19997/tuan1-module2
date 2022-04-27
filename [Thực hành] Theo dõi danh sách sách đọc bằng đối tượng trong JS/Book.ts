export class Book{
    public title:string;
    public author:string;
    public alreadyReady:boolean;
    constructor(title:string,author:string,alreadyReady:boolean) {
        this.title=title;
        this.author=author;
        this.alreadyReady=alreadyReady
    }
}