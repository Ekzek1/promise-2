import json from './parser';
import read from './reader';

export default class GameSavingLoader {
  static load() {
    return new Promise((resolve) => {
      const data = read();
      data.then((result) => {
        const GameSaving = json(result);
        return GameSaving;
      }).then((GameSaving) => {
        resolve({ GameSaving });
      }).catch((error) => {
        throw new Error(error);
      });
    });
  }
}
