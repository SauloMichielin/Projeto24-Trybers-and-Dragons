import Race from './Race';

class Orc extends Race {
  maxLifePoints = 74;
  static instances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Orc.instances += 1;
  }

  static createdRacesInstances() { return Orc.instances; }
}

export default Orc;