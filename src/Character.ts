import Energy from './Energy';
import Archetype, { Mage } from './Archetypes';
import Fighter from './Fighter';
import Race, { Elf } from './Races';
import getRandomInt from './utils';

class Character implements Fighter {
  private _race: Race;
  private _archetype: Archetype;
  private _maxLifePoints: number;
  private _lifePoints: number;
  private _strength: number;
  private _defense: number;
  private _dexterity: number;
  private _energy: Energy;

  constructor(name: string) {
    this._dexterity = getRandomInt(1, 10);
    this._race = new Elf(name, this._dexterity);
    this._archetype = new Mage(name);
    this._maxLifePoints = this._race.maxLifePoints / 2;
    this._lifePoints = this._maxLifePoints;
    this._strength = getRandomInt(1, 10);
    this._defense = getRandomInt(1, 10);
    this._energy = {
      type_: 'mana',
      amount: getRandomInt(1, 10),
    };
  }

  get race() { return this._race; }
  get archetype() { return this._archetype; }
  get maxLifePoints() { return this._maxLifePoints; }
  get lifePoints() { return this._lifePoints; }
  get strength() { return this._strength; }
  get defense() { return this._defense; }
  get dexterity() { return this._dexterity; }
  get energy() { return { ...this._energy }; }

  receiveDamage(attackPoints: number) {
    const damage = attackPoints - this._defense;
    this._lifePoints -= damage > 0 ? damage : 1;
    if (this._lifePoints <= 0) {
      this._lifePoints = -1;
      return this._lifePoints; 
    }
    return this._lifePoints;
  }

  levelUp(): void {
    this._dexterity += getRandomInt(1, 10);
    this._maxLifePoints = Math.min(
      this._race.maxLifePoints,
      this._maxLifePoints + getRandomInt(1, 10),
    );
    this._lifePoints = this._maxLifePoints;
    this._strength += getRandomInt(1, 10);
    this._defense += getRandomInt(1, 10);
    this._energy = { type_: 'mana', amount: 10 };
  }

  attack(enemy: Fighter): void {
    enemy.receiveDamage(this._strength);
  }

  special(enemy: Fighter): void {
    console.log(this.attack, enemy);
  }
}

export default Character;