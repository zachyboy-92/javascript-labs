// //Slice method
let string = "JavaScript";
let sliceString = string.slice(0, 4);
console.log(string, sliceString);

// //Substring method
let subString = string.substring(1, 4);
console.log(string, subString);

// //substr method
let string2 = "banana apple grapes";
let subStr2 = string2.substr(7, 5);
console.log(string2, subStr2);

// //concat
let string3 = "pineapple";
let concatedString = string2.concat(" " + string3);
console.log(concatedString);

//Startwith and endsWith method
let string4 = "Awesome";
console.log(string4.startsWith("Aw"));
console.log(string4.endsWith("meo"));

// //replace method
let string5 = "banana";
let replaceString = string5.replace("banana", "apple");
console.log(replaceString);

// replace all method
let string = "dog cat dog dog";
let replaceString = string.replaceAll("dog", "cat");
console.log(replaceString);

//last index of
let string7 = "banana";
console.log(string7.lastIndexOf("a"));

//charCodeAt method
let string8 = "FrontEnd";
console.log(string8.charCodeAt("n"));

// trim method
let string9 = "   Hello world     ";
console.log(string9.split(""));
