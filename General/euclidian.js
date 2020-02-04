//GCD
//function(10, 45);
// a = b * q + r;
// b = r * q2 + r2

function gcd(b, a) {
  let q = Math.floor(a/b);
  let r = a - (b * q);

  if(b == 0)
    return a;
  
  return gcd(r, b);
}