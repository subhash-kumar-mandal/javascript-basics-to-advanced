// // ==> Object 
// // Object मतलब एक ही जगह पर कई values को नाम देकर रखना।
// // Array में values बिना नाम के होती हैं, लेकिन Object में हर value का एक नाम होता है, जिसे key कहते हैं।


// const student = {
//   name: "Subhash",
//   age: 20,
//   course: "Web Dev"
// };

// // यहाँ:
// // name, age, course → keys
// // "Subhash", 20, "Web Dev" → values


// // जब हमें एक इंसान, एक product, एक car, एक course का पूरा data एक ही जगह store करना हो।
// // Array ऐसा नहीं कर सकती, क्योंकि array बस values की list है, नाम नहीं।

// // ==> access object 

const student1 = {
  name: "aman",
  age: 20,
  course: "Web Dev"
};

// // Dot vs bracket

// // dot noation (सबसे आसान)
console.log(student1.name) // mtlab student1 mein jao or name key ki value do ;

// //  bracket notation 
// // Bracket notation तब काम आता है जब:
// // key dynamic हो
// // key में space हो
// // key variable में store हो

console.log(student1["name"]) //mtlab student1 mein jao or name ki key do ;
// // keys string ki from mein hoti hai

// // Example with dynamic:
let number = "%";
student1[number] = "modulas" // mtlab number ki jo value hai usko key bana do or modulas ko key ki value do; 
console.log(student1)

//{ name: 'aman',
//  age: 20,
//  course: 'Web Dev',
//  '%': 'modulas' }

// // 1.add new key add karna 
// // 2. Object ki value updated karna 
// // 3. key ko delete karna 

const user = {
  name: "Subhash",
  city: "Delhi",
  pincode: 110012
};

user.gender = "male" // mtlab user mein new key gender add karo 
console.log(user);
// //{ name: 'Subhash',
// //  city: 'Delhi',
// //  pincode: 110012,
// //  gender: 'male' } ==> here add new key


user.pincode = 110094; // mtlab user mein jao pincode key value change karo
console.log(user);
// // { name: 'Subhash',
// //  city: 'Delhi',
// //  pincode: 110094, // updated pincode 110012 to 110094
// //  gender: 'male' }



delete user.city //delete karo city key ko;
console.log(user)
// {name: 'Subhash',
//  pincode: 110094,
//  gender: 'male' }



// // Nested  , deep Access 
// // nested => ek hi object ke under or bhi indside object 
// // deep access haam dot notation kar sakte jitna deep jana hai dot ka use karo


const data = {
  user: {
    profile: {
      details: {
        name: "Subhash",
        age: 20,
        location: {
          city: "Delhi",
          area: "Rohini"
        }
      }
    }
  }
};

// // yadi name chahiye to 
console.log(data.user.profile.details.name);
console.log(data['user']['profile']['details']['name'])

// // yadi city chahiye to 
console.log(data.user.profile.details.location.city)
console.log(data['user']['profile']['details']['location']['city'])


// ==> Destructuring
// "Object या array के अंदर की values को जल्दी और छोटा करके अलग-अलग variables में निकाल लेना।"

const hello = {
  name: "Subhash",
  address: {
    city: "Delhi",
    pin: 110011
  }
};

let {address:{city,pin}} =hello // HELLO MEIN JAO OR  ADDRESS SE CITY OR PIN NIKAL LO
console.log(city,pin);




const data1 = {
  user: {
    profile: {
      details: {
        name1: "Subhash",
        age1: 20,
        location: {
          city1: "Delhi",
          area1: "Rohini"
        }
      }
    }
  }
};



const {user:{profile:{details:{name1,age1,location:{city1,area1}}}}} =data1
console.log(name1);
console.log(age1);
console.log(city1);
console.log(area1)




// ==>Looping or Object

const person = {
  name: "Subhash",
  age: 20,
  city: "Delhi"
};

// Object.keys()
let  keys = Object.keys(person) // object ki key ki ek arrays return karta hai stringki from mein
console.log(keys);//[ 'name', 'age', 'city' ]

// Object.values;
let val = Object.values(person);//object ki key  ki haar ek value ko  ek arrays return karta hai stringki from mein
console.log(val) // [ 'Subhash', 20, 'Delhi' ]


//
let matrix = Object.entries(person); // ye ek 2d array bana deta hai ya pair key- value ko sath mein ek array retrun karta hai
console.log(matrix) 

//    [ 
//  [ 'name', 'Subhash' ],
//  [ 'age', 20 ],
//  [ 'city', 'Delhi' ] 
//                  ]



// for-in looping 
for(let keys in person){
  // console.log(keys) // mtlab haar ek key ko print karo bari bari
  // console.log(person[keys])// mtlab haar ek key ki value ko print karo bari bari
  console.log(keys+" : "+person[keys])
}

//One step next level for-of loop lagna 

for(let [key,value] of Object.entries(person)){
  console.log(`key --> ${key} and key value --> ${value}`)
}



// ==> Optional chaining 

// अगर object के अंदर कोई property missing हो, तो error मत दो… बस undefined return कर दो।
// ❌ Error मत फेंको
// ✔ Safe output दो (undefined)
// इसी के लिए ?. operator use होता है |



const user2 = {};
 // normal use
// console.log(user2.address.city); // ❌ error
// TypeError: Cannot read properties of undefined (reading 'city');

//  Optional chaining
console.log(user2.address?.city); // undefined

// NOTES : Optional chaining हमेशा left side को check करता है 

//  user.address?.city
//  * मतलब:
// 1.पहले check करो "address exist करता है?"
// 2.अगर है = आगे बढ़ो
// 3.अगर नहीं है = city को access मत करो, सीधे undefined दे दो



// ==> 
//   Computed property मतलब:
// Object की key को variable की value से बनाना।

const obj = {
  name: "Subhash"
};
// यहाँ name key है, fixed है.



// Square brackets में variable का नाम:
let key1 = "age";

const user10 = {
  [key1]: 20
};
// यहाँ key की value “age” थी, इसलिए object key भी “age” बनी।
console.log(user10);
