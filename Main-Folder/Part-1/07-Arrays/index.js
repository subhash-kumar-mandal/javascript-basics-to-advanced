// ====> array ek liner data jis mein haam single line mein data store karte 
//       hai or indexing se access karte hai 
//==> array ke ander haam kuch  bi element de sakte hai object array function string
//    number etc;

let arra =[ 10 , 20 , 30 , 40 , 50 ]
// index    0     1    2    3   4
// indexing 0 se start hote hai

// NOTES : .length kisi array ke inside kitne element hai batata hai 
console.log(arra.length)//5

arra[0]; // 10
arra[1]; //20
arra[2]; // 30
arra[3];// 40
arra[4];//50
arra[100] // ese index find kare jis par koi element nhi hai to undefined milta hai



// ===> array methods 
// push() ==> array mein last mein element ko add karta hai 
// pop()  ==> array mein last se element ko remove karta hai 
// shift() ==> array mein starting se ek element ko delete ya remove karta hai
// unshift() ==> array mein starting mein element ko add karta hai


let array = [1,2,3,4,5,6,7,8];
   array.push(10) // [1,2,3,4,5,6,7,8,9]  ==> add last 9 
   array.pop() // [1,2,3,4,5,6,7,8]  ==> remove last 9
   array.shift(20) // [2,3,4,5,6,7,8] ==> remove front one  element
   array.unshift(10) // [10,2,3,4,5,6,7,8]; ==> add front one element 

console.log(array);

// NOTES: ye array ki asli index or length or array ko change karte hai 


// ==>   splice vs slice 
 
// ==> slice -> arra ka ek subarray return karta hai;
// ==> subarray mtlab ka koi part ya chota part
let arr =[1,2,3,4,5,6,7,8,9,10];
 let part =  arr.slice(1,7);
 console.log(part) // [ 2, 3, 4, 5, 6, 7 ]
 console.log(arr) //[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//  NOTES : slice asli array ko change nhi karta hai 


// ==> splice 

let arr1 =[1,2,3,4,5,6,7,8,9,10];
let cutpart =arr1.splice(1,2,20,30);
// arr1.splice() --> (start-index: delete-kitne-karne-hai:New element jo add karna hai start-index se)
console.log(arr1) // [ 1, 20, 30, 4,  5, 6,  7,  8, 9, 10] 
console.log(cutpart); // remove element ko return karta hai 

// NOTES: ye array ki asli index or length or array ko change karte hai


// ---------------------------------------------------------------------
// 🔹  ?? : Array के Elements को Access करना और Loop से Traverse करना
// ---------------------------------------------------------------------

// कभी-कभी हमें array के सारे elements को एक-एक करके read या print करना होता है।
// इसके लिए हम loop का use करते हैं।

// Example 1: for loop से array print करना
let fruits = ["apple", "banana", "mango"];

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]); 
                //   |___________ fruits array mein i index par element ko access karna
}




//  forEach() method 
// forEach() एक array method है जो array के हर element पर function को apply करता है।
// मतलब, array के हर item के लिए एक काम कर सकते हैं, जैसे print करना या modify करना।

let fruit2 = ["apple", "banana", "mango"];

 fruit2.forEach(function(fruit,index,fruit2) {
  console.log(fruit,index,fruit2);
});

// note fruit -- current element 
//      index -- current index
//      fruit2-- pura array dena haar bar


//  note forEach return kuch nhi karta hai ;



// ==> map method 

let numbers = [2,10,20,40];

 let new1 =numbers.map(function(element,index,number) {
  return element*10;
});
console.log(new1) // [20,100,200,400]

// note element -- current element 
//      index -- current index
//      number-- pura array dena haar bar

// NOTES : jab haame array se ek new array bana ho uske hi element se jitne vo hai ;
// map return karta hai 






// ---->  reduce method 
//    reduce() array के सारे elements को एक single value में combine कर देता है।
//   sum निकालना, average, product, max, min, या object बनाना — सब reduce से किया जा सकता है।

// 🔹 Syntax
// array.reduce((accumulator, currentValue, index, array) => {
//   // return updated accumulator
// }, initialValue);

// | Parameter      | Meaning                       |
// | -------------- | ----------------------------- |
// | `accumulator`  | पिछले step का result रखता है  |
// | `currentValue` | अभी वाला element              |
// | `index`        | (optional) current index      |
// | `initialValue` | accumulator की starting value |



let arra1 = [20,30,40,50];
let sum = arra1.reduce((acc,curr)=>{
    // console.log(acc);
    return acc+curr
})
console.log(sum) // 140



//  find() mothod

// find() किसी array में पहला ऐसा element लौटाता है जो दिए गए condition को पूरा करता है।
// अगर कोई भी element condition match नहीं करता, तो ये undefined देता है।

// 🔹 Syntax:
// array.find(function(element, index, array) {
//   // condition return true or false
// });

const num = [10, 25, 30, 45, 60];

const result = num.find(num => num > 40);
// 40 se bada number dekhna hai but find first condition se true hote hi first element return karta hai 
// yadi  condition true nhi hoti to undefined dena 

console.log(result);



// ==> Some method
// haam jab use karte hai jab dekhta hota hai array mein koi element kisi condition puri kar rhi hai ya nhi
// yadi ek bhi element condition puri karti hai true ata hai varna false 

let some1 =[10,20,40,50];
let check = some1.some((val)=>{
  return val>100
})
console.log(check);// koi bhi 100 se bada nhi hai element;



// ==> every method
// haam jab use karte hai jab dekhta hota hai array mein haar element kisi condition puri kar rhi hai ya nhi
//yadi sare element condition puri karte  hai to true deta hai varna fails

let arr_num =[10,20,39,19];
let check1 =arr_num.every((val)=>{
  return val<15
})
console.log(check1); // saare mein se ek 10 chota hai 15 se esliye false ayaega


