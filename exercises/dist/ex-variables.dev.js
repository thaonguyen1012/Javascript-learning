"use strict";

/*
1. Tập đặt tên biến với từ khóa `let` `const` càng nhiều càng tốt, sử dụng các kiểu dữ liệu đã học như null, undefined, number, string, boolean
2. Tạo ra random số từ `100 - 1000`
3. Cho 1 số là `1.234567` dùng các kíen thức đã học để làm tròn thành `1.2345`
4. Viết 1 đoạn code ví dụ có Hoisting
5. Viết 1 đoạn code ví dụ có Temporal Dead Zone */
// 1. biến let
var age = 25; // number

var name = "Thao"; // string

var isStudent = true; // boolean

var address = null; // null

var phone; // undefined

var count = 10; // number

var message = "This is my first exercise."; // string

var isAvailable = false; // boolean

var data = null; // null

var value; // undefined
// biến const

var pi = 3.14159; // number

var greeting = "Hello"; // string

var isActive = false; // boolean

var emptyValue = null; // null
//2. Random [100, 1000]

var max = 1000;
var min = 100;
var randomNum = Math.floor(Math.random() * (max - min) + min);
console.log("🚀 ~ randomNum:", randomNum); //3. 

var number = 1.234567;
var roundedNum = Math.floor(number * 10000) / 10000;
console.log("🚀 ~ roundedNum:", roundedNum); //4. hoisting

{
  console.log(messageNew);
  var messageNew = "hello";
  /** 
   * var messageNew: undefined (hoisting: ưu tiên việc khai báo biến đầu tiên)
   * console.log(messageNew); -> undefined
   * messageNew = "hello";
   */
} //5. TDZ 

{
  //TDZ start here
  //TDZ start here
  //TDZ start here
  //TDZ start here
  //TDZ start here
  //TDZ start here
  //TDZ start here
  //TDZ start here
  //console.log("🚀 ~ myLastName:", myLastName)
  //TDZ start here
  //TDZ start here
  //TDZ start here
  //TDZ start here
  var myLastName = "Nguyen"; //TDZ end here
  //TDZ end here
  //TDZ end here
  //TDZ end here
  //TDZ end here
  //TDZ end here 

  console.log("🚀 ~ myLastName:", myLastName);
}