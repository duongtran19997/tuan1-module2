var StopWatch = /** @class */ (function () {
    function StopWatch(startTime, endTime) {
        this.startTime = startTime;
        this.endTime = endTime;
    }
    StopWatch.prototype.getterStart = function () {
        return this.startTime;
    };
    StopWatch.prototype.getterEnd = function () {
        return this.endTime;
    };
    StopWatch.prototype.getElapsedTime = function () {
        return this.endTime - this.startTime;
    };
    return StopWatch;
}());
var watch1 = new StopWatch(performance.now(), performance.now() + 100000);
console.log(watch1.getElapsedTime());
