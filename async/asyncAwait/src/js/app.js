import read from "./reader.js";
import json from "./parser.js";

export default class GameSavingLoader {

    async load() {
        const data = await read();
        const value = await json(data); 
        return value;
    }
}

const game = new GameSavingLoader();

(async () => {
    try {
        let value = await(game.load());
        console.log(value);
        return value;
    }
    catch(e) {
        return e;
    }
})()