/*
class Hamster {
    constructor(owner, name, price) {
        this.owner = " "
        this.name = name
        this.price = 15 
    }
    wheelRun (){
        console.log('squeak squeak')
    }
    eatFood (){
        console.log('nibble nibble')
    }

    getPrice(bankAccount){
        return this.price
    }
}

class Person extends Hamster {
    constructor(name, age, height, weight, mood, hamsters, bankAccount){
        super(name)
        this.name = name 
        this.age = 0 
        this.height = 0 
        this.weight = 0
        this.mood = 0 
        this.hamsters = []
        this.bankAccount = 0
    }


getName(){
    return this.name
}

getAge (){
    return this.age 
}

getWeight(){
    return this.weight
}

greet() {
    console.log(`Hell this is ${this.name} `)
}

eat (){

    this.weight += 10 
    this.mood -= 10 

}

excerise(){
    this.weight -= 5 
}

ageUp() {
    this.age +=  10 
    this.height += 10 
    this.weight += 10 
    this.mood -= 10 
    this.bankAccount -= 10 
}

buyHamster(hamster){
    this.cars.push(newCar); // maybe this can be used 
    //hamster.push.hamsters[]// fix this
    this.mood += 10 
    this.bankAccount
}

}

const Timmy = new Person("Timmy", 9, 0, 0,0, "Buy", 0)

const Gus = new Hamster('Timmy', 0, 0)

console.log(Timmy)
console.log(Timmy.eat(5))
console.log(Timmy.excerise(5))
*/

//Part Two 
//Created a class Dinner 
class Dinner {
    constructor(appetizer, entree, dessert){     //Created Paramert into the constructor 
        this.appetizer = appetizer               // Put dot notation and connected the Paramter togther
        this.entree = entree
        this.dessert = dessert
    }
}

const newDinner = new Dinner("Mini HotDogs", "Salomon", "Ice Cream")          //Checked to make sure Dinner runs the correct information 
console.log(newDinner)

class Chef {
    constructor(name) {
     this.name = name 
     this.recip = []
    }
    makeDinner(appetizer, entree, dessert){

        const diffDinner = new Dinner(appetizer, entree, dessert)
        this.recip.push(diffDinner)
    }
}

const chef1 = new Chef("Bob The Chef")
chef1.makeDinner("food", "hambuger", "Ice Cream")
console.log(chef1)


chef1.makeDinner("onion rings", "meat", "frozen food")
console.log(chef1)


chef1.makeDinner("bagels", "full course meal", "Iced Slushy")
console.log(chef1)
