// --------------------------
// Subarray problem (prefixsum + (hasmap+set))
// --------------------------



//  🎯 1️⃣ Subarray Sum = K (Count How Many)
// Given array + k
// count how many subarrays have sum = k

 
// Brute force 
//   *Time = O(n²)
//   *Space = O(1)


// Prefixsum+hasmap
//   *Time = O(n)
//   *Space = O(n)



// Code — Brute Force


function countSubarraySumK_bruteforce(arr, k) {
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    let sum = 0;

    for (let j = i; j < arr.length; j++) {
      sum += arr[j];

      if (sum === k) {
        count++;
      }
    }
  }

  return count;
};

console.log(countSubarraySumK_bruteforce([1,1,2,3,4,5],3))



// Prefix Sum + HashMap (Optimized)

// keypoints
//   *Running  sum chaloo 
//   *Need  -> sum -k 
//   *Need pehle kitni  baar aaya -->  utne subarrays
//   *Kya phele aaya tha 
//   *map stores -> prefixSum -> frequency
//   *Ager hai -->  utne subarray mil gye 
//   *count first, map update later
//   *Hashmap use hota  hai (sum ki frequency store)


//  Dynamic 
//   * har index pe decide karna 
//   * check karna padta
//   * Map look hota 
//   * Count accumulate hota hai 


function countSubarraySumK_PrefixSum(arra,k){

    let map = new Map(); // frq store 
    let sum = 0;      // har step par sum plus
    let count =0;     //   count kitne mile 

    map.set(0,1);

    for(let item of arra){
        sum += item;

        let need = sum -k;

        if(map.has(need)){
            count+=map.get(need);
        };

        map.set(sum,((map.get(sum)||0)+1)); // not index store , store frq  
    };

    return count;

};

console.log(countSubarraySumK_PrefixSum([1,1,2,3,4,5],3));
console.log(countSubarraySumK_PrefixSum([1,2,1,2],3));








// 🎯 2️⃣ Zero Sum Subarray Exists
// Zero sum subarray exists
// Check out --> koi Continouns Subarray  ka sum = 0 ? 
// return true / false



// Code — Brute Force

function hasZeroSum_bruteforce(arr) {
  for (let i = 0; i < arr.length; i++) {
    let sum = 0;

    for (let j = i; j < arr.length; j++) {
      sum += arr[j];

      if (sum === 0) {
        return true;
      }
    }
  }

  return false;
}

// Brute force 
//   *Time = O(n²)
//   *Space = O(1)




// Prefix Sum + Sets (Optimized)

// keypoints
//   *Runing sum repeat --> Zero  sum Subarray mil gya
//   *Map ya sets use kar sakte hai lookup ke liye
//   *yadi sum Zero hua ya Sum repeat hua to mil gya  
//   *Zero sum --> Detection



function ZeroSubarray_Exist(arra){
    let set = new Set();
    let sum =0;

    set.add(0);

    for(let item of arra ){
        sum+=item;

        if(set.has(sum)){
            return true
        };

        set.add(sum)
    };
    return false;
};

console.log(ZeroSubarray_Exist([4,-1,2]))



// Prefixsum+Sets
//   *Time = O(n)
//   *Space = O(n)







// 🎯 3️⃣ Longest Subarray Sum = K
// array + k
// find longest length subarray jiska sum = k
// Return → max length


// Code — Brute Force

function longestSubarrayK_bruteforce(arr, k) {
  let maxLen = 0;

  for (let i = 0; i < arr.length; i++) {
    let sum = 0;

    for (let j = i; j < arr.length; j++) {
      sum += arr[j];

      if (sum === k) {
        maxLen = Math.max(maxLen, j - i + 1);
      }
    }
  }

  return maxLen;
}




// Optimized (Prefix + Map Index)

// keypoints
//   *Ab count nhi chahiye ab length chahiye to index ko lookup karna hai 
//   *Runing sum --> chaloo
//   *map me first occurrence index  store karo 
//   *map.set(0,-1)  Base case
//   *Agar  Runing sum -K map mein hai
//           * Length nikalo
//           * Max Update karo
//   *Current runing sum ager map mein nhi hai 
//         *Tabhi store karo (first time Only)



function longestSubarrayK_opt(arra,k){
    let map = new Map();
    let sum =0;
    let length =0;

    map.set(0,-1) // Base Case 


    for(let i=0;i<arra.length;i++){
        sum+=arra[i];

        let need = sum -k;

        if(map.has(need)){
            let len = i - map.get(need);
            length = len>length?len:length; 
        };

      // Only First  Occurrrence Only
        if(!map.has(sum)){
            map.set(sum,i)
        };
    }

    return length;

};

