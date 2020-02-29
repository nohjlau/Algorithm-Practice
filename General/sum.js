function sum(sum_n, arr) {
  if(arr.length == 0) {
    return sum_n;
  }
  sum_n = sum_n + arr[arr.length-1];
  arr = arr.slice(0, arr.length-1);
  
  return sum(sum_n, arr);
}


console.log(sum(0, [1, 5, 10]));