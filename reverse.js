const reverser = function(str) {
    let output = "";
    for (let i = 1; i <= str.length; i++) {
      output += str[str.length - i];
    }
  
    return output;
  };
  
  process.argv.slice(2).forEach(str => {
    console.log(reverser(str));
  });