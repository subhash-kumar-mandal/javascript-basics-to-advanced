# Private counter and Encapsulation
<br>

##  1️⃣ Private Counter - Mtlab 
- Ek aisa counter jiska number bahar se directly dikhai ya change na ho,
sirf ek fixed tareeke se hi badhe ya ghate.

### Simple logic 
- value hidden hoti hai
- direct access ❌
- controlled access ✅

### Example 
```js 
function createCounter() {
  let count = 0; // 🔒 private variable

  return function () {
    count++;
    return count;
  };
}

const counter = createCounter();

counter(); // 1
counter(); // 2
counter(); // 3
```
### Yaha kya hua ?
- Counter outer function ke scope me hai 
- # Bahar se :
```js 
console.log(count); // ❌ access nahi
```
- sirf returned function hi count ko read/update kar sakta hai

👉 Ye hi Private Counter use case hai.


#
# 

## 2️⃣ Encapsulation — matlab
- Data aur us par kaam karne wale methods ko ek boundary ke andar band kar dena,
taaki koi bhi bahar se data ko directly chhed na sake.

### Simple logic :
- data hide karo
- sirf allowed operations do
- rules ke bina access ❌

### JavaScript example (Encapsulation with Closure)

```js
function createAccount() {
  let balance = 1000; // 🔒 private data

  return {
    deposit(amount) {
      balance += amount;
      return balance;
    },
    withdraw(amount) {
      if (amount > balance) return "Insufficient balance";
      balance -= amount;
      return balance;
    }
  };
}

const account = createAccount();

account.deposit(500);   // 1500
account.withdraw(300);  // 1200

```
- # Yahan kya achieve hua? :
- balance direct accessible nahi
- sirf defined methods ke through access
- rules enforce ho rahe hain
## 👉 Ye hi Encapsulation hai.
# 📌 NOTE: 
- ### Encapsulation JavaScript me closures ki wajah se possible hota hai, kyunki variables private lexical scope me rehte hain.

