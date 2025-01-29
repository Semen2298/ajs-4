import Bowman from '../class/Bowman';

test('should create Bowman correctly', () => {
    const char = new Bowman('Robin');
    expect(char).toEqual({ name: 'Robin', type: 'Bowman', health: 100, level: 1, attack: 25, defence: 25 });
});
