const translatePL = function(text) {
    let textPL = [];
    let stringInput = text.split(" ");
    for (let i = 0; i < stringInput.length; i++) {
        let word = stringInput[i];
        let letter = word.charAt(0);
        let wordInPL = word.slice(1) + letter + "ay";
        textPL.push(wordInPL);
    }
    return textPL.join(" ");
};

console.log(translatePL("pig latin"))