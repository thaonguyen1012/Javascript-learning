"use strict";

// 1.
//const str = "I love to learn Javascript";
// expected: "i-love-to-learn-javascript"
{
  var str = "I love to learn Javascript";
  var dashStr = str.toLowerCase().split(" ").join("-");
  console.log("🚀 ~ dashStr:", dashStr);
} // 2. Cắt chuỗi còn 30 kí tự cùng với dấu 3 chấm ...
// ```js
// const longStr =
//   "Write a JavaScript function to split a string and convert it into an array of words";
// // expected: Write a JavaScript function to ...

{
  var longStr = "Write a JavaScript function to split a string and convert it into an array of words";
  var copyLongStr = longStr.slice(0, 30);
  console.log("🚀 ~ copyLongStr:", copyLongStr + "...");
} //3. Chuyển đổi chuỗi để được kết quả như dưới
// ```js
// const newStr = `javascript is awesome`;
// // expected: Javascript is awesome
// ```

{
  var newStr = "javascript is awesome";
  var aNewStr = newStr.replace("javascript", "Javascript");
  console.log("🚀 ~ aNewStr:", aNewStr);
} // 4. Type coercion
// - 1 + "1" + 5 + 7 -> "1157"
// - null + undefined -> NaN
// - null + '' + false + 1 -> "nullfalse1"
// - false + true -> 0 + 1 -> 1
// - 'true' + false -> 'truefalse'
// - !!'0' + Boolean('1') -> true + true -> 1 + 1 -> 2
// - !'false' + 9 -> false + 9 -> 0 + 9 -> 9
// - 'js' + +'59' -> 'js' + 59 -> 'js59'
// - 'evondev' + -'frontend' -> 'evondev' + NaN -> 'evondevNaN'
// - true == 'true' -> 1 == NaN -> false