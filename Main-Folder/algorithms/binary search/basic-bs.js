// ----------------------
// binarySearch
// ----------------------

// * key points 
// 1. array sorted honi chahiye 
// 2. Time Complexity 
//     * Basic O(log n) 



//  Core idea 
// 1. middle nikaalo 
// 2. middle ko target  se compare karo 
// 3. half discard karo

// input --> [2,5,8,12,16,23,38];
// target--> 16


function bs(arra,tar){
    let start =0;
    let end = arra.length-1;

    while(start<=end){
        let mid = Math.floor((start+end)/2);

        if(arra[mid]==tar){
            return `index --> ${mid}`;
        }

        if(arra[mid]<tar){ // middle element yadi chota ho jye  target se mtlab left side nhi to right jao
            start=mid+1
        }else{
            end =mid-1   // middle element yadi bada ho jye  target se mtlab right side nhi to left  jao
        }

    };

    return `Array mein hi nhi target ${tar}`; // nhi mila  
};

console.log(bs([2,5,8,12,16,23,38],16))
console.log(bs([2,5,8,12,16,23,38], 100))
console.log(bs([2,5,8,12,16,23,38], 38))
console.log(bs([2,5,8,12,16,23,38], 2))

