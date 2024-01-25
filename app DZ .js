 Задание 8
 let arr =[];
 let sum = 0;
 for( let i =0; i<100;i++){
     arr[i]=Math.floor(Math.random()*100)   
    if(arr[i]%5==0){
         sum= (sum+arr[i])/2
     }
 }alert(Math.floor(sum))

Задание 10
let arr =[];
let sum = [];
for( let i =0; i<100;i++){
    arr[i]=Math.floor(Math.random()*100)   
    if(arr[i]%10==0){
      sum.push(arr[i])
    }
}alert(sum.length)
