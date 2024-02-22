function BankAccount (){
    let balans_=0
    this.addBalans=function(sum) { 
       return balans_+sum
     }
     this.withdrawBalans= function(sum){
       if(sum<=balans_){
      this.balans_=balans_-sum
       }
     }
    this.getBalans = function (){
       return balans_
     }
     this.setBalans= function(balans){
      if(balans>=0){
        this.balans_ = balans
        return balans
      } 
     }
   } 
   const BankAccount1 = new BankAccount()
  alert(BankAccount1.setBalans(1000)) 
alert(BankAccount1.addBalans(20))
alert(BankAccount1.getBalans())

// Задание 1
function User (name, age){
  let name_=name
  let age_=age
  this.getUserName=function(name){  
    return name
  }
  this.getUserAge=function(age){  
    return age
  }
}
const User1 = new User()
alert(User1.getUserName("Antun"))

// Задание 2
function Calculator (){

this.getAddNum=function(num1, num2){

return num1+num2
}
this.getSubtractNum = function(num1, num2){
  return num1-num2
}
this.getMultiplyNum = function(num1, num2){
 return num1*num2
}
this.getDivideNum = function(num1, num2){
  return num1/num2
}
} const Calculator1 = new Calculator()

alert(Calculator1.getMultiplyNum(1,4))

// Задание 3.
function Book (){
  let title_= title
  let autor_= autor
  let yer_= yer
  this.getTitle = function(title){
    return title
  }
  this.getAutor = function(autor){
    return autor
  }
  this.getYer = function(yer){
    return yer
  }
} const Book1 = new Book()
alert(Book1.getTitle(Potter))

// Задание 4.
function Cart(){
  let carts = []
  this.getAaddltem = function(product){
    return carts.push(product)
  }
this.getRemoveltem = function(product){
let indexProduct = carts.indexOf(product)
carts.splice(indexProduct,1)
}
  this.getClearCart = function(){
    carts.splice(0,carts.length)
  }
}
const Cart1 = new Cart()
Cart1.getClearCart()

// Задание 5.
function Auto(){
  let brand_=brand
  let model_=model
  let yer_=yer
  this.setChangeYer = function(yer){
    return yer
  }
}
const Auto1 = new Auto()
 alert(Auto1.setChangeYer("BMW"))
