// Задание на вывод "елочки"

var i = 0;
var a = '';
for (i; i < 7; i++){
  a += '#'; 
  console.log(a);
}

// Зададание со звездочкой

var chess = '';
for (var i=0; i < 8; i++) {
  for (j=0; j < 8; j++) {
    if ((i+j) % 2) {
      chess += ' ';
    } else {
      chess += '#';
    }
  }
  chess += '\n';
}
  console.log (chess);
