var Instructor = /** @class */ (function () {
    function Instructor(_a) {
        var _b = _a.name, name = _b === void 0 ? 'Trung' : _b, _c = _a.role, role = _c === void 0 ? 'assistant' : _c;
        this.role = role;
        this.name = name;
    }
    Instructor.helloWorld = function () {
        console.log('xin chao');
    };
    Instructor.canTeach = function (instructor) {
        return (instructor.role === 'classroom');
    };
    Instructor.prototype.renderDetails = function () {
        console.log("".concat(this.name, "-").concat(this.role));
    };
    return Instructor;
}());
var juniorInstructor = new Instructor({ name: 'Brian' });
var seniorInstructor = new Instructor({ role: 'classroom' });
juniorInstructor.renderDetails();
seniorInstructor.renderDetails();
Instructor.helloWorld();
console.log(Instructor.canTeach(juniorInstructor));
