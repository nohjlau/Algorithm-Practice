/*
isMonotonic
20.01.26

T(n) = 0(n)
*/

var isMonotonic = function(A) {
  let monotonic = false;
  if(monotoneDec(A) || monotoneInc(A)) {
    monotonic = true;
  }
  
  return monotonic;
};

monotoneDec = function(A) {
  let monotone = true;
  for(let i = 0; i < A.length-1; i++) {
    if(A[i] < A[i+1])
      monotone = false; 
  }
  return monotone;
}

monotoneInc = function(A) {
  let monotone = true;
  for(let i = 0; i < A.length-1; i++) {
    if(A[i] > A[i+1])
      monotone = false;
  }
  return monotone;
}

let A = [1, 2, 2, 3];
console.log(isMonotonic(A));