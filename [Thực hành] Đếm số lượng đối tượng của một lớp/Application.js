var Application = /** @class */ (function () {
    function Application(name) {
        this.name = name;
        Application.count++;
    }
    Application.count = 0;
    return Application;
}());
console.log(Application.count);
var a1 = new Application('a1');
var a2 = new Application('a2');
console.log(Application.count);
