// -------------
// Arithmetic
// -------------

// + plus karna
// - ghatana
// / bhaag karna 
// * guna karna 
// **  power dena 
// % bhaag karne ke bad remender dena bass 



// ------------
// comparison
// ------------
//  ye check  karta hai (LAS and RAS)
// ==   kya dono ki value same hai kya
// ===  kya dono ki value same or data type bhi same hai kya
// !=  kya dono value same nhi hai
// !== kya dono ki value same or data type bhi same nhi hai
// >=  2>=3 kya 2 3 se bada hai ya 2 ke barabar hai  (false)
// <=  2<=3 kya 23 se chota kya 3 ke barabar hai (true)
// >   12>3 kya 12 3 se bada hai (true)
// <  12<23 kya 12 23 se chota hai(true)


// ----------
// assignment 
// ----------

// ---> main hai  = eska mtlan kisi ko value dena 
// jese num1  ko value  do 10
let num1= 10;


// combination assignment
// value ko update karo or assign karo

let num ;

// =
num =10; // num=10
// +=
num+=12 // 22 ==> num= num+12;
// -=
num-=2 // 20 ==>num =num-2
// /=
num/=2 // 10 ==> num = num/2
// *=
num*=3 //30 ==> num =num*3
// %=
num%=5 // 0 ==> num = num%5
console.log(num)//0 




// ---------
// logical 
// ---------

//  && and 
//  || or


// --> && ka simple fanda hai yadi jab saari condition true tab true dega yadi ek bhi false ho gya 
//     to false dega 
// NOTES: yadi jaha bhi or ko false mila to aage ki condition check nhi karta hai 

 let  check = false && true // yaha phele vale hi false ho gyi aage check nhi karega
 let check1 = true && true // yaha dono true hai to true return karega 
 console.log(check);// false 
 console.log(check1);// true


//  --> || and mein essa fanda hai ki yadi kahi bhi true mila to aage ki condition nhi dekhega or vohi
//         se true return kar deta hai yadi ek bhi condition true hai to true varna false


let str = true || console.log(" you are here")
console.log(str)// true
let str1 = false || " you are here2";
console.log(str1);//  you are here2





// ------
// unary
// ------

//  mtlab type change ya opposite karna
// + - typeof !
// post or pri


let a = +"10" // string ka 10 hai;
     // ab ye number ka 10 ho jyega 
console.log(a)
// NOTE: esa nhi kar sakte hai  +"hello"   ye karne par NaN aa jyega fail ho gya change karna or nhi hua 

// yadi negtive bana hai to number ke aage - laga do 
 // ab a -10 baan gya hoga 
 let b = -"10"
console.log(b)

// --> !  ye bass  kisi  variable ke true ya false ki value ko opposite kar deta hai 
     let check_1 = !0;
     console.log(check_1) // true
     let check_2 = !1;
     console.log(check_2); // false
     
    

// --> pre  increment mtlab phele value ko update karo or value use karo;
   let  pre = 10
   console.log( --pre)//9
//  --> post increment mtllab phele value use karo phir update karo or bad mein bad update use karo next time
let post  =20;
console.log(post++);// 20; phele value use phir update kara hai
console.log(post) // 21 bad mein use kiya update vola






//  ---> ternary

//  (condition)?true par ye part chalega :falsehone par ye part chalega 
  let result = 12>2?"yes":"no";
  console.log(result);
  


// ---> instanceof ye banta hai refernce value ka type (bata hai vo kis se bana hai ya apne parent ka)

let function1 = function() {}
console.log(function1 instanceof Array)

let object = {};
console.log( object instanceof Object)

let arra =[];
console.log(arra instanceof Array )

  
  
