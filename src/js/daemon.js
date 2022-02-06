import Character from './сharacter';

export default class Daemon extends Character {
  constructor(...params) {
    super(...params);
    this.type = 'Daemon';
    this.attack = 10;
    this.defence = 40;
  }
}
