import Daemon from '../js/characters/Daemon.js'
import Bowerman from "../js/characters/Bowerman.js";
import Magician from '../js/characters/Magician.js'
import Swordsman from '../js/characters/Swordsman.js'
import Undead from '../js/characters/Undead.js'
import Zombie from '../js/characters/Zombie.js'
import Team from '../js/Team_Iterator_del.js';

describe('test iterator Team.js', () => {

  let team;
  let daemon;
  let magician;
  let bowerman;
  let swordsman;
  let undead;
  let zombie;
  
  beforeEach(() => {
    daemon = new Daemon('daemon');
    magician = new Magician('mag');
    bowerman = new Bowerman('bow');
    swordsman = new Swordsman('sword');
    undead = new Undead('und');
    zombie = new Zombie('zomb');
    team = new Team();
    team.addAll(daemon, magician, bowerman, swordsman, undead, zombie);

    
  });

    test('iterator', () => {
      let result = [];
      for (const member of team){
        result.push(member);
      }

      expect(result).toEqual([daemon, magician, bowerman, swordsman, undead, zombie]);

      expect(team[Symbol.iterator]).toBeDefined(); 

    });

    
  


});