import Character from "./character";

export default class Swordsman extends Character {
    constructor(name) {
        super(name);
        this.attack = 40;
        this.defence = 10;
    }
}