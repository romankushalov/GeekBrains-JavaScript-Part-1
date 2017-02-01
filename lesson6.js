// Задание 1. Массив - в список
function arrayToList(arr) {
  var list = null;
  for (var i = arr.length - 1; i >= 0; i--)
    list = {value: arr[i], rest: list};
  return list;
}
console.log (arrayToList ([1, 2, 3]));

// Задание 2. Список - в массив
function listToArray(list) {
  var arr = [];
  for (var node = list; node; node = node.rest)
    arr.push(node.value);
  return arr;
}
console.log (listToArray (arrayToList ([1, 2, 3])));

//Элемент спереди существующего списка
function prepend (elem, list) {
  return {value: elem, rest: list};
}
console.log(prepend(0, arrayToList ([1, 2, 3])));

//Возвращение элемента на заданной позиции
function nth(list, num) {
  if (!list)
    return undefined;
  else if (num == 0)
    return list.value;
  else
    return nth(list.rest, num - 1);
}
console.log(nth (arrayToList([1, 2, 3]), 2)); // 3
console.log(nth (arrayToList([1, 2, 3]), 3)); //undefined

// Задание 2
// reverseArray
function reverseArray (array) {
  
// reverseArrayInPlace
