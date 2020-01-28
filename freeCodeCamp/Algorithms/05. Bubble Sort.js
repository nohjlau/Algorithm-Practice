/*
bubbleSort
T(n) = (n-1) * (n-1) * c
T(n) = cn^2 - 2cn + 1
T(n) = 0(n^2)

Best-case:    O(n)
Average-case: 0(n^2)
Worst-case:   0(n^2)
*/

function bubbleSort(arr) {
  let temp;

  for(let k = 0; k < arr.length; k++) {
    let sorted = true;
    for(let i = 0; i < arr.length-k; i++) {
      if(arr[i] > arr[i+1]) {
        temp = arr[i];
        arr[i] = arr[i+1];
        arr[i+1] = temp;
        sorted = false;
      }
    }
    if(sorted) // No swaps on the first loop means the array is already sorted.
      break;
  }
  return arr;
}

let arr = [2, 7, 4, 1, 5, 3];

console.log(bubbleSort(arr));
