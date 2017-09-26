console.log('tamagotchi file is loaded');

//your class declaration here
class watsupTamagotchi{
    constructor(name, creatureType){
        this.name = name;
        this.creatureType = creatureType;
        this.foodInTummy = 10;
        this.restedness = 10;
        this.health = 10;
    }

    cry() {
        this.foodInTummy--;
        console.log("WAHH!");
        console.log(this.name + "New value " + this.foodInTummy);
    };

    puke(){
        this.health--;
        console.log("Meow");
        console.log("New value " + this.foodInTummy);
    }
    yawn(){
        this.restedness--;
        console.log(this.name + "has current restedness of" + this.restedness);
        
    }
    start(){
            console.log("Starting " + this.name);
            var here = this;
            this.hungerTimer = setInterval(()=>{
                here.cry();
            }, 6000)
            this.yawnTimer = setInterval(() =>{
                here.yawn();
            }, 10000)
            this.sickTimer = setInterval(() =>{
                here.puke();
            }, 20000)
        };
       stop(){
           console.log("Stop" + this.name);
           clearInterval(this.hungerTimer);
           clearInterval(this.yawnTimer);
           clearInterval(this.sickTimer);
       }

};  
//create new Tamagotchis
var buildTom1 = new watsupTamagotchi();
var buildTom2 = new watsupTamagotchi("alex");

console.log(buildTom1);
console.log(buildTom2);

buildTom1.cry();
buildTom2.puke();


//test out your Tamagotchies below via console.logs
console.log(watsupTamagotchi);

var alex = new watsupTamagotchi("alex");
alex.start();
