function isPalindrome (str) {
var str=str.replace(/[^a-zA-Z0-9]+/gi,'').toLowerCase();
return str==str.split('').reverse().join('');
}
console.log(isPalindrome("level")); // logs 'true'
console.log(isPalindrome("levels")); // logs 'false'
console.log(isPalindrome("A car, a man, a maraca")); // logs 'true'
