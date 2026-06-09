let waldoisHiding = "Somewhere Waldo is hiding.";
let reg = /Waldo/;
console.log(reg.test(waldoisHiding));

let petString = "James has a pet cat";
reg = /dog|cat|bird|fish/; // pipes
console.log(reg.test(petString)); // true

let myString = "freeCodeCamp";
reg = /freecodeCamp/i; // i is the flag - mean ignore case
console.log(reg.test(myString)); // true

/**
 *
 * match() is a string method that runs a regex against the string and returns the matches.match() is a string method that runs a regex against the string and returns the matches. Its behavior changes significantly depending on whether your regex has the g flag — that's the key thing to understand.
 */

let extractStr = "Extract the word 'coding' from this string";
reg = /coding/;
let result = extractStr.match(reg);
console.log(result[0]);

// g flag

let testStr = "Repeat, Repeat, Repeat";
reg = /Repeat/g;
console.log(testStr.match(reg)); // [ 'Repeat', 'Repeat', 'Repeat' ]

let testTwinkle = "Twinkle, twinkle, little star";
reg = /twinkle/gi;
console.log(testTwinkle.match(reg)); // [ 'Twinkle', 'twinkle' ]

/**
 * In regex, . matches any single character except a newline (unless the s/dotall flag is set, which makes it match newlines too).
 */

let humStr = "I'll hum a song";
let hugStr = "Bear hug";
let huRegex = /hu./;

console.log(humStr.match(huRegex));
console.log(hugStr.match(huRegex));

let exampleStr = "Let's have fun with regular expression";
let unRegex = /.un/;
console.log(unRegex.test(exampleStr));

// match single character with multiple possibilities - selectivly picked letters

let bgRegex = /b[aiu]g/;
let quoteSample = "Beware of bugs in the above code";
let vowelRegex = /[aeiou]/gi;
result = quoteSample.match(vowelRegex);
console.log(result);

// match letters of the alphabet - range of letters
let quoteSample2 = "the quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z. ]/gi;
console.log(alphabetRegex.test(quoteSample2)); // true
console.log(quoteSample2.match(alphabetRegex));
/**
 * [
  't', 'h', 'e', ' ', 'q', 'u', 'i',
  'c', 'k', ' ', 'b', 'r', 'o', 'w',
  'n', ' ', 'f', 'o', 'x', ' ', 'j',
  'u', 'm', 'p', 's', ' ', 'o', 'v',
  'e', 'r', ' ', 't', 'h', 'e', ' ',
  'l', 'a', 'z', 'y', ' ', 'd', 'o',
  'g', '.'
]

 */
// match numbers and letters of the alphabet
let numberQuote = "blueberry of PI 3.14 are awesome!";
let numRegex = /[0-9]/gi;
console.log(numberQuote.match(numRegex)); // [ '3', '1', '4' ]

/**
 * MATCH SINGLE CHARACTER NOT SPECIFIED - negated character set - using carrot character
 */

let quoteSample3 = "3 blind mice";
let carrotReg = /[^0-9aeiou]/gi; // we are not going to match 0-9 and aeiou
console.log(quoteSample3.match(carrotReg));

/**
 * MATCH CHARACGER THAT OCCUR ONE OR MORE TIMES
 * using the plus(+)
 */

/**
* and + are quantifiers — they control how many times the thing right before them can repeat.* and + are quantifiers — they control how many times the thing right before them can repeat. The single difference between them is the minimum count.
* means zero or more of the preceding item
+ means one or more of the preceding item

So + requires at least one occurrence; * is happy with none at all.
 */

let river = "Mississipspi";
let riverReg = /s+/gi;
console.log(river.match(riverReg));

let soccerWord = "Goooooooooooool";
let gPhrase = "my gut are in goole";
let oPhrase = "over the moon";
let goReg = /[gG]o*/gi;

console.log(soccerWord.match(goReg)); // [ 'Gooooooooooooo' ]
console.log(gPhrase.match(goReg)); // [ 'g', 'goo' ]
console.log(oPhrase.match(goReg)); // null

let chewieQuote = "Aaaaaaaaaargh!";
let chewieReg = /Aa*/;
console.log(chewieQuote.match(chewieReg)); // [Aaaaaaaaaa]

/**
 * GREEDY MATCH - FIND THE LONGEST PATTERN AND RETURN IT
 * LAZY MATCH - FIND THE SMALLEST POSSIBLE AND RETURN IT
 */

let tit = "titanic";
let regex = /t[a-z]*i/; // greedy match
console.log(tit.match(regex));

regex = /t[a-z]*?i/;
console.log(tit.match(regex)); // lazy match

let got = "<h1>Winter is coming </h1>";
let myRegex = /W.*g/;
console.log(got.match(myRegex)); // 'Winter is coming'
myRegex = /<.+?>/;
console.log(got.match(myRegex)); // <h1>

/**
 * FIND ONE OR MORE CRIMINALS IN A HUNT - challange
 *
 */
let crowd = "P1P2P3P4P5P6CCCP7P8P9";
let criminalReg = /c+/gi;

console.log(crowd.match(criminalReg)); // [ 'CCC' ]

/**
 * NOTE!
 * ^ means negation only when it's the first character inside square brackets [ ].
 * Everywhere else, it means anchor (start of string/line).
 *  "cat".match(/[^aeiou]/g);   // ["c", "t"]  — the non-vowels
 *  "a1b2".match(/[^0-9]/g);    // ["a", "b"]  — the non-digits
 */

/**
 * MATCH BEGINNING STRING PATTERNS
 * ^ sign
 */

let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /^Cal/;

console.log(calRegex.test(rickyAndCal));
console.log(rickyAndCal.match(calRegex));

/**
 * MATCH ENDING STRING PATTERNS
 * $ sign
 */

let caboose = "the last car on a train is the caboose";
let lastReg = /caboose$/;

console.log(caboose.match(lastReg)); // ["caboose"];

/**
 * MATCH ALL LETTERS AND CHARACTERS
 * \w - match capital and lower a to z / 0 - 9 digits and underscores
 * [a-zA-Z0-9_]
 */

let wizards = "the five boxing wizards *jump quickly!";
let wizReg = /\w/gi; // /[a-z]/gi;

console.log(wizards.match(wizReg));

/**
 * MATCH EVERYTHING BUT LETTERS AND NUMBERS
 * \W is the negated version of \w — it matches any single character that is not a word character.
 * Since \w is [A-Za-z0-9_] (letters, digits, underscore),
 * \W is everything else: spaces, tabs, newlines, punctuation, and symbols.
 * [^A-Za-z0-9_].
 */
wizReg = /\W/g;
console.log(wizards.match(wizReg));

/**
 * MATCH ONLY NUMBERS AND DIGITS
 *
 * \d and \D are the digit shorthands, and they're an
 * exact pair: one matches digits, the other matches
 * everything that isn't a digit.\d and \D are the digit
 * shorthands, and they're an exact pair: one matches
 * digits, the other matches everything that isn't a digit.
 *  \d matches a single digit — equivalent to [0-9]
 *  \D matches a single non-digit — equivalent to [^0-9]
 */

let numStr = "your sandwich will be $15.00";
let digReg = /\d/g;
console.log(numStr.match(digReg)); // [ '1', '5', '0', '0' ]

digReg = /\D/g; // non-number
console.log(numStr.match(digReg));
/**
 * [
  'y', 'o', 'u', 'r', ' ',
  's', 'a', 'n', 'd', 'w',
  'i', 'c', 'h', ' ', 'w',
  'i', 'l', 'l', ' ', 'b',
  'e', ' ', '$', '.'
]
 */

/**
 * RESTRICT POSSIBLE USER NAME
 * if there are numbers, they must be at the end
 * letters can be lowercase and uppercase
 * at least two characters long. Two-letter names can't have numbers.
 */

let userName = "JactOfAllTrades99";
let userCheck = /^[a-zA-Z]{2,}\d*$/gi; // {min, max}
console.log(userCheck.test(userName));

/**
 * MATCH WHITESPACE
 * \s - single whitespace character [\t\n\r\f\v]
 * \S - matches single non-whitespace character [^\t\n\r\f\v]
 */

let whiteSpace = "whitespace is important in separating words";
let wsReg = /\s/g;

console.log(
  "Number of whitespace in the string: ",
  whiteSpace.match(wsReg).length
);

/**
 * SPECIFY UPPER AND LOWER NUMBER OF MATCHES
 */

let ohStr = "Ohhhh no";
let ohRegex = /Oh{3,6}\sno/;
console.log(ohRegex.test(ohStr)); // true

/**
 * SPECIFY ONLY THE LOWER NUMBER OF MATCHES
 *
 */

let haStr = "Hazzzzah";
let haRegex = /z{4,}/;
console.log(haRegex.test(haStr));

/**
 * SPECIFY EXACT NUMBER OF MATCHES
 */

let timStr = "Timmmmmber";
let timReg = /Tim{5}ber/;
console.log(timReg.test(timStr)); // true

/**
 * CHECK FOR ALL OR NONE
 */
