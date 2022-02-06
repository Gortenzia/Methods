import Undead from '../undead';

test('Создание нежити', () => {
  const name = 'name';
  const type = 'Undead';

  const expected = {
    name: 'name',
    type: 'Undead',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };

  const recevied = new Undead(name, type);

  expect(recevied).toEqual(expected);
});
