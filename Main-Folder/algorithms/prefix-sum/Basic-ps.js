// ---------------
// 🎯 Prefix Sum
// ---------------


// core idea ---> har index par → left se lekar yahan tak ka total sum



// 📦 Example

// arr = [2, 4, 1, 3]


// [2, 6, 7, 10]

// --> 2
// --> 2+4 = 6
// --> 6+1 = 7
// --> 7+3 = 10




// Why Use Prefix Sum?
//   * Normal loop O(n)
//   * Prefix sum O(1)





// Formula:   sum(L,R) = ps[R] − ps[L-1]
//  * edge case : L = 0 → ps[R]
// --> Rang mein left index se right index tak ka sum btaoo 



// ✅ Build Function

function BuildPrefixSum(arra) {
    let ps = [];
    ps[0] = arra[0];  // first element add 

    for (let i = 1; i < arra.length; i++) {
        ps[i] = ps[i - 1] + arra[i];
    };
    return ps;
};


// ✅ Range Sum Query

function RangeSum(ps, L, R) {

    if (L < 0 || R >= ps.length || L > R) {
        throw new Error("Invalid Range Input");
    };

    if (L === 0) return ps[R];

    return ps[R] - ps[L - 1];
};

// ⚠️ Validation Key Points
//  * Array empty → handle
//  * L < 0 → invalid
//  * R >= n → invalid
//  * L > R → invalid


let arra = [2, 4, 1, 3];
let ps = BuildPrefixSum(arra);
console.log(ps);

console.log(RangeSum(ps,1,3))
console.log(RangeSum(ps,0,0)) 
console.log(RangeSum(ps,0,3)) 
console.log(RangeSum(ps,2,2)) 



