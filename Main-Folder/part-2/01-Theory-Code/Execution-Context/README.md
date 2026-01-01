# 🧠 Execution Context
- Execution Context = JS engine ka working room
Jahan JavaScript code execute hone se pehle prepare hota hai aur phir run hota hai.

## Simple line
- JS seedha code run nahi karta
- Pehle context banata hai
- Phir us context ke rules ke andar code chalata hai

---
<br>

# 🔥 In JavaScript EC 3 types 
- 1️⃣ Global Execution Context (GEC)
- 2️⃣ Function Execution Context (FEC)
- 3️⃣ Eval Execution Context (rare, ignore)
###  **NOTE : focus GEC+ FEC**


#
# GEC
- JS jasie hi file load hote hai (Sirf ek hi GEC hota hai poore program me )

### Inside GEC ?

- GEC ke 2 major parts hote hai
```js
 Global Execution Context
 │
 ├── Memory Creation Phase
 │
 └── Code Execution Phase
 ```

### Phase 1 : Memory creation phase(Hoisting phase)
- Is phase me code execute nahi hota, **sirf memory allocate hoti hai**

```js
var a = 10;
let b = 20;

function test() {
  console.log("hello");
};
```

### Momery phase mein 
```js
a → undefined
b → <uninitialized> (TDZ)
test → function() { ... }
```
###  ⚠️ Before Code Execution (Hoisting Effect)

```js 
a = 10;
b = 20;
test();
```Esliye
```js
console.log(a); // undefined
console.log(b); // ReferenceError
```


### Phase 2: Code Execution phase
- Ab code line-by-line execute hota hai.
```js 
a = 10;
b = 20;
test();
```
- Memory update hoti hai.
#
# FEC
- ➡️ Har function call par (Har function call = naya EC)

### Inside FEC ?
- Bilkul GEC jaisa structure:
```js
Function Execution Context
│
├── Memory Creation Phase
│
└── Code Execution Phase
```


### Example 
```js
var x = 1;

function outer() {
  let y = 2;

  function inner() {
    let z = 3;
    console.log(x, y, z);
  }

  inner();
}

outer();
```

### Step 1 :  GEC Banega
```js
x → undefined
outer → function
```
### Step 2 :  GEC execute
```js
x = 1 ;
outer() call
```

### Step 3 : outer() Call ->FEC(outer)
- outer() EC:
```js
y → undefined
inner → function
```
- Execution:
```js
y = 2
inner() call
```

### Step 4 : inner() call -> FEC(inner)
- inner EC:
```js
z = undefined
```
- Execution 
```js
z = 3
console.log(x, y, z)
```

#
# 🔗 Scope Chain + EC relation
- jab inner() me x mila 
### Search order
- 1 inner EC ❌
- 2 ouetr EC ❌
- 3 Global EC ✅

### Ye possible hai kyuki
- har EC ke pass hota hai 
```js 
[[OuterLexicalEnvironment]]
```
#
# 📦 Execution Context Stack (Call Stack)
- JS stack use karta hai contexts manage karne ke liye.
### Example 

```js 
function a() {
  b();
}

function b() {
  c();
}

function c() {
  console.log("Hi");
}

a();
``` 
- Stack flow 
```js
| c() |
| b() |
| a() |
| GEC |
```

### LIFO rule
- c() khatam → pop
- b() khatam → pop
- a() khatam → pop

# 
# 🔥 Closure + EC connection (important)
```js
function counter() {
  let count = 0;

  return function () {
    count++;
    console.log(count);
  };
}

let fn = counter();
```
- counter() ka EC stack se nikal gaya
- BUT uska Lexical Environment heap me zinda
- kyunki fn ke paas reference hai

### ➡️ Execution Context gaya, Lexical Environment bacha
- Execution Context dies, Lexical Environment survives (if referenced)
