import Archetype from './Archetype';

class Ranger extends Archetype {
  energyType = 'stamina';
  static instances = 0;

  constructor(name: string) {
    super(name);
    Ranger.instances += 1;
  }

  static createdArchetypeInstances() { return Ranger.instances; }
}

export default Ranger;