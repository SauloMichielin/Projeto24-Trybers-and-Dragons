import Race from './Race';

class Dwarf extends Race {
  maxLifePoints = 80;
  static instances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Dwarf.instances += 1;
  }

  static createdRacesInstances() { return Dwarf.instances; }
}

export default Dwarf;