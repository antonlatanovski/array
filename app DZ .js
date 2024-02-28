// Задание 1
class Animal {
  #name_
  #age_
  #weight_
  constructor(name,age,weight){
    this.#name_=name
    this.#age_=age
    this.#weight_=weight
  }
  getMakeSound(){
    alert("non")
  }
  getEat(){
    alert("non")
  }
}
class Mammal extends Animal{
  #predators_
  constructor(name,age,weight,predators){
    super(name,age,weight)
    this.#predators_=predators
  }
  getMakeSound(){
    alert("roar")
  }
  getEat(){
    alert("meat")
  }
  getRaptor(){
    alert("lion")
  }
}
class Bird extends Animal{
  #waterflou_
  constructor(name,age,weight,waterflou){
    super(name,age,weight)
    this.#waterflou_=waterflou
  }
  getMakeSound(){
    alert("chirping")
  }
  getEat(){
    alert("seed")
  }
  getFly(){
    alert("yes")
  }
  getBuildNest(){
    alert("yes")
  }
}
class Reptile extends Animal{
  #coldblooded_
  constructor(name,age,weight,coldblooded){
    super(name,age,weight)
    this.#coldblooded_=coldblooded
  }
  getMakeSound(){
    alert("non sound")
  }
  getEat(){
    alert("frog")
  }
  getCrawl(){
    alert("yes")
  }
  getBaskinSunlinghts(){
    alert("yes")
  }
}
// Задание 2
class LibraryResource{
  #title_
  constructor(title){
    this.#title_=title
  }
  getChekOut(){
    alert("given") 
}
getReturnToShelf(){
  alert("returned")
}
}
class Book extends LibraryResource{
  #author_
  #pages_
  #cover_
  constructor(title,author,pages,cover,){
    super(title)
    this.#author_=author
    this.#cover_=cover
    this.#pages_=pages
  }getChekOut(){
    alert("not given") 
}
getReturnToShelf(){
  alert("not returned")
}
getAuthor(){
  alert("Fet")
}
getNumberOfPages(){
  alert(556)
}
getIsHardcover(){
  alert("Hard")
}
}
class DVD extends LibraryResource{
  #director_
  #duration_
  #rating_
  constructor(title,director,duration,rating){
    super(title)
    this.#director_=director
    this.#duration_=duration
    this.#rating_=rating
  }getChekOut(){
    alert("yes given") 
}
getReturnToShelf(){
  alert("yes returned")
}
getDirector(){
  alert("Boby")
}
getDuration(){
  alert(90)
}
getRating(){
  alert("High")
}
}
class AudioBook extends LibraryResource{
  #autorName_
  #allDuration_
  #language_
  constructor(title,dautorName,allDuration,language){
    super(title)
    this.#autorName_=autorName
    this.#allDuration_=allDuration
    this.#language_=language
  }getChekOut(){
    alert("yes given") 
}
getReturnToShelf(){
  alert("yes returned")
}
getNarratorNam(){
  alert("Lee")
}
getTotalDuration(){
  alert(96)
}
getLanguage(){
  alert("Russian")
}
}