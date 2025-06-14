import Character from "./character.js";

export default class Daemon extends Character {
    constructor(name) {
        super(name);
        this._attack = 10;
        this.defence = 40;
    }
}


