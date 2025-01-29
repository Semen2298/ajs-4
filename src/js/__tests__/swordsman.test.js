import Swordsman from '../class/Swordsman';

test('should create Swordsman correctly', () => {
    const char = new Swordsman('Arthur');
    expect(char).toEqual({ name: 'Arthur', type: 'Swordsman', health: 100, level: 1, attack: 40, defence: 10 });
});