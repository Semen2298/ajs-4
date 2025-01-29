import Magician from '../class/Magician';

test('should create Magician correctly', () => {
    const char = new Magician('Merlin');
    expect(char).toEqual({ name: 'Merlin', type: 'Magician', health: 100, level: 1, attack: 10, defence: 40 });
});