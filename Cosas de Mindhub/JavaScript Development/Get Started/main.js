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
