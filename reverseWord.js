function reverseWords(s) {
    let word = "";
    let res = "";
    for (let i of s) {
        if (i === ' ') {
            res = word + " " + res;
            word = "";
        } else {
            word += i;
        }
    }
    res = word + " " + res;
    return res.substring(0, res.length - 1);
}

let input = "I am a hard working person";
let res = reverseWords(input);
console.log(res);
