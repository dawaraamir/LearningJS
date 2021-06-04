//Strings in JS

"Double quotes can be strings";
'Single Quotes can be strings';
`Back ticks can be strings`;

console.log("This should print my string in the console. \n");

//alert("Im alerting you through a string!");

const stringContainer = "I am stored in container"
console.log(stringContainer + "\n");

console.log("This can be added " + "to this. \n");

const tempLiteral = "similar to concat but you use ${} instead of + with a backtick";
const fullSentance = `This is ${tempLiteral} `;
console.log(fullSentance + "\n");

const twoLines = `By pressing enter
this will be on a new line`;
console.log(twoLines + "\n");

const stringPrimitive = "This will identify as a string.";
const stringObject = new String("This will identify as an object.");
console.log(typeof stringPrimitive + "\n");
console.log(typeof stringObject);

//Slice, split, replace in JS Strings

const usingSlice = "Slice returns the characters between two index numbers"
console.log(usingSlice.slice(6,12) + "\n");

const originalString = "Split will seperate a string by a character and create a new array out of the sections";
const splitString = originalString.split(" ");
console.log(splitString);
console.log("\n")

const original = "replace will replace with updates.";
const newString = original.replace(/replace/g, "Replace");
console.log(newString + "\n");

//Converting Data Types in JS


'Alerts take string parameters so if you input something else it will be converted to a string'

//alert(21);

'Js can identify number values when using math operators except for the addition symbol as it may think you are trying to concatinate 2 strings'
console.log("10" - "5");
console.log("10" / "5");
console.log("10" * "5");
console.log("10" + "5" + "\n");

'Similar to String() or .toString(), you can use Number to convert values to numbers'
console.log(Number("20" + "\n"));

'White spaces or empty strings are considered value of 0'
console.log(Number(" "));
console.log(Number("" + "\n"));   

'Any non-number values that are tried to be converted as numbers will come back as NaN(Not a Number)'
console.log(Number("Two" + "\n"));

'booleans work as binary 0-false or 1-true when referefing to number values'
console.log(Number(true));
console.log(Number(false));

console.log("\n");

'You can convert numbers or strings to booleans as well using Boolean(). Any value that is interpreted as empty, like the number 0, an empty string, or values that are undefined or NaN or null are converted to false, other values will be converted to true, including string literals composed of white space and "0" since it is a non empty string'
console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean(undefined));
console.log(Boolean(NaN));
console.log(Boolean(null));
console.log(Boolean(24));
console.log(Boolean(" "));
console.log(Boolean("This isn't empty"));
console.log(Boolean("0"));

