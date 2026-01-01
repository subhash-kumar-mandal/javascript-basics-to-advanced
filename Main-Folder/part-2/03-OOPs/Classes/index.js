// Classes --> Class ek design / blueprint hoti hai (jisse hum objects banate hain).
//             Class khud real cheez nahi hoti, wo bas batati hai ki object kaisa hoga.

// --> constructor --> ek function hota hai jo object bante hi run hota hai 
// --> new  -> ek emty object create karta hai. 
//  
class Carproterty {
    constructor(name, Brand, Price, Averge, Owener) {
        this.name = name;
        this.Brand = Brand;
        this.Price = Price;
        this.Averge = Averge;
        this.Owener = Owener;

    }
    Dte() {
        console.log(`CompanyName : ${this.name}`);
        console.log(`BrandName : ${this.Brand}`);
        console.log(`VehicleAverge : ${this.Averge}KM`);
        console.log(`CarOwener : ${this.Owener}`);
        console.log(`CarPrice : ${this.Price}Cr`);
    };

    Start() {
        console.log(` ${this.Owener} Your Car is Start : ${this.name}`);
    }
};

let car1 = new Carproterty("LeFerrari", "Ferrari", 50, 10, "Guddu");


// Inheritance ke 2 tool hai ;
//   1. Extends --> relation banta hai ;
//   2. super --> parent ko call karta hai ;
//   3. super.method() --> method ke method ko call karta hai 

// Notes-->  extends karne se Mothed bhi inheritance ho jata hai .

class Cake {
    constructor(color,price,flavor){
        this.CakeColor =color;
        this.CakePrice =price;
        this.Cakefl =flavor;
    };
};

class Cake1 extends Cake{        // Cake1 ka realation bano  Cake naam ki class se 
  
    constructor(){
        super("Black-White",1500,"Milk-Cake")        //  Parent class ke constructor ko call karo  inherit karo ;
    }
}


let cake1 = new Cake1();
console.log(cake1)




// #encapsulation --> data ko band karke rakhna + controlled access dena;
//               👉 “Jo cheez bahar se chhedni nahi chahiye, use chhupa do.”
// -->  # ko variable aage laga do classes mein vo bhar se acesse nhi hoga 

// 1. # variable ko bhar se access rokta hai 
// 2. Property private ho jaati hai 
// 3. class ke bhar se Touch nhi kiya jaa sakta hai 
// 4. class ke ander freely chnage ho sakti hai (method ke through);


class UserBank {
    #Balance = 0;
    constructor(UserName) {
        this.name = UserName;

    };
    Remove(money) {
        if (this.#Balance > money) {
            this.#Balance = this.#Balance - money;
            return (`After Deposite Your Balance : ${this.#Balance}`);
        } else {
            return(`${this.name} Your Balance to Low : ${this.#Balance}`);
        }
    };
    AddMoney(money) {
         let money1 = this.#Balance;
        this.#Balance = this.#Balance + money;
        return (`Before Balance : ${money1} And After your Corrent Balance : ${this.#Balance}`);
    }
}

let u1 = new UserBank("Subhash");

