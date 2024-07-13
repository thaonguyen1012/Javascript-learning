/*
1. Tập đặt tên biến với từ khóa `let` `const` càng nhiều càng tốt, sử dụng các kiểu dữ liệu đã học như null, undefined, number, string, boolean
2. Tạo ra random số từ `100 - 1000`
3. Cho 1 số là `1.234567` dùng các kíen thức đã học để làm tròn thành `1.2345`
4. Viết 1 đoạn code ví dụ có Hoisting
5. Viết 1 đoạn code ví dụ có Temporal Dead Zone */

// 1. biến let
let age = 25;           // number
let name = "Thao";    // string
let isStudent = true;   // boolean
let address = null;  // null
let phone;  // undefined
let count = 10; // number
let message = "This is my first exercise."; // string
let isAvailable = false;    // boolean
let data = null; // null
let value; // undefined

// biến const
const pi = 3.14159;     // number
const greeting = "Hello";   // string
const isActive = false;     // boolean
const emptyValue = null;    // null

//2. Random [100, 1000]
const max = 1000;
const min = 100;
const randomNum = Math.floor(Math.random() * (max - min) + min);
console.log("🚀 ~ randomNum:", randomNum)

//3. 
const number = 1.234567;
const roundedNum = (Math.floor(number * 10000) / 10000);
console.log("🚀 ~ roundedNum:", roundedNum)


//4. hoisting
{
    console.log(messageNew);
    var messageNew = "hello";
    /** 
     * var messageNew: undefined (hoisting: ưu tiên việc khai báo biến đầu tiên)
     * console.log(messageNew); -> undefined
     * messageNew = "hello";
     */
}

//5. TDZ 
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
    let myLastName = "Nguyen";
    //TDZ end here
    //TDZ end here
    //TDZ end here
    //TDZ end here
    //TDZ end here
    //TDZ end here 
    console.log("🚀 ~ myLastName:", myLastName)
}