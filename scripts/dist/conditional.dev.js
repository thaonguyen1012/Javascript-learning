"use strict";

/*if(conditional) {
  // do something 1
} else {
  // do something 2
}*/

/*if(conditional) {}
else if(somethingElseTrue) {}
else {}*/
{
  var _myScore = 7;

  if (_myScore < 5) {
    console.log("Oh no!");
  } else if (_myScore >= 5 && _myScore <= 7) {
    console.log("Oh yeah");
  } else if (_myScore >= 8 && _myScore <= 9) {
    console.log("I will have special present from my mother");
  } else {
    console.log("I will have special present from both my mother and my father also my brother");
  }
} //switch-case
// Nếu sử dụng điều kiện dựa vào biến trong `case` thì switch phải có giá trị (true)

var myScore = 7;

switch (true) {
  case myScore < 5:
    console.log("Oh no!");
    break;

  case myScore >= 5 && myScore <= 7:
    console.log("Oh yeah");
    break;

  case myScore >= 8 && myScore <= 9:
    console.log("I will have special present from my mother");
    break;

  default:
    console.log("I will have special present from both my mother and my father also my brother");
    break;
} // Nếu giá trị đầu vào switch là (biến) thì không thể viết điều kiện phức tạp ở `case`, phải là 1 giá trị nhất định (=)


{
  var _myScore2 = 7;

  switch (_myScore2) {
    case 5:
      console.log("Oh no!");
      break;

    case 6:
    case 7:
      console.log("Oh yeah!");
      break;

    case 8:
    case 9:
      console.log("I will have special present from my mother");
      break;

    default:
      console.log("I will have special present from both my mother and my father also my brother");
      break;
  }
}
{
  var fruit = "apple";

  switch (fruit) {
    case "banana":
      console.log("This is a banana.");
      break;

    case "apple":
      console.log("This is an apple.");
      break;

    case "orange":
      console.log("This is an orange.");
      break;

    default:
      console.log("Unknown fruit.");
  }
}
{
  var age = 23;
  var ticketType = age < 18 ? "child" : age >= 18 && age < 60 ? "adult" : "senior";
  console.log("ticket type:", ticketType);
}