// Solution 1 using Regex
var defangIPaddr = function(address) {
  let regex = /\./g
  let ip = address;
  ip = ip.replace(regex, "[.]");
  return ip;
};

// Solution 2 using string functions
var defangIPaddr2 = function(address) {
  let ip = address
  ip = ip.split(".").join("[.]")
  return ip
}


let ip = "127.0.0.1";
console.log(defangIP(ip))
