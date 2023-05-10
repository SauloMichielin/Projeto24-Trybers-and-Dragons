import Energy from '../Energy';

interface Fighter {
  lifePoints: number;
  strength: number;
  defense: number;
  energy?: Energy;

  attack(enemy: Fighter): void;
  special(enemy: Fighter): void;
  receiveDamage(amount: number): number | undefined;
  levelUp(): void;
}

export default Fighter;