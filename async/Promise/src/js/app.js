import read from "./reader.js";
import json from "./parser.js";


export default class GameSavingLoader {

    load() {
        return read()
            .then((data) => json(data)
            .then(val => val));
    }
}


const game = new GameSavingLoader();
game.load()
.then((value) => {
    console.log(value);
}, (error) => {
    console.log(error);
});
