function loopyLighthouse(range, multiples, words) {
    for (let i = range[0]; i <= range[1]; i++) {
        let output = "";
        output += multiplerCheck(i, multiples[0], words[0]);
        output += multiplerCheck(i, multiples[1], words[1]);
        console.log(output === "" ? i : output);
    };
};

function multiplerCheck(value, multiplier, word) {
    if (value % multiplier === 0 ) {
      return word;
    } else {
      return "";
    };
};

loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);