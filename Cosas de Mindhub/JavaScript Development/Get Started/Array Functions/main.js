console.log("+++ Ej.1 +++");

names = ["Iván", "José", "Gian", "Leandro", "Gabriel", "Lucas1", "Fresco", "Lucas2", "Ezequiel", "Lucio", "Erica", "Matías", "Elías", "Meji", "Eduardo", "Nahuel1", "Doris", "Nahuel2", "Diego", "Nicolás", "Branko", "Rocío", "Ariel", "Rodrigo", "Alan", "Román", "Agustín", "Teo"];

names[names.length];
console.log(names[0]);

var last = names[names.length-1];
console.log(last);

names.sort()

for (i = 0; i < names.length; i++) {
  console.log(names[i]);
}

console.log("+++ Ej.2 +++");

ages = ["17", "23", "20", "21", "24", "23", "21", "18", "20", "19", "17", "19", "20", "32", "23", "24", "17", "26", "18", "28", "21", "25", "18", "27", "19", "21", "19", "18"];

console.log("-- edades while --");

i = 0;

while (i < ages.length) {
  console.log(ages[i]);
  i++;
}

console.log("-- pares --");

var events = [0];

while (i < ages.length) {


  if (ages[i] % 2 === 0) {
    console.log(events);
    i++;
  }
}

console.log("-- edades for --");

for (i = 0; i < ages.length; i++) {
  console.log(ages[i]);
}

console.log("+++ Ej.3 +++");

console.log(Math.min.apply(null, ages));

console.log("+++ Ej.4 +++");

console.log(Math.max.apply(null, ages));

console.log("+++ Ej.5 +++");

var array = [3,6,67,6,23,11,100,8,93,0,17,24,7,1,33,45,28,33,23,12,99,100];
var index = 1;

array[array.length];
console.log(array[index]);

console.log("+++ Ej.6 +++");

var array = [3,6,67,6,23,11,100,8,93,0,17,24,7,1,33,45,28,33,23,12,99,100];
index = [];

for (i = 0; i < array.length; i++) {
  array[i]

  if (index.indexOf(array[i]) == -1) {
    index.push(array[i]);

  }else {
    console.log(array[i]);
  }
}

console.log("+++ Ej.7 +++");

myColor = ["Red", "Green", "White", "Black"];

console.log(myColor.toString()+".");
