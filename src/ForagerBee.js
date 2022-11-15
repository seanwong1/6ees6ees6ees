class ForagerBee extends Bee{
  constructor() {
    super();
    this.age = 10;
    this.color = 'yellow';
    this.job = 'find pollen';
    this.canFly = true;
    this.treasureChest = [];
  }
  forage(treasure) {
    this.treasureChest.push(treasure);
  }
};
