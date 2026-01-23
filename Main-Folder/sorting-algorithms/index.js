// bubble sort 
// --> Time complexity
//   base case : O(n)
//   worst case :O(n²)
//   Average Case: O(n²)

function bubbleSort(arr) {
    let n = arr.length;

    for (let i = 0; i < n - 1; i++) {
        let swapped = false;
        for (let j = 0; j < n - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                swapped = true;
            }
        }
        if (!swapped) break; // already sorted
    }
    return arr;
}
console.log(bubbleSort([5, 1, 4, 2, 8]));



// -------------------------
// selectionSort
// -------------------------

// --> Time complexity
//   base case : O(n²)
//   worst case :O(n²)
//   Average Case: O(n²)

function selectionSort(arr) {
  let n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;

    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }

  return arr;
}
console.log(selectionSort([64, 25, 12, 22, 11]));


// -------------------------
// insertion sort 
// -------------------------


// --> Time complexity
//   base case : O(n)
//   worst case :O(n²)
//   Average Case: O(n²)

function insertionSort(arr) {
  let n = arr.length;

  for (let i = 1; i < n; i++) {
    let key = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }

    arr[j + 1] = key;
  }

  return arr;
}

console.log(insertionSort([12, 11, 13, 5, 6]));


// -------------------------
// Quick sort (pivot)
// -------------------------

// --> Time complexity
//   base case : O(n log n)
//   worst case : O(n²)
//   Average Case: O(n log n)


function quickSort(arr) {

    if (arr.length <= 1) return arr;

    let pivot = arr[arr.length - 1];
    let sm = [];
    let lg = [];

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            sm.push(arr[i]);
        } else {
            lg.push(arr[i]);
        }
    }

    let sortedSm = quickSort(sm);
    let sortedLg = quickSort(lg);

    return [...sortedSm, pivot, ...sortedLg];
}
console.log(quickSort([10, 7, 8, 9, 1, 5]))