function isPalindrome (str) {
var str=str.replace(/[^a-zA-Z0-9]+/gi,'').toLowerCase();
return str==str.split('').reverse().join('');
}
isPalindrome("A car, a man, a maraca");
