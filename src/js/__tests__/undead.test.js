import Undead from '../class/Undead';

test('should create Undead correctly', () => {
    const char = new Undead('Ghoul');
    expect(char).toEqual({ name: 'Ghoul', type: 'Undead', health: 100, level: 1, attack: 25, defence: 25 });
});