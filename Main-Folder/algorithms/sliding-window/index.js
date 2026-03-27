// ---------------
// Sliding Window
// ---------------


// sliding window means window ko slid karna 
//   sliding === subarray


// question find all subarray
// [1,2,3,4,5]

// [1]            [2]              [3]         [4]
// [1,2]          [2,3]            [3,4]
// [1,2,3]        [2,3,4]
// [1,2,3,4]

//  this solve to O(n²)
//  optimize  mein O(n)




const str = 'SUBHASH'


function Find_All_Subarray(array) {
    const All = [];
    for (let i = 0; i < array.length; i++) {
        let str = [];
        let str1 = '';

        for (let j = i; j < array.length; j++) {
            str1 += array[j];
            str.push([str1]);
        }
        All.push(str);
    }
    console.log(All)
};

// [
//     [ ['S'], ['SU'], ['SUB'], ['SUBH'], ['SUBHA'], ['SUBHAS'], ['SUBHASH']],
//     [['UB'], ['UBH'], ['UBHA'], ['UBHAS'], ['UBHASH']],
//     [['B'], ['BH'], ['BHA'], ['BHAS'], ['BHASH']],
//     [['H'], ['HA'], ['HAS'], ['HASH']],
//     [['A'], ['AS'], ['ASH']],
//     [['S'], ['SH']],
//     [['H']]
// ]

Find_All_Subarray(str)




// question -- find Maximum or minimum k size window
// --  mtlab ki window ka sum bada hai or dusra kon si window ka sum chota hai sabse k= size ke 


const number = [1, 2, 3, 4, 5];
const k = 3;
// [1, 2, 3]-- - > 6  Minimum
// [2, 3, 4]-- - > 9
// [3, 5, 6]-- - > 14 Maximum


function Find(arr, k) {
    let max = 0;
    let min = Infinity;
    const All = [];

    for (let i = 0; i <= arr.length - k; i++) {
        let sum = 0;
        const arra = [];
        for (let j = i; j < i + k; j++) {
            sum += arr[j];
            arra.push(arr[j]);
        }
        max = Math.max(max, sum);
        min = Math.min(min, sum);
        All.push([...arra, `SUM--->${sum}`]);

    }
    return {
        min, max, All
    }
};


//  [ 1, 2, 3, 'SUM--->15' ]----> Maximum
//  [ 2, 3, 4, 'SUM--->14' ]
//  [ 3, 4, 5, 'SUM--->12' ] ----> minimum

console.log(Find(number, k))




//  Optimize  optimize  mein O(n)


function Find_2(arra, k) {
    let sum = 0;
    for (let i = 0; i < k; i++) {
        sum += arra[i];
    };
    let window = sum;
    console.log(sum)
    let max = sum;
    let min = sum;

    for (let j = k; j < arra.length; j++) {
        window = window + arra[j] - arra[j - k];
        max = Math.max(window, max);
        min = Math.min(min, window)
    }

    return {
        max, min
    }

}

console.log(Find_2(number, k)) // { max: 12, min: 6 }