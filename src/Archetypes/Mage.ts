import Archetype from './Archetype';

class Mage extends Archetype {
  energyType = 'mana';
  static instances = 0;

  constructor(name: string) {
    super(name);
    Mage.instances += 1;
  }

  static createdArchetypeInstances() { return Mage.instances; }
}

export default Mage;