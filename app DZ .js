
// Задание 2-3.
 
// function  Product(cost, title){
    this.cost = cost
    this.title = title

//   } 
//   function ShoopingList(){
    //  let products = []
    //  this.addProduct= function(product){ 
        // products.push(product)
    //  } 
    //  this.deliteProduct=function(product){
    //    let indexProduct = products.indexOf(product)
        // products.splice(indexProduct,1)
    //  }
    //  this.sumCostProduct=function(sum){
        // let sum =0;       
        // for(let i=0; i%2; i<products.length){
                //    sum=sum+products[i];   
        // }
    //  }
//   }
// const ShoopingList1 = new ShoopingList()
// const Product1 = new Product( 100, "apple")
// const Product2 = new Product(220, "tools")
// ShoopingList1.addProduct(Product1)
// ShoopingList1.sumCostProduct()

function  WebHistory(url){
 
}
function UrlList() { 
   let urlPage = []
   this.addUrlPage = function(url){
  urlPage.push(url)

 
   }
 }
  const WebHistory1 = new WebHistory("hhp")
  const WebHistory2 = new WebHistory("hhpw")
  const UrlList1 = new UrlList()
  UrlList1.addUrlPage(WebHistory1, WebHistory2)
  alert(urlPage)