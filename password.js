args = process.argv.slice(2);

function obfuscate(args) {
  let string = args[0];
  let result = "";

  for (let i = 0; i < string.length; i++){
    let change = string[i];

    if (change == "a") {
      result += "4";
    } else if (change == "e") {
      result += "3";
    } else if (change == "o") {
      result += "0";
    } else if (change == "l") {
      result += "1";
    } else {
      result += change;
    }
  }
  return result;
}

console.log(obfuscate(args));