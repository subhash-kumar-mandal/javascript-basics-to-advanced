// constructor function ;

// 1.constructor function vo banda hai jisko follow kar ke dusre object bante hai 
//   uske same property ko le kar .
// ex  -> ek biscuit ki banane ki machine hai or us machine mein jo bhi item aate hai 
//     last mein ek biscuit ka shape lete kyuki vo machine biscuits banata hai 
//     to us machine se banane vole jitne bhi biscuits honge unka shape or 
//     property same hogi.

// NOTES == > new keyword means emty Object

function CreateBiscuit (category,company,name,price,quntity,color){
              this.name  = name,
              this.price =price,
              this.category =category,
              this.company= company,
              this.quntity=quntity,
              this.color =color
             
             };

let b1 = new CreateBiscuit("Chochalete","Parle","KitKat",30,1000,"red");
let b2 = new CreateBiscuit("Chochalete","Dariymilk","BubbleOreo",70,1500,"#000000");

console.log(b1);
console.log(b2);


// --------------------------
// Prototype hota kya hai? (simple)
// --------------------------

//Prototype ek common object hota hai
//jahan shared methods rakhe jaate hain

function CreateBiscuit1 (category,company,name,price,quntity,color){
              this.name  = name,
              this.price =price,
              this.category =category,
              this.company= company,
              this.quntity=quntity,
              this.color =color
             
             };
CreateBiscuit1.prototype.Delete = function(){
    let div = document.querySelectorAll('div');
    //  console.log(this.color)
    div.forEach((Element)=>{
       if(Element.style.color == this.color){
     Element.remove()
       }
        
    })
}
CreateBiscuit1.prototype.add = function(){
    let div = document.createElement('div');
       div.innerText = ` company name ${this.company} and price ${this.price} Product ${this.name}`
      div.style.color = `${this.color}`;
      document.querySelector('body').append(div);
    }


let A1 = new CreateBiscuit1("Chochalete","Parle","KitKat",30,1000,"red");
let A2 = new CreateBiscuit1("Chochalete","Dariymilk","BubbleOreo",70,1500,"#000000");


console.log(A1,A2);

