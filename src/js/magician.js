import Character from './сharacter';

export default class Magician extends Character {
  constructor(...params) {
    super(...params);
    this.type = 'Magician';
    this.attack = 10;
    this.defence = 40;
  }
}
