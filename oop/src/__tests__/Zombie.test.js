import Zombie from '../Zombie'

test('The object Zombie is created correctly', () => {
    const zomb = new Zombie('Zomb');
    const correct = {
        attack: 40,
        defence: 10,
        health: 100, 
        level: 1,
        name: 'Zomb',
        type: 'Zombie'
    };
    expect(zomb).toEqual(correct)
})

test('Change Zombie level correctly', () => {
    const zomb = new Zombie('Zomb');
    zomb.levelUp();
    let correct = {
        attack: 48,
        defence: 12,
        health: 100, 
        level: 2,
        name: 'Zomb',
        type: 'Zombie'
    };
    expect(zomb).toEqual(correct)
    zomb.levelUp();
    correct = {
        attack: 57.6,
        defence: 14.4,
        health: 100, 
        level: 3,
        name: 'Zomb',
        type: 'Zombie'
    };
    expect(zomb).toEqual(correct)

})

test('Zombie damage correctly', () => {
    const zomb = new Zombie('Zomb');
    zomb.damage(6)
    const correct = {
        attack: 40,
        defence: 10,
        health: 94.6, 
        level: 1,
        name: 'Zomb',
        type: 'Zombie'
    };
    expect(zomb).toEqual(correct)
})