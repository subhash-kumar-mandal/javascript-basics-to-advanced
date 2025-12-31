// ------------
// Loop all 
// ------------
// ---> repeat hone vole kaam ke liye loops ka use karte hai
// --->  asli kaam hai loop ka baar baar hone vole kaam ko loop se karna 


// for-loop --> 1. tab lagta hai ->kaha se start karna hai 
//              2. kaha tak jana hai 
//              3. kaise jana hai 


// while  -> simpe jab pata  nhi hai kaam kitna karna hai jab tak karo 
//          vo condition true hai 





// example 

// for ( start; end(condition);change(increment)) {
//      wirte code
// }

// print 1 to 100;

// solve 
// ab pata hai start 1 se hai 
// end hai 100;
// or change ho rha hai 1 plus se

for(let i=1;i<101;i++){
 console.log(i) // kabi ko varibale ki tara pass karna hai string ka "i" nhi
}



// while-loop
// while (condition) { condition jab tak true hai kaam ko karte raho
    // write code here 
// }
// while ka ek fanda hai updation ko khud handal karna karta hai 


// print 1 to 100
let i =1 // yaha hamne khud ek start point banaya hai 

while(i<101){ // ab ye code jab tak chalega jab tak i ki value 101 se badi nhi hoti hai
    console.log(i); // print
 i++ // haamne khud handal kiya hai or i ko haar bar 1 se plus karte hai jese hi i 101 se bada hoga loop band ho jyega

    
}
console.log(i);// 101


// do-while 
// -ye pura same hai while loop jesa hi but yadi condition hi false hai tabi ek baar chalega

// do {
//     ye code jo false hone par bhi ek bar chalega
// } while (condition);
let j =12
do {
    console.log("hello world")
} while (j<2);


// --> breat : keyword kaa kaam hai current loop jis ke under break likha hai to us ko rok dena
// --> continue :ka kaam hai yadi condition true ho gyi to us loop ko skip karna or uske niche kita bhi code chor deta hai


let num =1

while(num<10){
    if(num==7) { // yadi jese hi num 7 ho jata hai to loop ko rok do
        break;
    }
    console.log(num)
    num++
}
// --> bass ab 1,2,3,4,5,6 bass print honge or num ki value 7 hogi

let num1 =1;
while(num1<7){
    if(num1==4){
        num1++;// ye karna jaruri hai varna loop Infinity loop mein chala jyega or num1 ki value hamesha 4 rehe jyegi yadi increment nhi kare to
        continue;// yaha continue hoga or 4 print nhi hoga or jab num1 4 hoga to console part ko bhi skip kar dega

    }
    console.log(num1)
    num1++
}