
import Daemon from '../js/characters/Daemon.js';
import Magician from '../js/characters/Magician.js';

describe('test Team.js', () => {

  let daemon;
  let magician;
  
  beforeEach(() => {
    daemon = new Daemon('daemon');
    magician = new Magician('mag');

    
  });

  const dataList = [
        [
            true, 2, 4
        ],
        [
            true, 6, -8
        ],
        [
            false, 7, 4
        ],
        [
            false, 1, 10
        ],
    ]
    //при атаке на 6 клетку демон лечить начинает по ходу))
    test.each(dataList)('Атака на демона', (stoned, attack, expected) => {
      daemon.stoned = stoned;
      daemon.attack = attack;
      expect(daemon.attack).toBe(expected);
    });

    //маг тоже лечит))
    test.each(dataList)('Атака на мага', (stoned, attack, expected) => {
      magician.stoned = stoned;
      magician.attack = attack;
      expect(magician.attack).toBe(expected);
    });
    
  


});