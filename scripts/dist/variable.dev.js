"use strict";

// 0. console.log(value)
console.log("Hello world"); // Declaration: var, let , const

var myName = "thao";
var age = 23;
age = 24;
console.log("🚀 ~ age:", age); // hợp lệ

var gender = "female"; // gender = "male";
// console.log("🚀 ~ gender:", gender); // không hợp lệ (constant: hằng số)

if (age > 20) {
  var course = "js";
  var score = 90;
}

console.log("🚀 ~ score:", score); // hợp lệ, `var` có scope global
// console.log("🚀 ~ course:", course); // không hợp lệ, `let` có  scope block_scope

{
  //TDZ start here
  //TDZ start here
  //TDZ start here
  //TDZ start here
  // console.log(myName);
  //TDZ start here
  //TDZ start here
  //TDZ start here
  //TDZ start here
  var _myName = "nguyen"; //TDZ end here
  //TDZ end here

  console.log("🚀 ~ myName:", _myName);
}
{
  console.log(myFriend);
  var myFriend = "evondev";
  /** 
   * var myFriend; -> undefined
   * console.log(myFriend); -> undefined
   * myFriend = "evondev";
   */

  var device; // undefined

  var keyboard; // undefined
  // const mouse; -> Error
}