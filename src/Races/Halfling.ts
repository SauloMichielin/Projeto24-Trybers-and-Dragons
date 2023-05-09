import Race from './Race';

class Halfling extends Race {
  maxLifePoints = 60;
  static instances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Halfling.instances += 1;
  }

  static createdRacesInstances() { return Halfling.instances; }
}

export default Halfling;