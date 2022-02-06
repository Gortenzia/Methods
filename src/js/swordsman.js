import Character from './сharacter';

export default class Swordsman extends Character {
  constructor(...params) {
    super(...params);
    this.type = 'Swordsman';
    this.attack = 40;
    this.defence = 10;
  }
}
