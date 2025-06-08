import Daemon from '../Daemon'

test('The object Daemon is created correctly', () => {
    const daemon = new Daemon('Daem');
    const correct = {
        attack: 10,
        defence: 40,
        health: 100, 
        level: 1,
        name: 'Daem',
        type: 'Daemon'
    };
    expect(daemon).toEqual(correct)
})

test('Change Daemon level correctly', () => {
    const daemon = new Daemon('Daem');
    daemon.levelUp();
    let correct = {
        attack: 12,
        defence: 48,
        health: 100, 
        level: 2,
        name: 'Daem',
        type: 'Daemon'
    };
    expect(daemon).toEqual(correct)
    daemon.levelUp();
    correct = {
        attack: 14.4,
        defence: 57.6,
        health: 100, 
        level: 3,
        name: 'Daem',
        type: 'Daemon'
    };
    expect(daemon).toEqual(correct)

})

test('Daemon damage correctly', () => {
    const daemon = new Daemon('Daem');
    daemon.damage(6)
    const correct = {
        attack: 10,
        defence: 40,
        health: 96.4, 
        level: 1,
        name: 'Daem',
        type: 'Daemon'
    };
    expect(daemon).toEqual(correct)
})