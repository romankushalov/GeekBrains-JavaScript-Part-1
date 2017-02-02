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
    return;
  else if (num == 0)
    return list.value;
  else
    return nth(list.rest, num - 1);
}
console.log(nth (arrayToList([1, 2, 3]), 2)); // 3
console.log(nth (arrayToList([1, 2, 3]), 3)); //undefined

// Задание 2
// reverseArray
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function reverseArray(arr) {
  var x = [];
    for (var i=arr.length - 1; i>=0; i--) {
    x.push (arr[i]);
  }
  return x;
}
console.log (reverseArray (arr));

// reverseArrayInPlace
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function reverseArrayInPlace (arr) {
    var counter = 0;
    for (var i= (arr.length - 1); i>=0; i--) {
        var changed = arr[counter];
        if (i >= Math.floor(arr.length/2)) {
            arr[counter] = (arr[i]);
            arr[i] = changed;
            counter ++;
        }
    }
    return arr;
};
console.log (reverseArrayInPlace(arr));

// pick
var user = {
        name: 'Sergey',
        age: 30,
        email: 'sergey@gmail.com',
        friends: ['Sveta', 'Artem']
    };

function pick (obj, keys) {
  var newObj = {};
  if (keys.length == 0) {
      console.log ('Задайте параметр keys!');
    } else {
   for (var i = 0; i < keys.length; i++) {
    if (obj[keys[i]] !== undefined) {
       newObj[keys[i]] = obj[keys[i]];     
    } 
   }
  return newObj;
 }
}
pick(user, ['name', 'friends', 'second-name']); // All is Ok!
pick(user,''); // Без ключей keys: 'Задайте параметр keys!'

