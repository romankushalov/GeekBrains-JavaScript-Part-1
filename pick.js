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
