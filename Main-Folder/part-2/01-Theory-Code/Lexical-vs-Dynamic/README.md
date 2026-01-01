# 🔑 Lexical Scope vs Dynamic Scope

### 1️⃣ Lexical Scope (JavaScript follow karta hai ✅)
### Meaning:
- Scope code likhne ke time decide hota hai.
- 👉 Function jahan define hua hai, wahi se decide hota hai ki wo kaun-kaun se variables access kar sakta hai.

### Example 
```js 
let a = 10;

function printA() {
  console.log(a);
}

function test() {
  let a = 20;
  printA();
}

test();
```
### Output 
```js 
10
```
### why?
- printA() global scope me define hua hai,
- isliye wo global a hi use karega.

#
#

### 2️⃣ Dynamic Scope (JavaScript me nahi hota ❌)

### Meaning:
- Scope function call ke time decide hota hai
- 👉 Function kahan se call hua, us scope ke variables use karta
### Agar JS dynamic scope follow karta (hypothetical)
- Upar wale code ka output hota:
```js 
20 
```
-  ### Kyuki printA() ko test() ke andar se call kiya gaya.

#

# 🔥 Closure relation (important)

- ### Lexical scope → Closure possible

- ###  Dynamic scope → Closure break ho jaata
