// Typescript Class that uses an interface///
var car1 = (function () {
    function car1() {
    }
    car1.prototype.start = function () {
        console.log("Start car");
    };
    car1.prototype.drive = function () {
        console.log("Drive car");
    };
    car1.prototype.getPosition = function () {
        console.log("Get car position");
    };
    return car1;
}());
;
//function accepting interface as arguments
function carDrivable(obj) {
    obj.start();
    obj.drive();
    obj.getPosition();
}
//instatiate or create new object/member of car1 class///
var obj;
obj = new car1();
//invoking the function 
carDrivable(obj);
