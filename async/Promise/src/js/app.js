import read from "./reader.js";
import json from "./parser.js";


export default class GameSavingLoader {

    load() {
        const value = read().then((data) => {
            return json(data).then((val) => {
                return val;
            }); 

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
game.load()
.then((value) => {
    console.log(value);
}, (error) => {
    console.log(error);
});
