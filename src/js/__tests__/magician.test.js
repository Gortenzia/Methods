import Magician from '../magician';

test('Создание мага', () => {
  const name = 'name';
  const type = 'Magician';

  const expected = {
    name: 'name',
    type: 'Magician',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };

  const recevied = new Magician(name, type);

  expect(recevied).toEqual(expected);
});
