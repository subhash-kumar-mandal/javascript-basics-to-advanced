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



