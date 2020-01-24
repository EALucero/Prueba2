console.log("+++ Ej.1 +++");

function reverse_number(n) {
	n = n + "";
	return n.split("").reverse().join("");
}

console.log(reverse_number(32443));

console.log("+++ Ej.2 +++");

function sort_word(n) {
	n = n + "";
	return n.split("").sort().join("");
}

console.log(sort_word("webmaster"));

console.log("+++ Ej.3 +++");

name = ["prince of persia"]

upper = name.replace(/(^\w{1})|(\s{1}\w{1})/g, match => match.toUpperCase());
console.log(upper);

console.log("+++ Ej.4 +++");

function longestString(arr) {
  let word = "";
  for (i = 0; i < arr.length; i++) {
    if (word.length < arr[i].length) {
      word = arr[i];
    }
  }
  return word;
}

console.log(longestString(['Web', 'Development', 'Tutorial']));
