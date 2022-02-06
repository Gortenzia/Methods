import Bowerman from '../bowerman';

test('Создание лучника', () => {
  const name = 'name';
  const type = 'Bowerman';

  const expected = {
    name: 'name',
    type: 'Bowerman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };

  const recevied = new Bowerman(name, type);

  expect(recevied).toEqual(expected);
});
