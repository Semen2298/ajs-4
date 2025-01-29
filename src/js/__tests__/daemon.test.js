import Daemon from '../class/Daemon';

test('should create Daemon correctly', () => {
    const char = new Daemon('Inferno');
    expect(char).toEqual({ name: 'Inferno', type: 'Daemon', health: 100, level: 1, attack: 10, defence: 40 });
});