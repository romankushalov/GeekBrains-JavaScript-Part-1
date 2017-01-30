// Задание 1
var r = +prompt('Введите значение канала R:');
var g = +prompt('Введите значение канала G:');
var b = +prompt('Введите значение канала B:');
if ((r||g||b) > 255) {
  alert ('Ошибка! Число должно быть в диапазоне 0 - 255!');
} else {
function decimal2hex(r, g, b) {
  var rgb = r | (g << 8) | (b << 16);
  return '#' + (0x1000000 + rgb).toString(16).slice(1)
}
}
decimal2hex(r, g, b);

// Задание 2
var num = prompt ('Введите число от 0 до 999');
  if (num < 0 || num > 999) {
    alert ('Ошибка! Введите число от 0 до 999!')
  } else {
var arr = num.split('');
var arrrev = arr.reverse();
// Блок проверки на введенные разряды и присвоения 0 отсутствующему разряду //
     if (arrrev[0] === undefined) {
        arr[0] = 0
      } else {
        arrrev[0] = arrrev[0]
      }
       if (arrrev[1] === undefined) {
        arrrev[1] = 0
      } else {
        arrrev[1] = arrrev[1]
      }
    if (arrrev[2] === undefined) {
        arrrev[2] = 0
      } else {
        arrrev[2] = arrrev[2]
      }
// Функция //
    function numberUnits (num) {
      number = {};
        number.hundred = arr[2];
        number.decade = arr[1];
        number.unit = arr[0];
     console.log ('Сотни: ' + number.hundred + ', ' + 'Десятки: ' + number.decade + ', ' + 'Единицы: ' + number.unit);
  }
  }
numberUnits (num);

// Задание 3
var obj = {
  name: 'Roman',
  title: 'Mr.',
  age: 39
};
function objectToQueryString (obj) {
  var objString = '';  
  for (var key in obj) {
    objString += key + '=' + obj[key] + '&'; 
  }
  return objString.substring (0, objString.length-1);
}
objectToQueryString (obj);
