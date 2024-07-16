"use strict";

// 1. Declaration
var brand = "iphone";
console.log("brand", brand);
var type = "luxury";
console.log("type:", type); // My name is Thao and I am 23 years old

var myName = "Thao Nguyen";
var myAge = 23; // const information =
//   "My name is " + myName + " and I am " + myAge + " years old" + "\n";

var information = "My name is ".concat(myName, " and I am ").concat(myAge, " years old.\nToday is the first day I learn Javascript");
console.log("information:", information); // 2. Methods

var hobby = "Guitar is the best friend in my friend list"; // 2.0 .length -> length of string
// console.log("🚀 ~ hobby's length:", hobby.length)
// 2.1 toUpperCase -> GUITAR

hobby.toUpperCase(); // console.log("🚀 ~ hobby:", hobby.toUpperCase());
// 2.2 toLowerCase -> guitar

hobby.toLowerCase(); // console.log("🚀 ~ hobby:", hobby.toLowerCase());
// 2.3 includes -> Guitar includes("gui") => true or false 

hobby.includes("gui"); // console.log("🚀 ~ Guitar includes `gui` :", hobby.includes("gui")); // FALSE (Uppercase and lowercase matter)
// 2.4 indexOf
// console.log(hobby[2]); // i
// console.log(hobby[0]); // G

console.log(hobby.indexOf("friend")); // 18
// 2.5 lastIndexOf

console.log(hobby.lastIndexOf("friend")); // 31
// 2.6 repeat

var repeat3Times = hobby.repeat(3);
console.log("🚀 ~ repeat3Times:", repeat3Times); // 2.7 replace

var piano = hobby.replace("Guitar", "Piano");
console.log("🚀 ~ piano:", piano); // 2.8 replaceAll

var changeFriend = hobby.replaceAll("friend", "instrument");
console.log("🚀 ~ changeFriend:", changeFriend); // 2.9 slice

var copyStr = hobby.slice(20);
console.log("copyStr:", copyStr); // 2.10 split

var strArr = hobby.split(" ");
console.log("strArr:", strArr); // 2.11 join
// Guitar is the best friend in my friend list -> Guitar-is-the-best-friend-in-my-friend-list

var dashStr = hobby.split(" ").join("-");
console.log("dashStr:", dashStr); // dashStr: Guitar-is-the-best-friend-in-my-friend-list
// 2.12 startsWith

console.log(hobby.startsWith("Piano")); // FALSE (boolean)
// 2.13 endsWith

console.log(hobby.endsWith("list")); // TRUE
// 2.14 concat 

var devices = "Mobile";
var mobile = "Iphone";
var results = devices.concat(mobile); // `${devices}${mobile}` (nhanh hon)
// 2.15 trim

var search = "    iphone    ";
console.log(search.trim()); // 2.16 trimStart

console.log(search.trimStart()); // 2.17 trimEnd

console.log(search.trimEnd()); // 2.18 substring

console.log(hobby.substring("abc", 20));
var account = 10; // 2.19 toString

console.log(account.toString());