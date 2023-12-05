import GameSavingLoader from './GameSavingLoader.js';

GameSavingLoader.load().then((saving) => {
    const object = JSON.parse(saving);
    Object.getPrototypeOf(object);
    console.log(object);
}, (error) => {
    throw (new Error(error));
});