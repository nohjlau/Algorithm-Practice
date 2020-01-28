/*
isMonotonic
20.01.26

T(n) = 0(n)
*/

// THis is faster than my one pass solution even though we use two for loops.
// 72ms vs 92ms, only 65.43 % faster than all other JS solutions
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

//===== Alternate One Pass Solution =====
// Only faster than 22.54%, but uses less memory than 100% of solutions
var isMonotonicOnePass = function(A) {

  // Check if we're searching for Monotone Inc or Monotone Dec
  let isInc = false;
  if(A[0] < A[A.length-1])
    isInc = true;

  for(let i = 0; i < A.length-1; i++) {
    if(isInc && A[i] > A[i+1])
      return false
    else if (!isInc && A[i] < A[i+1])
      return false
  }
  return true;
}