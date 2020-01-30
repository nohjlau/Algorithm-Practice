// Not particularly efficient, but more efficient than bubble sort and
// insertion sort for usual cases. It does however have the same worse cast
// scenario as the other two sorting algorithms

function insertionSort(arr) {
  let n = arr.length;

  for (let i = 1 ; i < n; i++) {
    let value = arr[i];
    let hole = i;
    while(hole > 0 && arr[hole-1] > value) {
      arr[hole] = arr[hole-1]
      hole = hole -1;
    }
    arr[hole] = value;
  }
  return arr;
}


arr = [7, 2, 4, 1, 5, 3];
console.log(insertionSort(arr));