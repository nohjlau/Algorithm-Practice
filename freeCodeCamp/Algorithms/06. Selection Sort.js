// Find the minimum card in our unsorted subarray and move it to the sorted part of the subarray

// In-place sorting algorithm takes constant amount of extra memory
// If you use a new array to copy, then you will take extra memory.

// It'll take 0(n^2)

function selectionSort(arr) {
  let temp = 0;
  for(let i = 0; i < arr.length-1; i++) {
    let min = i;
    for(let j = i+1; j < arr.length; j++) {
      if(arr[j] < arr[min])
        min = j 
    }
    temp = arr[i]
    arr[i] = arr[min];
    arr[min] = temp;
  }
  return arr;
}


let arr = [2,7,4,1,5,3];
console.log(selectionSort(arr));