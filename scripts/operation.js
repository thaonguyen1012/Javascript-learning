// 1. Arithmetic Operators: + - \* / () % ++ --
{
    const total = 10 + 7; // 17
    const n = 100 % 3; // 1
    let number = 10;
    number = number + 10;
    //number += 10; // 110
    // console.log(number++); // 110 (gán trước, tăng giá trị sau)
    //console.log(number); // 16
    //console.log(++number); //  16 (tăng trước, gán giá trị sau)
}
// 2. Comparison Operators:  > < >= <= == ===
{
    console.log(10 > 7);
    console.log(10 < 7);
    console.log(10 >= 7);
    console.log(10 <= 7);
    console.log("7" == "7"); // true
    console.log(null == undefined); // true
    console.log(null == 10); // false
    console.log(1 == true); // true
    console.log(5 == "5"); // Number("5") -> 5
}
// 3. Logical Operators: && || !
{
    console.log(!false); // true
    console.log(1 && 2 && true && 10); // 10 (code chạy từ trái qua phải, nếu tất cả là true -> trả về kết quả cuối cùng)
    console.log(1 && 2 && false && 10); // false (nếu gặp false -> dừng lại và trả về false)
    console.log(1 || 2 || 3); // 1 (gặp true đầu tiên sẽ dừng lại và trả về giá trị đó)
    console.log(false || false || true); // true 
}
