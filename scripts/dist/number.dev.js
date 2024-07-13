"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

// NaN: not a number
var score = 5;
var money = 1000.5;
console.log(_typeof(score)); // kiểm tra kiểu dữ liệu của biến => sử dụng `typeof variable`

var bigNumber = "10.12340";
console.log("🚀 ~ bigNumber:", bigNumber);
console.log(Number(bigNumber)); // string => number: 10.1234  (giữ nguyên type của number)

console.log(parseInt(bigNumber)); // hàm `parseInt` phân tích string => trả về number: 10 (trả về số nguyên)

console.log(parseFloat(bigNumber)); // 10.1234

var number = 1.55;
console.log(Math.floor(number)); // 1 (làm tròn xuống)

console.log(Math.round(number)); // 2 (làm tròn gần nhất)

console.log(Math.ceil(number)); // 2 (làm tròn lên)

console.log(Math.pow(5, 3)); // 125 (5^3)

console.log(Math.PI); // 3.14 (trả về số pi)

console.log(Math.trunc(1.56)); // 1 (trả về số nguyên của number)

console.log(Math.sign(100)); // 1 (number > 0 => trả về: 1, ngược lại trả về: -1. Nếu đầu vào là 0 hoặc -0, nó sẽ được trả về nguyên trạng.)

console.log(Math.sign(-100)); // -1

console.log(Math.sign(0)); // 0

console.log(Math.sqrt(9)); // 3 (căn bậc 2)

console.log(Math.random()); // random 0 -> < 1 (không được = 1)

var randomTo10 = Math.random() * 10; // random 0 -> 10

console.log(Math.floor(randomTo10)); // trả về một số ngẫu nhiên từ 0 -> 9
// 5 - 10

var max = 10;
var min = 5;
var randomRange = Math.floor(Math.random() * (max - min) + min); // Math.floor() làm tròn xuống số nguyên gần nhất, kết quả là một số nguyên trong khoảng {5, 9}

var decimal = 9.73148;
console.log(Number(decimal.toFixed(1))); // 9.7 (làm tròn đến một chữ số thập phân)

console.log(Math.floor(decimal * 10000) / 10000); // 9.7314  (trả về 4 chữ số thập phân nhưng ko làm tròn như toFixed)