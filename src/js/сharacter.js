export default class Character {
  constructor(name = ' ', type = ' ', health = 100, level = 1) {
    if (name.length < 2 || name.length > 10) {
      throw new Error('Имя персоонажа не может содержать менее двух и более десяти символов');
    } else {
      this.name = name;
      // name = /{2,10}/;
      // Можно ли с помощью регулярных выражений указать длинну строки в консрукторе ?
    }
    const types = ['Bowerman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
    if (!types.includes(type)) {
      throw new Error(`Данный вид персоонажа ${type} не существует`);
    } else {
      this.type = type;
    }

    this.health = health;
    this.level = level;
  }

  levelUp() {
    if (this.health > 0) {
      this.health = 100;
      this.level += 1;
      // eslint-disable-next-line no-mixed-operators
      this.attack += this.attack / 100 * 20;
      // eslint-disable-next-line no-mixed-operators
      this.defence += this.defence / 100 * 20;
    } else {
      throw new Error('Мертвые не апаются');
    }
  }

  damage(points) {
    if (this.health > 0) {
      this.health -= points * (1 - this.defence / 100);
    } else {
      throw new Error('Вы мертвы');
    }
  }
}
