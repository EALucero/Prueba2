console.log("+++ Ej.1 +++");

var myName = ["Eduardo"];
console.log(myName);

console.log("+++ Ej.2 +++");

var age = [25];
console.log(age);

console.log("+++ Ej.3 +++");

var ignasiAge = [32];
console.log(ignasiAge);

ageDiff = ignasiAge - age;
console.log(ageDiff);

console.log("+++ Ej.4 +++");

if (age>21) {
  console.log("You are older than 21");
}else {
  console.log("You are not older than 21");
}

console.log("+++ Ej.5 +++");

if (age<ignasiAge) {
  console.log("Ignasi is older than you");
}else if (age>ignasiAge) {
  console.log("Ignasi is younger than you")
}else {
  console.log("You have the same age as Ignasi");
}
