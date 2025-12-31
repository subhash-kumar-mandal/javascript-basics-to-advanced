// ----------------
// Data types
// ----------------

// two type   1 primitives types
//            2 Refernce types

// 1. Aesi sari value jisko  copy karne par ek real copy mil jye 
    // Number
    // String
    // Boolean
    // null
    // undefined
    // Symbol
    // BigInt



    // 1 .sting
//            "" single quotes 
//            '' Double quotes    yadi enme se kisi ke under kuch likha hai to vo string hai
//            `` backticks



//  2. numbers 
//     12.2   number
//      5     flot         dono ko js number manta  hai


//   3. boolean 
//     true 
//     false 


//    4. null
//    null ka mtlab hai haamne  jaan boojh kar  koi value nhi di


//   5 undefined
//   mtlab haamne ne khud variable banaya but value dena bhul gya or jo default value hoti hai

// 6. symbol
//   unique  and immutable value hoti 
   let vale = Symbol("hello");
   let vale2 =Symbol("hello");

   let check = (vale===vale2) 
   console.log(check) // false
//    dono same the but point is unique the 



//  7 bigInt 
//    js mein number use karne ki safe vale hoti hai yadi us se bada number use karna hai to bigInt ka
//    use karte hai (use karne ke liye number ke last mein small n laga do 100000000000n )


// 2  Aesi saari value jinko copy karne par real copy nhi milegi but usko refernce  milega   parent ka;
    // function
    // Object
    // Array





// Pov 

let a=12;
let b=a;

a=a+2 ; // ab a 14 ho jyega 
console.log(a)// 14
console.log(b)// 12 b ke pass apna 12 hai usne a variable se ek real copy banaya jo uska khud ka hai 


// refernce 

let arra1 =[1,2,3];
let arra2= arra1;

console.log(arra1);//[1,2,3]
console.log(arra2);//[1,2,3]

// change here 

arra2.pop() // arra2 se last ka element remove karo ab [ 1, 2 ];

console.log(arra1);//[ 1, 2 ]
console.log(arra2);//[ 1, 2 ]

// point is arra2 mein change kiya to arra1 mein kyu hua kyuki  arra2 ne arra1  ka real copy khud nhi
// bana tha usne arra1 se uska Reference liya tha esliye jab arra2 mein change kiya  to usne apne parent 
//  ke  Reference ko point kar ke usko bhi change kiya .

// NOTE: yadi haam ne Reference copy kiya to haam ne jis se Reference liye usko to change karega hi 
//      or main jaha  se parent se Reference copy kiya hai usko bhi change karega






// ----------------
// dynamic typig  -- > js mein static typing nhi hai (mtlab variable ko batna nhi padta hai kon sa type hai )
// ----------------

// ---> mtlab aj haamne let a nama jiski value 10 to kal ko haam esme kuch or value set kar sakte hai
//     jo run time par depend karta hai 

// Pov 
let num =10;
num =true;
num ={};
num =[];
num ="hello"
console.log(num)// hello

// -----------------------------------------------
// Type of  quirks (e.g Typeof  null === 'object')
// -----------------------------------------------
// Quirks ka mtlab haam data type sochte kuch hai or hota kuch or hai
// typeof ---> kisi ka data type check karne ke liye 


// ex Quirks 
// --> num ka typeof 'object'
// --> .1+.2 = ana chahiye 0.3 but ata hai  0.30000000000000004
// --> NaN===NaN dono same hai but same nhi hai (data type 'number')
// --> [] +[] to ata hai  ''  
// --> ''+""  to ata ''
// --> 1+"1" to ata 11
// --> 1 == "1" ata hai true 
// --> 1 === "1" ata hai false 



// -----------------------------
// Type coercion ( ==   vs  ===)
// -----------------------------

// (type coerion )
// --> concept hai jismein code mein ek type se automatically convert ho jata hai dusre type mein 

// "5"+1 --> '51'deta hai js or khud type change karta hai 
//           plus + icon do kaam karta hai ek plus ka ek concatenation karne ka.
//  NOTE: yadi khud bhi  plus karte time variable string aa gya to js samjhta hai conatenation karta hai


// --> 5=="5" ==> true  kyuki js ne  khud se type change kiya or value dekhi;
// --> 5==="5" ==> false kyuki ab js ne khud type change kiya but hua nhi hua nhi ek number or string
//                 ka hai or alaag data type hai esliye false 



// ------------------------
// truthy and falsy values
// ------------------------

// false values -->    false 
//                     0   (The number zero)
//                    -0   (The negative number zero)
//                     0n  (BigIntl ka zero)
//                     ""  (empty string)
//                     null ( intentional absence of any object value.)
//                     undefined (that has been declared but not yet assigned a value, or a missing object property.)
//                     NaN (representing an invalid or unrepresentable numerical value.)



// true values --> en sab ko chor kar baki sab values truthy value hai
