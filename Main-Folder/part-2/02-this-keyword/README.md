#  🧠 this keyword  (deepdive)
 ### sabse pehli GOLD baat
-  this koi variable nhi 
- this ek runtime binding hai. (function **CALL**  hone ka tareeka decide karta hai this )
#
## 1️⃣ Global scope mein this ?
- jo chezz sab jagah se accessible ho 

###  js jab run hota hai 
-  ek GEC banata hai 
- jahan sabse  uper ka code rehta hai
- Browers me uska owner hota hai 
### esliye
-  Global scope mein **this** === global object

```js 
Browser me → window
Node.js me → module.exports (empty object by default)

// Kyunki technically:
//   --> Node me this !== global
//   --> this === module.exports
```
### example 
```js
console.log(this)
```
- output 
```js
window
```
# 
##  2️⃣ Object Method mein this ?

### Concept 
- jab function object ke ander hota hai 
- aur object ke through call hota hai 
```js
object.method()
```
- to this = object 
### kyu?
- kyuki object bol rha hai 
- **'mein ye function chala raha hoon'**
### example 
```js
const user = {
  name: "Subhash",
  greet() {
    console.log(this.name);
  }
};

user.greet();
```
- Output
```js
Subhash
```
- 👉 this = user


### **⚠️ Important breakdown**
```js
const fn = user.greet;
fn();
```
- Output 
```js
undefined
```
### kyu?
- ab call ho raha hai  : fn()
- object gayab **(kyuki fn ke under haamne method ko store kiya to method ne apne link lose kar diye)**
- direct call
- this  wapas global ban gya 

#
## 3️⃣ Strict mode  mein this ?
###  1️⃣ Normal Function (Non-Strict Mode)
### concept
- kisi object ke through function call nhi hua 
- normal tareeke se  function call hua

```js
function()
```
### 👉 to default rule lagta hai:
- this = global object (browser me window)
### Code 
```js
function show() {
  console.log(this);
}

show();
```

- Output
```js
window
```

### 2️⃣ Strict Mode Function ("use strict")
### 👉 Strict mode ne ek cheez fix ki:  (bahut important)
- Galti se global pollution band
### Esliye
- normal function call par
- this ko forcefully undefined kar diya
### KYU?
- taaki accidental bugs na ho
- taaki dev clearly bole: **“mujhe kis object ka this chahiye”**

```js
"use strict";

function show() {
  console.log(this);
}

show();
```
- Output
```js 
undefined
```
### 👉 strict mode = no default global this
#
## 4️⃣ Constructor Function (new ke sath)
### Concept (deep but simple)
Jab tum new lagate ho:
- JS ek naya empty object banata hai
- us object ko this bana deta hai
- function ke andar ka this us naye object ko point karta hai
### Flow
-  {} create hota hai
- this = {}
- properties attach hoti hain
- object return hota hai

### Code
```js
function User(name) {
  this.name = name;
}

const u1 = new User("Subhash");
console.log(u1.name);
```
- Output 
```js
Subhash
```
### 👉 this = newly created object
#
## 5️⃣ Event Handler me this?
### 🔹 Concept (browser)
Jab koi event hota hai:
- browser bolta hai:
- **“jis element par event laga hai, wahi owner hai”**
- event handler me this = HTML element

### Code
```js 
<button onclick="handleClick()">Click</button>

<script>
  function handleClick() {
    console.log(this);
  }
</script>
```
- Output 
```js 
<button>Click</button>
```
### 👉 this = element jis par click hua

#
## 6️⃣ Arrow fuction mein this Keyword ?

### sabse pehli GOLD line
- Arrow function ka apna this nahi hota
- Arrow function this ko copy karta hai apne parent scope se 

👉Isko bolte hain : lexical this

###  1️⃣  Aroow function ky alag hai ?
- kabhi naya this nahi banata
- jo this bahar **(parent) me tha wahi andar use karta hai**

👉 Arrow function bolta hai:
- **“mujhe apna this nahi chahiye, jo bahar hai wahi le lo”**

###  2️⃣ Object ke andar arrow function this ?
Jab arrow function object ke andar hota hai:
- wo object ko parent nahi maanta
- parent hota hai outer scope
### arrow function ka this = object ❌

### code :
```js 
const user = {
  name: "Subhash",
  greet: () => {
    console.log(this.name);
  }
};

user.greet(); 
```
- Output 
```js
undefined
```
### KYU ?
- greet arrow function hai
- arrow function apna this nahi banata
- parent scope = global
- global this.name = undefined

👉 object yahan parent hi nahi hai

### 3️⃣ Arrow function + normal function inside object this?

### Agar tum chahte ho:
- object ka this mile
- aur arrow ka benefit bhi

👉 normal function bahar, arrow andar

### Code :
```js
const user = {
  name: "Subhash",
  greet() {
    const inner = () => {
      console.log(this.name);
    };
    inner();
  }
};

user.greet();
```
- Output 
```js
Subhash
```
### KYU kaam kiya?
- greet() → normal function
- this = user
- inner() → arrow function
- arrow ne parent ka this copy kar liya

👉 ye hi arrow function ka correct use hai


### 4️⃣ Arrow function me ye sab kabhi nahi hota
- ❌ this
- ❌ arguments
- ❌ new (constructor nahi ban sakta)
- ❌ call / apply / bind se this change nahi hota

👉 ye sab design decision hai



