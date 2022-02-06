import Swordsman from '../swordsman';

test('Создание мечника', () => {
  const name = 'Enn';
  const type = 'Swordsman';

  const expected = {
    name: 'Enn',
    type: 'Swordsman',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };

  const recevied = new Swordsman(name, type);

  expect(recevied).toEqual(expected);
});
