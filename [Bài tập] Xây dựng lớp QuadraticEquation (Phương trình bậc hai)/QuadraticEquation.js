var QuadraticEquation = /** @class */ (function () {
    function QuadraticEquation(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
    }
    QuadraticEquation.prototype.getDiscriminant = function () {
        var delta = this.b * 2 - 4 * this.a * this.c;
        return delta;
    };
    QuadraticEquation.prototype.getRoot = function (delta) {
        var arrRoot = [];
        if (delta > 0) {
            var root1 = (-this.b + Math.pow(delta, 0.5)) / 2 * this.a;
            var root2 = (-this.b - Math.pow(delta, 0.5)) / 2 * this.a;
            arrRoot.push(root1, root2);
            return arrRoot;
        }
        else if (delta == 0) {
            var root = -this.b / this.a;
            return root;
        }
        else {
            throw new Error('The equation has no roots');
        }
    };
    return QuadraticEquation;
}());
var equation1 = new QuadraticEquation(1, 2, 1);
console.log(equation1.getRoot(equation1.getDiscriminant()));
