import Character from './сharacter';

export default class Zombie extends Character {
  constructor(...params) {
    super(...params);
    this.type = 'Zombie';
    this.attack = 40;
    this.defence = 10;
  }
}
