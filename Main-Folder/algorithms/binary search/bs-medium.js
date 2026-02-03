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



function firstOcc(arra,tar){
    let start =0;
    let end = arra.length-1;
    let fs = -1;

    while(start<=end){
        let mid =  Math.floor((start+end)/2);

        if(arra[mid]==tar){
           fs = mid;
           end = mid-1;
        }
        else if(arra[mid]<tar){
            start =mid+1;
        }else{
            end = mid-1;
        }
    }

    return fs;
};


console.log(firstOcc([2,4,4,4,6,8], 4))
console.log(firstOcc([1,2,3,4], 3)) 
console.log(firstOcc([1,1,1,1], 1) )
console.log(firstOcc([1,2,3], 9)) 

