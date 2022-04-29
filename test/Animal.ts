export class Animal{
    private _name:string
    private _leg:string
    private _sound:string


    constructor(name: string, leg: string, sound: string) {
        this._name = name;
        this._leg = leg;
        this._sound = sound;
    }


    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get leg(): string {
        return this._leg;
    }

    set leg(value: string) {
        this._leg = value;
    }

    get sound(): string {
        return this._sound;
    }

    set sound(value: string) {
        this._sound = value;
    }

}