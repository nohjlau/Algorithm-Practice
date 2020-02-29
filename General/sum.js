function sum(sum_n, arr) {
  if(arr.length == 0) {
    return sum_n;
  }
  sum_n = sum_n + arr[arr.length-1];
  var newArr = [];

  for(let i = 0 ; i < arr.length-1; i++) {
    newArr[i] = arr[i];
  }
  return sum(sum_n, newArr);
}


console.log(sum(0, [1, 5, 10]));