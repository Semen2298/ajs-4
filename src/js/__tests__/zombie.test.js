import Zombie from '../class/Zombie';

test('should create Zombie correctly', () => {
    const char = new Zombie('Walker');
    expect(char).toEqual({ name: 'Walker', type: 'Zombie', health: 100, level: 1, attack: 40, defence: 10 });
});