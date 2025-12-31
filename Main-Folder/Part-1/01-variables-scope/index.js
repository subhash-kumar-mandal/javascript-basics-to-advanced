// --------------------------------
// // var,let const - line by line .
// --------------------------------

var a;  // Delcare karna 
    a = 20  // Delacre + initialize (first time)
var a ; // Redeclaration allowed 
    a=60; // allowed reinitialize but its shadowing old value . 
console.log("a value is",a)

// NOTE : 1. var jo hai window mein add hota hai
//        2. function scope follow karta hai 
          function varcheck(){
             var hello = "world"
          }
        //   console.log(hello) note acesse here jis function mein usi fuction mein kahi bhi use ho sakta hai
//        3. error nhi ata redeclaration par 


let b ; //Delcare karna 
    b =10; // Delacre + initialize (first time)

// let b; // not allowed redeclaration 
   b=20 ; // but its have reinitialize 
console.log("b value is",b);
// const c;  this error { Delcare karna +  initialize dono sath karna padta hai}
   const c=10; // this is right way

// const c;  nota allowed redeclaration same name .
    // c=20 // error {not aloowed reinitialize const variable}
console.log( "c value is",c)



// --------------------------------
// Scope (global , block, function ) .
// --------------------------------

// Global 
var num1 =10;   //-----
let num2 = 20;  //-----   all have globalscope hai  kisi function ya block{} mein nhi 
const num3 =30; //-----   hai.

console.log(num1,num2,num3);




// block 

if(true){
    var name  = "hello";
    let name1 = "world";
   const name3 ="js";
   console.log(name); // (yaha haam inko use kar sakte hai kyuki block mein bante
   console.log(name1) // hi block mein accecss kar rehe hai)
   console.log(name3)
}

   console.log(name);  //---  var block scope ko value ya nhi manta hai
// console.log(name1) //----\ error ( let or const jis block{} mein bane  hai vohi 
// console.log(name3) //----/        tak simeet hai or kahi use nhi ho karte hai)



// function scope 
//  sorry for use  IIF use here 
(function sayhi(){

    // console.log(game) ese use nhi kar sakte hai ye TDZ mein rehega yaha par
    let game = "js";
    var game1 = "c++";
    const game2 = "c#";


    console.log(game);// var function follow karta hai fucntion mein kahi bhi 
    //                   use kar sakte hai    
    console.log(game1);
    console.log(game2);

}())


// console.log(game);  (haam kisi ko bhi function ke bhar access nhi kar sakte hai 
// console.log(game1); sab function scope follow karte hai yaha tak var bhi karta
// console.log(game2); hai )





// --------------------------------
// TDZ (Temporal dead zone ) .
// --------------------------------

console.log(str);// var le sath khele alaga hai js esko undefined deta hai TDZ mein


// console.log(str1); (let jo hai TDZ mein rehta hai reheta hai mtlab mtlab js ko pata hai str1 bana
//                    hai but mein usko  bane se phele use nhi kar sakta hu ) 


// console.log(str2) //  (let jo hai TDZ mein rehta hai reheta hai mtlab mtlab js ko pata hai str2 bana
//                    hai but mein usko  bane se phele use nhi kar sakta hu 

var str ="hello";
let str1 ="hello1";
const str2 ="hello2";


// NOTE : block scope bante hi TDZ start ho jata hai 
{
//  console.log(name); //ReferenceError: Cannot access 'name' before initialization
//  console.log(name1) // ReferenceError: Cannot access 'name' before initialization
    let name = "aman";
    let name1 = "harsh"
}


// --------------------------------
// Hoisting impact per type .
// --------------------------------

// ---> hoisting js mein jab bhi variable ya function uper ke jata hai but variable mein do part mein tut
//     jata hai  uska declare part uper jata hai or uska initialization part neeche rehe jata hai


// ex 
  var hello =10 

//  To esko js ese       
    //  var hello = undefined; es part ko hoist kiya jata hai 
    //  hello  = 10


// NOTE: let or const bhi Hoist hote hai 
//      kyuki TDZ mein reheta hai esliye haam hoisting nhi samjh pate hai but haam 
//      declaration ko accesss kar lete hai but initialization  ko nhi kar pate hai


     