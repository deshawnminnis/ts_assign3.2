// Typescript Class that uses an interface///

interface drivable {
    start():void;
    drive():void;
    getPosition(): void;

}

class car1 implements drivable{

    start(): void
    {
        console.log("Start car");
    }
    
    drive():void
    {
        console.log("Drive car")
    }

    getPosition(): void
    {
        console.log("Get car position")
    }
};

//function accepting interface as arguments
function carDrivable (obj:drivable)
{
    obj.start();
    obj.drive();
    obj.getPosition();

}

//instatiate or create new object/member of car1 class///
let obj:car1
obj = new car1();

//invoking the function 
carDrivable(obj);  

