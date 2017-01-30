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
