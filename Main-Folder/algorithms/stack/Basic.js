// -------------------
// stack 
// ------------------

// stack work 
// const array = [1,2,3,10,0];
// stack ---> push --1 --> [1];
//   ---> push -- 2 --> [1,2]
//   ---> push -- 3 --> [1,2,3]
//   ---> push -- 10 --> [1,2,3,10]
//   ---> push -- 0 --> [1,2,3,10,0];
//   ---> pop     ----> [1,2,3,10]
//   ---> pop     ----> [1,2,3]


// --->  stack ek liner data structure hai  or allowed karta hai operation  end par karne ke liye  jisko top element bolte hai 
// 1. two primary operation 
//   --> adds element to the top of the stack 
//   --> Remove and return the top  element  from the stack
//    stack ka top element bass impotant hai 
//  stack is follow LIFO rule (last in first out);


//  question 1 Valid
// {([])}

//  seen open breckit to stack mein daal do 
// yadi close breckit mil to seen top element mtlab stack ke last element check karo yadi matching hai to top element to remove kar karo
//  stack yadi empty hai to valid yadi nhi hai to invalid hai 


const str = "{[[()]]}";


function Check_vaild(string) {
    const stack = [];

    for (let i = 0; i < string.length; i++) {
        if (string[i] === "{" || string[i] === "[" || string[i] === "(") {
            stack.push(string[i]);
        } else {
            if (stack.length === 0) return "InVaild"; // yadi stack hi empty hai or close brackit aya too 

            if (string[i] === "}" && stack.at(-1) === "{") {
                stack.pop();
            } else if (string[i] === "]" && stack.at(-1) === "[") {
                stack.pop()
            } else if (string[i] === ")" && stack.at(-1) === "(") {
                stack.pop()
            } else {
                return "Invaild"  // Mismatch case 
            }
        }
    };

    return stack.length === 0 ? "Vaild" : "Invaild"
};

console.log(Check_vaild(str)) // Vaild
console.log(Check_vaild("{{((}})")) // Invaild



// question 2  Next Greater element 


const arra = [2, 1, 5]; //--->[5,5,-1];

function NGE(array) {
    const stack = [];
    const result = [];
    for (let i = array.length - 1; i >= 0; i--) {

        while (stack.length > 0 && array[i] >= stack.at(-1)) {
            stack.pop();
        };

        if (stack.length === 0) {
            result[i] = (-1);
        } else {
            result[i] = stack.at(-1)
        };
        stack.push(array[i]);
    };

    return result;
};
console.log(NGE([2, 1, 5]));



// Next Smaller Element

function NSE(array) {
    const stack = [];
    const result = [];

    for (let right = array.length - 1; right >= 0; right--) {
        while (stack.length > 0 && array[right] < stack.at(-1)) {
            stack.pop();
        };

        if (stack.length === 0) {
            result[right] = (-1);
        } else {
            result[right] = stack.at(-1)
        };
        stack.push(array[right]);
    }
    return result
};

console.log(NSE([1, 2, 0, 10, 9, 2]));


//  Previous greater element

function PGE(array) {
    const result = [];
    const stack = [];

    for (let left = 0; left < array.length; left++) {
        while (stack.length > 0 && array[left] >= stack.at(-1)) {
            stack.pop();
        }

        if (stack.length === 0) {
            result[left] = -1;
        } else {
            result[left] = stack.at(-1);
        }

        stack.push(array[left])
    };
    return result;
};

console.log(PGE([3, 4, 5, 1, 4]));



// Previous smaller element

function PSE(array) {
    const result = [];
    const stack = [];

    for (let left = 0; left < array.length; left++) {
        while (stack.length > 0 && stack.at(-1) >= array[left]) {
            stack.pop();
        };

        if (stack.length === 0) result[left] = -1;
        else result[left] = stack.at(-1);

        stack.push(array[left]);
    };
    return result
};

console.log(PSE([3, 4, 5, 1, 4]));





