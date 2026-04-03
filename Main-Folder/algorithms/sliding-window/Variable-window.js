// ---------------
// Variable window 
// ---------------



// sliding window means window ko slide karna to hai  but haam ko window ko condition ke hisab se choti bhi karna hai 
//   sliding === subarray


//  Core Rule
// 1.  Window Expend karna --->  Mtlb window ko bada karna 
// 2.  window ko shrink karna ---> Mtlab window ko chota karna 
// 3.  Vaild window ko save karna ---> Mtlab Window jese Condition mein vaild ho jye same karna ko 
// 4.  Yahi repeat karo



// Exmp   arra =   [1,2,1,0,1,1,0]   , k = 4
//  question ---> Longest Subarray find karo jo jiska sum k se kam ya k ke Barabar hoo
// ----->   SUM ≤ K

// step 1   [1]          , sum-1   1 ≤ 4   (yes Length Store karo) // length -- > 1
// step 2   [1,2]        , sum-3   3 ≤ 4   (yes Length Store karo) // length -- > 2
// step 3   [1,2,1]      , sum-4   4 ≤ 4   (yes Length Store karo) // length -- > 3
// step 4   [1,2,1,0]    , sum-4   4 ≤ 4   (yes Length Store karo) // length -- > 4
// step 5   [1,2,1,0,1]  , sum-5   4 ≤ 4   (No sum Jada ho gya Condition se PHele Window Vaild karuga tab length ki kaluga) // 

// Ab  Sum bad hua k se to window ko haam left se shirk karege 

//         Sum-=arra[left];
//          sum =    5 -1
//          4
//  ab sum  Phir se 4 ho gya window valid ho gya Ab LENGTH ------> 4
//    Window Ye hai Ab ===>   [2,1,0,1]

// step 6   [2,1,0,1,1]  , sum-5   5 ≤ 4   (No sum Jada ho gya Condition se PHele Window Vaild karuga tab length ki kaluga) // 

// Ab  Sum bad hua k se to window ko haam left se shirk karege 

//         Sum-=arra[left];
//          sum =    5 -1
//          4
//  ab sum  Phir se 4 ho gya window valid ho gya Ab LENGTH ------> 4
//    Window Ye hai Ab ===>   [1,0,1,1]

// step 4   [1,0,1,1,0]    , sum-4   4 ≤ 4   (yes Length Store karo) // length -- > 5



// =============> Last Result => 5




function Longest_subarray(array, k) {


    let right = 0;
    let left = 0;
    let sum = 0;
    let max_length = 0;


    for (right; right < array.length; right++) {
        sum += array[right];

        while (sum > k) {
            sum -= array[left];
            left++;
        }

        if (sum <= k) {
            let find_length = right - left + 1;
            max_length = Math.max(max_length, find_length)
        }
    };

    return max_length;

}

console.log(Longest_subarray([1, 2, 1, 0, 1, 1, 0], 4)) // 5 result





// question 1  Longest  subarray with at  most k zeros

function Longest_subarray_zeros(array, k) {

    let left = 0
    let right = 0;
    let sum = 0;
    let Zerocount = 0;
    let max_length = 0

    for (right; right < array.length; right++) {
        sum += array[right];

        if (array[right] === 0) {
            Zerocount++
        }

        while (Zerocount > k) {
            sum -= array[left];
            if (array[left] === 0) Zerocount--;

            left++
        }

        let find_length = right - left + 1;
        max_length = Math.max(find_length, max_length)

    }
    return max_length;
}


console.log("Longest length", Longest_subarray_zeros([1, 0, 1, 1, 0, 1, 0], 2))


// question 2 Longest substring with at most k distinct characters

// "abccbaac", k = 2



function Longest_subarray_k_distinct(array, k) {
    let str ='';
    let left = 0
    let right = 0;
    const map = new Map()
    let max_length = 0

    for (right; right < array.length; right++) {

        map.set(array[right], (map.get(array[right]) || 0) + 1);

        while (map.size > k) {
            map.set(array[left], map.get(array[left]) - 1);
            if (map.get(array[left]) === 0) map.delete(array[left]);

            left++
        };
        if (right - left + 1 > max_length) {
            max_length = right - left + 1
            str = array.slice(left, right + 1)
        }

        // max_length = right - left + 1 > max_length ? right - left + 1 : max_length;

    }
    // console.log(right - left + 1)
    return {
        max_length,
        str};
}


console.log(Longest_subarray_k_distinct('abccbaac', 2));


// 3 question  Longest substring without repeating character 

// --->abcabcbb

function Longest_subarray_Without_repeating(array) {
    let str = ''
    let left = 0
    let right = 0;
    const map = new Map()
    let max_length = 0

    for (right; right < array.length; right++) {

        while (map.has(array[right])) {
            map.set(array[left], map.get(array[left]) - 1);
            if (map.get(array[left]) === 0) map.delete(array[left]);

            left++
        };

        map.set(array[right], (map.get(array[right]) || 0) + 1);

        if (right - left + 1 > max_length) {
            max_length = right - left + 1
            str = array.slice(left, right + 1)
        }
        // max_length = right - left + 1 > max_length ? right - left + 1 : max_length;

    }

    return {
        max_length,
        str
    };
}


console.log(Longest_subarray_Without_repeating('abcabcbb'))






// 4 question Longest substring  with at most k distinct 
// --- > eceba
// --  > k-2

function Allcount_subarray_k_distinct(array, k) {

    let left = 0
    const map = new Map()
    let count = 0

    for (let right = 0; right < array.length; right++) {
        map.set(array[right], (map.get(array[right]) || 0) + 1);

        while (map.size > k) {
            map.set(array[left], map.get(array[left]) - 1);
            if (map.get(array[left]) === 0) {
                map.delete(array[left]);
            }
            left++
        };

        count += (right - left + 1)


    }
    return count
}


console.log(Allcount_subarray_k_distinct('aaabbcc', 2));



// 5 question  analytics
//   [ 10,20,30,40,50,10,20]
//   k-- > 3


function Find(arr, k) {
    let max = 0;
    let find = [];

    for (let i = 0; i <= arr.length - k; i++) {
        let sum = 0;
        const arra = [];
        for (let j = i; j < i + k; j++) {
            sum += arr[j];
            arra.push(arr[j]);
        }
        if (sum > max) {
            max = sum;
            find = arra
        }

    }
    return {
        max, find
    }
};

console.log(Find([10, 20, 30, 40, 50, 10, 20], 3));


//  question 6 server Monitoriy 
// [1,1,0,1,0,1,1,1]


console.log('Longest_subarray_zeros --->', Longest_subarray_zeros([1, 1, 0, 1, 0, 1, 1, 0, 1], 2));



// question  7 (security/text)
// pwwkew

console.log(Longest_subarray_Without_repeating('pwwkew'));


// question  7 thoda twist
//  eceba ---> k-2

console.log(Longest_subarray_k_distinct('eceba',2));
