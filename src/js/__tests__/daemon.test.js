import Daemon from '../daemon';

test('Создание демона', () => {
  const name = 'name';
  const type = 'Daemon';

  const expected = {
    name: 'name',
    type: 'Daemon',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };

  const recevied = new Daemon(name, type);

  expect(recevied).toEqual(expected);
});
