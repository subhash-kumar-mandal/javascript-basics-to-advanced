// ---> Function
// function ek esa block of code hota hai  khud nhi chlata hai usko call karne par 
// vo chalta hai 
// function haam esliye banate hai yadi koi kaam baar baar ho raha hai to uske liye
// haam function hi bana dete hai  (jese baar baar do Number plus ho rehe hai )


// syntex 

// function name() {
//     code here work   --> function ka name kuch bhi rakh sakte hai 
// }                        usi name se usko invoker karte hai

// name() inoked 


//  --> create function
// function name() {
//                                ----> function ko declarations karna (create karna)    
// }

//  ---> function expression
// let create = function(){
//                        ---> ye hai ek function expression jis ko dusre variable ke under
//                             hai 
// }


// Arrow function  
//    ()=>{
//   ---> ye hai ek arrow function jiska koi name hi nhi hai(expression ) 
//    }


function sayhi(){
    console.log("Hello");
    
}

sayhi() // inoked , call ,run 

let sayhi1 = function(){
    console.log("Hello1");
    }
sayhi1() // Hello1

let sayhi2 =()=>{
    console.log("Hello2");
    }

sayhi2() // Hello2

// NOTE : kisi bhi function ko run karne ke liye usko invoked karna padta hai 




// -------------------------
// Parameters vs   arguments
// -------------------------



// function hello(params1,params2) { --> (haam jo function mein likhte hai vo hote hai parameter 
//      console.log(params1+params2);    or parameter ka kuch bhi name ho sakta hai ,or kitne bhi
//                                       parameter pass kar sakte hai )
// }


// hello(a,b)  --> call karte time haam arguments pass karte hai ya variable ko 


// ex 
 let num1 =10;
 let num2 =20;
function plus(para , para2){
    console.log(para+para2);
    
}

plus(num1,num2) // 30



// default parameters -- > mtlab haam argument dena bhul gye hai parameneter ko inplace haam 
//                        value de dena jis se undefined nhi .

function noraml(para,para2){
    console.log(para,para2)
}

noraml() // haam call kare to do baar undefined ayega kyuki dono ko koi argumenet nhi diya tha


function default_check(para="fill argumenet",para1="fill argument"){
 console.log(para, para1)
}


default_check() // fill argumenet fill argument print honge ;
default_check(1,2)// 1 2 print honnge


//  --> reat Operators  (...name_variable)

// ---> ye array bana deta hai single numbers ki 
// use esliye karte hai function baar parameter banyege bada ho jyega


function rest1(...val){
 console.log(val)
}
rest1(1,2,3,4,4,5,6,7) // [1,2,3,4,4,5,6,7]

function rest2(a,b,...val){
    console.log(a,b,val) // yaha js khud apne app value handal kar leta hai
}
rest2(1,2,3,4,5,6) // 1 2 [ 3, 4, 5, 6 ]



// ---------------
// returns  values
// ---------------
//  ---> haam ab tak console kar rehe the function mein but yadi haam return key word ka use kare to 
//  vo function koi value return karta jo karni hai, yadi haam function se kuch return nhi karege to
//  to function defualt undefined return karega 

// --> NOTE: yadi jaha bhi return keyword mila function mila to pure function ko rok dega or 
//           vohi se value return ho jyegi or aage  ka koi code nhi chalega 

function plus1 (m1,m2){
         m1+m2
}
 console.log(plus1()); // undefined kyuki kuch return nhi kiya


//  with return

function plus2 (m1,m2){
      return   m1+m2
               m1*m2
}
 console.log(plus2(2,3)) // 5 print hoga 2+3 or return m1+m2 kiya esliye next line nhi chali m1*m2 voli





// 1) First-Class Functions (JavaScript में)

// इसका मतलब है, आप functions के साथ वही सब कर सकते हो जो एक value, variable या object के साथ कर सकते हो:
// Function को किसी variable में store कर सकते हैं
// Function को किसी दूसरे function के argument के रूप में pass कर सकते हैं
// किसी function से function को return कर सकते हैं
// Function को array या object के अंदर रख सकते हैं


// --> function ko ek variable mein rakhna 
const greet = function () {
  console.log("Hello Subhash");
};
 greet()  // function को variable के through call किया
//          यह possible है क्योंकि JavaScript function को एक value की तरह मानता है।


// --> ek function ko parameneter ki tara pass karna 
function call (){
    console.log("hello i am first call function ")
}

function call1(val){
       val()
}

call1(call); 
//  note haamne yaha call1 ko ek function pass kiya parameter ki tara ya vaibale ki tara or 
// or ye possible hai 


// --> ek function ko return karana 
function hell (){
    return function(){
        console.log("hello i am return function") // yaha hamne ek function ko return kiya hai
    }
}

let check = hell(); // yaha ek function expression  return mila  hai
console.log(check) // print par ek function milega [Function (anonymous)]
check() // haamne return function ko call kiya jo check ke under aya tha ;



// 2) Higher-Order Functions (HOF)
// ✅ किसी दूसरे function को argument के रूप में लेता है
// ✅ किसी function को return करता है
// NOTE: बस इतना सा difference hai first class or HOF mein


//  (function को argument में देना):
function welcome(name) {
  console.log("Welcome", name);
}

function callFunction(fn) {
  fn("Subhash");
}

callFunction(welcome) // yaha function ke call karte hi dusra function para ke roop mein pass liya
// ---> print => welcome Subhash



// --> HOF se koi function return karna 
function HOF(){ //  ----> ye jo parent function hai high order function hai 
    
    return ()=>{   // ye jo function part return hua hai ye first class function hai
    console.log("HEllo i am return from hight order function ")
    }
}

let check1 = HOF();// vohi return ko save kara  ab ;
check1() // print => HEllo i am return from hight order function 
// HOF()()// ese bhi likh sakte hai same output ayega




// Pure vs Impure function 

// --> pure function jo value ko change nhi karte hai 
let a=10;
function print(m1){
    console.log(m1);
}

print(a)// 10
// yaha bass print kiya bass naa ki value change;



// -->Impure function
// --> Impure function jo value ko change kar dete hai ;
let b=20;
function change(m1){
    console.log(++m1);
} 

change(b);//21
change(b);//21
// ---> value ko change kar rha hai jab bhi haam change ko call karege to vo b ko 1 se plus karega haar bar


// ---------------------
// Closure  
// ---------------------


// Closure samjhne ke liye ye concept samjhna jaruri hai ;

// 1.Lexical scope 
// 2.Scope chaning
// 3. what is behind the sences [[Environment]]


// 1. lexical Enviroment (Base)
// Js engine mentally --> Is jagah par kaun-kaun se variables aur functions accessible honge
//  esi  ko lexical scope kehete hai 

// --> lexical environment me 2 cheezein hoti hain
// 1. Environment Record  (variables + functions)
// 2.Outer Lexical Environment ka reference (bahar wale scope ki link);


// 1️⃣

function outer() {
    let a = 10;

    function inner() {
        console.log(a);
    }
}

// * inner ka outer lexical Environment = outer 
// * Ye Decision run se pehle ho jata hain ;

// ⚠️ : Is stage par function call bhi nahi hua Sirf structure dekha gaya



// 2️⃣ 
// Execution Context
 outer();
// Har function call par:
// * Execution Context stack me hota hai
// * Lexical Environment heap me hota hai


// NOTE:

// So:
// * outer() ka apna lexical environment
// * inner() ka apna lexical environment

// ---> Ye environments heap memory me hote hain.

// 3️⃣

// Scope Chaining (search ka rule)

let x = 5;

function hello() {
    let y = 10;

    function inner() {
        let z = 20;
        console.log(x, y, z);
    }

    inner();
}

outer();


// --> JS ka search order:

// * inner ke environment me x? ❌
// * hello ke environment me x? ❌
// * Global environment me x? ✅

// Isi andar → bahar wali searching ko kehte hain 👉 Scope Chaining

// ⚠️ Important:
// Search kabhi reverse nahi hoti

// 4️⃣ 

// Ab Closure


function oute() {
    let count = 0;

    function inne() {
        count++;
        console.log(count);
    }

    return inne;
}

let fn = oute();


// step-by-step

// STEP 1: oute() call hua
// ->count = 0 oute ke lexical environment me store hua
// ->inne function bana
// ->inne ke saath ek hidden link laga:

// inne.[[Environment]] → oute ka Lexical Environment
// ⚠️ Ye link copy nahi hai, reference hai


// STEP 2: oute() return ho gaya
//-> Stack se oute() ka execution context hat gaya
// ❓ Normally memory delete honi chahiye thi
// ❗ Par nahi hui

// Reason:
// 👉 Kyunki inne abhi bhi oute ke lexical environment ko point kar raha hai
// Garbage Collector ka rule:
// Jab tak koi reference zinda hai, memory free nahi hogi



// STEP 3: fn() call hua

// JS  karta hai
// 1. count inne me dhundhta hai ❌
// 2. [[Environment]] follow karta hai
// 3. oute ke lexical environment me count milta hai
// 4. usi same variable ko update karta hai

// Isliye:
// 0 → 1 → 2 → 3



// 5️⃣  diagram

// Heap Memory:

// LexicalEnv_outer
// {
//   count: 2
// }

// inner function (fn)
//  └── [[Environment]] ──► LexicalEnv_outer


// Stack:
// fn() aata hai
// fn() chala jaata hai

// Heap:
// lexical environment abhi bhi alive;



// ❌ Ek bahut important galatfehmi todte hain
// ❌ Closure variable ki copy bana leta hai
// ❌ Closure value ko freeze kar deta hai

// ✅ Reality:
// Closure reference rakhta hai
// Variable heap me zinda rehta hai




// ----------------
// Lexical scope 
// ----------------

// --> lexical scope function mein banta hai jo inneer se outer ki or chalta hai 
//--> childer function apne parent function  ke variable ko use kar sakta hai but parent function 
//    apne childer function ka variable  nhi kar sakta  hai  use 
// --> yadi koi variable haam nested function mein use karna chata hai function us variable ko inner se
//    outer ki or dekhta chalta hai yadi nhi milta hai global mein dekhta hai yadi voha bhi nhi hai to
//    bolta hai variable not declaration 


function hello1 (){
    let a =50;
    function hell1(){
         function hell2(){
        console.log(a);
         
        }
        hell2()
     }
    hell1()
}
hello1() // 50
// --> haamne a to hello1 banya tha but console hell2 mein kiya to hell2 ko kese pata a kaha par hai 
//     to yaha lexical scoping huyi 


// -----------------------------------------------
// IIFE (immediately invoked function Expression)
// ----------------------------------------------

// --> ese function jisko banate hi sath mein call ya invoke karte hai 

// syntex 
//         (function(){
//          }),())


    // (function (){
    //     console.log("I am IIFE")
    // })();

// --> IIFE kyun use karte hain?
// 1️⃣ Global scope ko pollute hone se bachane ke liye.Global
// 2️⃣ Initialization code ke liye(Page load hote hi kaam karwana ho to best)
// 3️⃣ Data ko hide (encapsulation)

// --------------------------------------------------------
// Hoisting differences  between declaration and Expression 
// --------------------------------------------------------

// 1. normal(declaaration)function hoist hote hai (mtlab bana ke bad TDZ mein use kar sakte hai);
// 2. function expression or arrow function hoist nhi hote hai (mtlab bana ke bad use kar sakte bhai )

hoist() // I am hoist 
function hoist(){
     console.log("I am hoist")
    }

// not() not access (TDZ) 
let not =()=>{
console.log("hello i am not hoist")
}
not()// this good way 

// not_hoist() in (TDZ)
let not_hoist =function (){
console.log("hello i am not hoist")
}
not_hoist() // this is good way


