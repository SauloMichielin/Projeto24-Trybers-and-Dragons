import Race from './Race';

class Elf extends Race {
  maxLifePoints = 99;
  static instances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Elf.instances += 1;
  }

  static createdRacesInstances() { return Elf.instances; }
}

export default Elf;