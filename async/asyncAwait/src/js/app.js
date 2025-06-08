import read from "./reader.js";
import json from "./parser.js";

export default class GameSavingLoader {

    async load() {
        const data = await read().then((val) => {
            return val;
        });
        const value = await json(data).then((val) => {
            return val;
        }); 
        return new Promise((resolve, reject) => {
            if (!value) {
                reject(new Error('Ответа неть'));
            }
            resolve(value)
            
        });
    }
}

const game = new GameSavingLoader();

(async () => {
    try {
        let value = await(game.load());
        return value;
    }
    catch(e) {
        return e;
    }
})()