// Задание 1.
// function BankAccound(balance, summ){
    // this.balance = balance
    // this.summ = summ
    // this.plusSumm = function(){
        // alert(this.balance+this.summ)
    // }
    // this.withdrawalSumm = function(){
        // alert(this.balance-this.summ)
    // }
    // this.loocBalance = function(){
        // alert(this.balance)
    // }
// } 
//  const BankAccound1 = new BankAccound( 10, 20)
//  BankAccound1.plusSumm()

// Задание 2.
//  function Calculator(num1, num2){
    // this.num1 = num1
    // this.num2= num2
    //  this.plusSumm = function(){
        // alert(this.num1+this.num2)
    //  }
    //  this.subtraction = function(){
        //  alert(this.num1-this.num2)
    //  }
    // this.multiply = function(){
        //  alert(this.num1*this.num2)
    //  }
    //  this.divide = function(){
        // alert(this.num1/this.num2)
    // }
//    } 
//   const Calculator1 = new Calculator( 30, 20)
//  Calculator1.subtraction()

// Задание 2-2.
//  function Circle(radius){
    // this.radius = radius
    // this.area = function(){
        // alert(3.14*(Math.pow(this.radius,2)))
    //  }
    //  this.lengt = function(){
        //  alert(2*3,14*this.radius)
    //  }   
//    } 
//   const Circle1 = new Circle( 10)
//  Circle1.area()
//  Circle1.lengt()

// Задание 2-3.
 function  Employee(name, position,salary,interest){
    this.name = name
    this.position = position
    this.salary = salary
    this.interest = interest
    this.applyBonus = function(){
        alert(this.salary*this.interest)
       } 
 }
  const Employee1 = new Employee(" 1a","b",1000,2)
 Employee1.applyBonus()
 