import Magician from '../Magician'

test('The object Magician is created correctly', () => {
    const mag = new Magician('Mag');
    const correct = {
        attack: 10,
        defence: 40,
        health: 100, 
        level: 1,
        name: 'Mag',
        type: 'Magician'
    };
    expect(mag).toEqual(correct)
})

test('Change Magician level correctly', () => {
    const mag = new Magician('Mag');
    mag.levelUp();
    let correct = {
        attack: 12,
        defence: 48,
        health: 100, 
        level: 2,
        name: 'Mag',
        type: 'Magician'
    };
    expect(mag).toEqual(correct)
    mag.levelUp();
    correct = {
        attack: 14.4,
        defence: 57.6,
        health: 100, 
        level: 3,
        name: 'Mag',
        type: 'Magician'
    };
    expect(mag).toEqual(correct)

})

test('Magician damage correctly', () => {
    const mag = new Magician('Mag');
    mag.damage(6)
    const correct = {
        attack: 10,
        defence: 40,
        health: 96.4, 
        level: 1,
        name: 'Mag',
        type: 'Magician'
    };
    expect(mag).toEqual(correct)
})