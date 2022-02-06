import Character from '../сharacter';
import Swordsman from '../swordsman';
import Bowerman from '../bowerman';
import Undead from '../undead';

test('Попытка создания персоонажа', () => {
  const name = 'Erika';
  const type = 'Swordsman';

  const expected = {
    name,
    type,
    health: 100,
    level: 1,
  };

  const recevied = new Character(name, type);

  expect(recevied).toEqual(expected);
});

test('Слишком короткое имя нового персоонажа', () => {
  const name = 'I';
  const type = 'Swordsman';

  expect(() => new Character(name, type)).toThrow(new Error('Имя персоонажа не может содержать менее двух и более десяти символов'));
});

test('Слишком длинное имя нового персоонажа', () => {
  const name = 'Kletziyklekudle';
  const type = 'Swordsman';

  expect(() => new Character(name, type)).toThrow(new Error('Имя персоонажа не может содержать менее двух и более десяти символов'));
});

test('Неверно введен тип нового персоонажа', () => {
  const name = 'Kira';
  const type = 'Swrd';

  expect(() => new Character(name, type)).toThrow(new Error(`Данный вид персоонажа ${type} не существует`));
});

test('levelUp()', () => {
  const name = 'Liza';
  const expected = {
    name,
    type: 'Bowerman',
    health: 100,
    level: 2,
    attack: 25 * 1.2,
    defense: 25 * 1.2,
  };
  const bowerman = new Bowerman(name);
  bowerman.levelUp();
  expect(bowerman).toEqual(expected);
});

test('Если не работает levelUp()', () => {
  const name = 'Liza';
  const swrd = new Swordsman(name);
  swrd.health = 0;
  expect(() => swrd.levelUp()).toThrow(new Error('Мертвые не апаются'));
});

test('damage(points)', () => {
  const name = 'Liza';
  const expected = {
    name,
    type: 'Bowerman',
    health: 62.5,
    level: 1,
    attack: 25,
    defense: 25,
  };
  const bow = new Bowerman(name);
  bow.damage(50);
  expect(bow).toEqual(expected);
});

test(('damage(points) при health = 0'), () => {
  const name = 'Undead';
  const undead = new Undead(name);
  undead.health = 0;
  undead.damage(20);
  expect(undead.health).toThrow(new Error('Вы мертвы'));
});
