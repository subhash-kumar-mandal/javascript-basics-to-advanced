// ----------------------------
// First Occurrence --key Point  (with bs)
// ---------------------------

// Normal bianary serach:
//  --> match return 


// First Occurrence 
//    1. match  -- > store karo
//    2. left move karo  
//    3. phir se match karo ---> mile to store karo
//    4. repeat karo bar bar 



function firstOcc(arra, tar) {
    let start = 0;
    let end = arra.length - 1;
    let fs = -1;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);

        if (arra[mid] == tar) {
            fs = mid;
            end = mid - 1;
        }
        else if (arra[mid] < tar) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }

    return fs;
};


console.log(firstOcc([2, 4, 4, 4, 6, 8], 4))
console.log(firstOcc([1, 2, 3, 4], 3))
console.log(firstOcc([1, 1, 1, 1], 1))
console.log(firstOcc([1, 2, 3], 9))




// ----------------------------
// Last Occurrence --key Point  (with bs)
// ---------------------------




// First Occurrence  key points
//    1. target ka sabse last  index chahiye
//    2. duplicates ho sakte hain 
//    3. rightmost position return
//    4. match  -- > store karo
//    5. right move karo  
//    6. phir se match karo ---> mile to store karo
//    7. repeat karo bar bar 


function lastOcc(arra, tar) {
    let start = 0;
    let end = arra.length - 1
    let ans = -1
    while (start <= end) {
        const mid = Math.floor((start + end) / 2);

        if (arra[mid] === tar) {
            ans = mid;
            start = mid + 1;
        } else if (arra[mid] < tar) {
            start = mid + 1;
        } else {
            end = mid - 1;
        };
    };

    return ans;
};



console.log(lastOcc([2, 4, 4, 4, 6, 8], 4))
console.log(lastOcc([1, 1, 1, 1], 1))
console.log(lastOcc([1, 2, 3], 9))



// ----------------------------
// Count Occurrence --key Point  (with bs)
// ---------------------------


// First Occurrence  key points
//    1. sorted array +  target
//    2. find first index  target
//    3. find last index target
//    4. formula key ====> let count = lastindex - firstindex +1;


//      ⚠️ Edge Case Important
//    1. Ager element hai hi nhi to 
//       first = -1;
//       last = -1;
//      * to to count 0 hi hoga 
//    2.formula blindly mat lagaoo   


function Count(arra, tar) {
    let start = 0;
    let end = arra.length - 1;
    let first_index = -1
    let last_index = -1;


    // first index or target ;
    while (start <= end) {
        const mid = Math.floor((start + end) / 2);

        if (arra[mid] === tar) {
            first_index = mid;
            end = mid - 1;
        } else if (arra[mid] < tar) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    };

    if (first_index === -1) return 0;  // target hai hi nhi or index -1 hai 


    let start_1 = 0;
    let end_1 = arra.length - 1;

    while (start_1 <= end_1) {
        const mid = Math.floor((start_1 + end_1) / 2);

        if (arra[mid] === tar) {
            last_index = mid;
            start_1 = mid + 1;
        } else if (arra[mid] < tar) {
            start_1 = mid + 1;
        } else {
            end_1 = mid - 1;
        }
    }

    return last_index - first_index + 1
};

console.log(Count([2, 4, 4, 4, 6, 8], 4));
console.log(Count([1, 1, 1, 1], 1));
console.log(Count([1, 2, 3, 4], 9));
console.log(Count([], 5));
console.log(Count([5], 5));





// ----------------------------
// Lower Bound --key Point  (with bs)
// ---------------------------

//  👉 First index jahan value ≥ target ho

//  mtlab 
//    1. target mile to bhi 
//    2. target na  mile ,par usse bada -- mile to 
//    3. jo pehla bada ya barabar   ho  ---> uska index


// --->  first index find karo jo target ke bada ya barabar hoo 



function Lowerbound(arra,tar){
    let ans =arra.length;
    let start =0;
    let end =arra.length-1;

    while(start<=end){
        const mid = Math.floor((start+end)/2);

        if(arra[mid]>= tar){
            ans = mid;
            end = mid-1;
        }else{
            start = mid+1;
        }
    }
    return ans;
}



console.log(Lowerbound([1,2,2,2,3,5],2))
console.log(Lowerbound([1,3,5,7],4))
console.log(Lowerbound([1,2,3], 0))
console.log(Lowerbound([5,6,7],1))



// ----------------------------
// Upper Bound --key Point  (with bs)
// ---------------------------

// --> Upper Bound same pattern hota hai lowerbound ki tara
    // bass * Lowerbound   →  ≥
    //      * Upperbound   →  >



    function Uowerbound(arra,tar){
    let ans =arra.length;
    let start =0;
    let end =arra.length-1;

    while(start<=end){
        const mid = Math.floor((start+end)/2);

        if(arra[mid]> tar){
            ans = mid;
            end = mid-1;
        }else{
            start = mid+1;
        }
    }
    return ans;
}

console.log(Uowerbound([1,2,2,2,3,5],2))
console.log(Uowerbound([1,3,5,7],4))
console.log(Uowerbound([1,2,3], 0))
console.log(Uowerbound([5,6,7],1))