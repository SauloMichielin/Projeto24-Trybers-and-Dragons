import Archetype from './Archetype';

class Necromancer extends Archetype {
  energyType = 'mana';
  static instances = 0;

  constructor(name: string) {
    super(name);
    Necromancer.instances += 1;
  }

  static createdArchetypeInstances() { return Necromancer.instances; }
}

export default Necromancer;