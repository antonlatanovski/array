//  Задание 1
class Person {
  #name_
  #age_
  constructor(name,age){
    this.#name_=name
    this.#age_=age
  }
   getShowName(){
    return this.#name_
  }
  getShouwAge(){
    return this.#age_
  }
} let Person1 = new Person("Anton",39)
alert(Person1())

//  Задание 2
class Employee extends Person(){
  #position_
  constructor(name,age,position){
this.#position_=position
  }
  getSetPosition(){
    return this.#position_
  }
} let Employee1 =new Employee("Anton",39,"IT")
alert(Employee1())
 
// Задание 3
class BankAccount{
  #balance_
  constructor(balans,sum){
    this.#balance_=balans
    this.sum_=sum
  }
  getSummBalance(){
    return this.#balance_+this.sum_
  }
  setWithdrawBalance(){
    if(this.#balance_>=this.sum_){
      return this.#balance_-this.sum_
    }
  }
}
class SavingsAccoun extends BankAccount(){
  constructor(balans,sum,interestRate){
    this.interestRate_=interestRate
  }
  setShowInterestRate(){
    return balans*this.interestRate_
  }
}
class CheckingAccount extends BankAccount(){
  constructor(balans,sum,comiss){
    this.comiss_=comiss
  }
  setComissBalance(){
    return balans-this.comiss_
  }
}

// Задание 4
class Animal {
  #name_
  #sound_
  constructor(name,sound){
    this.#name_=name
    this.#sound_=sound
  }
  getShowSound(){
    alert("nothing")
  }
}
class Dog extends Animal(){
  constructor(name,sound,sounddogy){
this.sounddogy_=sounddogy
  }
    runShowSoudDogy(){
      alert("Гав")
    }

}
class Cat extends Animal(){
  constructor(name,sound,soundcats){
this.soundcats_=soundcats
  }
    runShowSoudCats(){
      alert("Мяу")
    }
}

// Задание 5
class Vehicle{
  #make_
  #model_
  #yer_
  constructor(make,model,yer){
    this.#make_=make
    this.#model_=model
    this.#yer_=yer
  }
  getShowVehicle(){
    return this.#make_,this.#model_,this.#yer_
  }
}
class Car extends Vehicle(){
  #power_
  constructor(make,model,yer,power){
    this.#power_=power
  }
 getShowPowerCar(){
  return this.#power_
 }
} let Car1 = new Car(200)
alert(Car1())
class Motorcycle extends Vehicle(){
  #enginevolume_
  constructor(make,model,yer,enginevolume){
    this.#enginevolume_=enginevolume
  }
 getShowEngineMoto(){
  return this.#enginevolume_
 }
}
class Truck extends Vehicle(){
  #length_
  constructor(make,model,yer,length){
    this.#length_=length
  }
 getShowLengthTruck(){
  return this.#length_
 }
}