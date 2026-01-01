// Prototypal inheritance -- >  Object se Object inherit karta hai;
//  Classical inheritance -- >  class se  Object inherit karta hai 

// Notes  js Object-based language hai ;



// 1. Prototypal inheritance;
// 👉 JavaScript me object, object se inherit karta hai

let tea ={
    Name :"Hot-Tea",
    Make :"water-Milk"
};

let Coffie = {
    naam :"Coffie-Cold",
    banaa:"Milk-Ice"
}

Object.setPrototypeOf(Coffie,tea);  // Prototype link banoo Coffie ka tea se ;

console.log(Coffie.Name);
console.log(Coffie.Make);
console.log(Coffie.banaa);
console.log(Coffie.naam);


// Full Logic -->
// 1️⃣ Pehle Coffie ke andar dekho
// 2️⃣ Nahi mila → tea ke andar dekho
// 3️⃣ Waha bhi nahi → Object.prototype me dekho
// 4️⃣ Waha bhi nahi → null → ruk jao (undefined)

// Bas. Ye poora logic hai.





// 2.  Classical inheritance
// 👉 Class sirf object banane ka factory + prototype setup hai
// 👉 Under the hood sab kuch prototype hi hota hai


class Person {
    constructor(name){
        this.Name = name;
    }
    User(){
        console.log(`Hello : ${this.Name}`)
    }
};

let P1 = new Person("Subhash-Mandal");  
  P1.User();  // but p1 par User function to tha nhi  ye classical inheritance se aya;

let P2 =  new Person("Aman-Kumar");
P2.User()

// ---> behind the seen

// JavaScript internally ye karta hai:

// 1️⃣ new keyword Empty object banata hai
// 2️⃣ Us object ka __proto__ set karta jis class se vo bana hai  hai:

// p1.__proto__ === Person.prototype // true

// 3️⃣ constructor call karta hai
// 4️⃣ this = p1


// Multiple objects, same prototype
// Reason:
// ek hi function memory me
// sab objects share kar rahe hain

let check = P2.User === P1.User;
console.log(check);