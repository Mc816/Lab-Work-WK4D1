class Person {
    constructor(name, age, numYears) {
      this.name = name 
      this.age = age 
      this.numYears = numYears
    }
  
     job () {
       console.log(`${this.name} works 6 days a week`)
     }
  
    setAge() {
      console.log(` ${this.name} started working at this age: ${this.age}`)
    }
  
    yearsAtJob () { 
      if (this.numYears > 5){
         return true
      }else {
       return false
      }
    }
}
  

console.log("------------------------")
    class PostalWorker extends Person {
      
      constructor(name, age, numYears, certificate, car, fulltime){
      super(name, age, numYears)
      this.certificate = certificate 
      this.car = car
      this.fulltime = fulltime
      }
      diploma() {
        console.log(`The Postal Worker name  ${this.name} has recivied a ${this.certificate}`)
      }
      drives () {
        if (this.car === true){
          console.log("Drivers to give mail")
        }else {
          console.log("Walks to give mail")
        }
      }

      yesOrno () {
        if (this.fulltime > 40){
            console.log(`${this.name} works fulltime`)
        }else {
            console.log(`${this.name} does not work fulltime`)
        }
            }
        }
        
  
        console.log("------------------------")
  
  class Chef extends Person {
    constructor(name, age, numYears, type, location) {
    super(name, age, numYears)
    this.type = type 
    this.location = location 
  }
  
    kindOf() {
      console.log(`The ${this.name} is know to be a ${this.type} kind of chef`)
    }
  
   makesFood (){
     console.log(`The amazing chef has cook and baked food at ${this.location}`)
   }

   ageOfChef(){
    console.log(`The chef is ${this.age} year old`)
   }

  }
  
  

  console.log("------------------------")

 const theBestPerson = new Person ("Jack the Great", 100, "Work as a Software Engeriner")
  
//Create 2 PostalWorkers 
  const postal1 = new PostalWorker("George", 25, 2, "HighSchool", true, 5)
  
  const postal2 = new PostalWorker("Bob", 50, 10, "College Degree", false, 45) 

  //and 2 Chefs, 
  const chef1 = new Chef ("Ashley", 20, 2, "Smart", "Small Resturant")
  
  const chef2 = new Chef ("Jessica", 18, 5, "The Best", "Michelan Star")


console.log("------------------------")

console.log(theBestPerson)
 
//log them and 
console.log(postal1)

console.log(postal2)

console.log(chef1)

console.log(chef2)


console.log("-----------")

//test all their methods

chef1.ageOfChef()
chef1.job()
chef2.kindOf()
chef2.makesFood()
console.log(postal1.yearsAtJob())
postal1.diploma()
postal1.drives()
postal2.job()
postal2.setAge()
postal1.yesOrno()





class Governer {
    static name = "Bob"
    static state = "Ca"
    static vetoo = "veto"
    static age = 35
    
  static commuteSentence(){
      return`${this.name} has the power to commute sentences for criminals in this state:${this.state}.`
    }
  static veto(thing){
       console.log(`${this.name} will ${thing} any law he wants.`)
    }
  
  static ageRequirment(){
      console.log(`${this.name} is allowed to be governer becuase he is ${this.age} years old`)
    }
  }
  
  console.log(Governer)
  console.log(Governer.commuteSentence())
  Governer.veto("the world")
  Governer.ageRequirment()
  



