var myName = ["Eduardo"];
console.log(myName);

var age = [25];
console.log(age);

var ignasiAge = [32];
console.log(ignasiAge);

ageDiff = ignasiAge - age;
console.log(ageDiff);

if (age>21) {
  console.log("You are older than 21");
}else {
  console.log("You are not older than 21");
}

if (age<ignasiAge) {
  console.log("Ignasi is older than you");
}else if (age>ignasiAge) {
  console.log("Ignasi is younger than you")
}else {
  console.log("You have the same age as Ignasi");
}
