import Archetype from './Archetype';

class Warrior extends Archetype {
  energyType = 'stamina';
  static instances = 0;

  constructor(name: string) {
    super(name);
    Warrior.instances += 1;
  }

  static createdArchetypeInstances() { return Warrior.instances; }
}

export default Warrior;