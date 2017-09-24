console.log('tamagotchi file is loaded');

//your class declaration here
class Tamagotchies {
    constructor(name, creatureType){
    this.foodInTummy = 10;
    this.restedness = 10;
    this.health = 10;
    this.name = name;
    this.creatureType = creatureType;
}
cry() {
    this.foodInTummy--;
    console.log("WAAAH!!!!!!");
    console.log(this.name + ' has current food in tummy = ' + this.foodInTummy);
  };
}
//create new Tamagotchis
var bob = new Tamagotchi('bob', 'blah')
bob.start();

//test out your Tamagotchies below via console.logs
