var Staff = /** @class */ (function () {
    function Staff(name, email, age) {
        this.name = name;
        this.email = email;
        this.age = age;
    }
    Staff.prototype.staff = function () {
        console.log(this.name + this.email + this.age);
    };
    Staff.prototype.setName = function (name) {
        this.name = name;
    };
    Staff.prototype.getName = function () {
        return this.name;
    };
    Staff.prototype.setEmail = function (email) {
        this.email = email;
    };
    Staff.prototype.getEmail = function () {
        return this.email;
    };
    Staff.prototype.setAge = function (age) {
        this.age = age;
    };
    Staff.prototype.getAge = function () {
        return this.age;
    };
    return Staff;
}());
var Duong = new Staff("Duong", 'duonga2qp@gmail.com', 25);
Duong.getAge();
var nameStaff = Duong.getName();
console.log(nameStaff); // Staff 1
Duong.setName('Duong2');
var currentNameStaff = Duong.getName();
console.log(currentNameStaff); //
