import {Animal} from "./Animal";
class Dog extends Animal{
    type:string

    constructor(name: string, leg: string, sound: string, type: string) {
        super(name, leg, sound);
        this.type = type;
    }
}