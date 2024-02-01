// Задача 1.
// function sum (a,b){
    // return sum=a+b
// } alert(sum(5,20))


// Зфдание 2.
// let arr=[5,10,15,20,25];
// function newArr(arr){
    // let sum=0;
    // for(let i=0; i<arr.length;i++){
        // sum=arr[i]+sum;
       
    // } return sum/arr.length;
// } alert(newArr(arr))

// Зфдание 3.

//  function revStr(str){
    //  let strNew = " ";
//  for(let i=str.length-1;i>=0;i--){
        //  strNew=strNew+str[i]
    //  } return  strNew;
//  } alert(revStr(str));

 // Зфдание 3.

// function revStr(str){
//   return  str.split("").reverse().join("");
//  } alert(revStr("JavaScript"));


 // Зфдание 4.
// function num(a){
//    if( a===Math.floor(a)){
    // return true;}
//    else{
    // return false;} 
// } alert(num(5))

// Задание 5.

 function revStr(str,ch){  
    let sum=0; 
for(let i=0; i<str.length;i++){
        if(str[i]===ch){
            sum++;
        }
     } return  sum;
 } alert(revStr('hello','l'));
