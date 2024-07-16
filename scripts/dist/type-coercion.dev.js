/** 
 * 1 + 1 -> 2
 * 1 + "1" + 2 -> (1 + "1") + 2 -> "11" + 2 -> "112"
 * null == 0 -> false (null null chỉ = `null` hoặc `undefined` khi sử dụng ==)
 * null == NaN -> false
 * null == "" -> false
 * NaN + 10 -> NaN (Bất kỳ phép toán nào với NaN đều cho kết quả là NaN )
 * "10" == "10" -> true
 * true + 1 + false -> Number(true) + 1  + Number(false) 
-> 1 + 1 + 0 = 2
 * 100 + 25 + "25" -> (100 + 25) + "25" -> 125 + "25" -> "12525"
 * false == !!5 -> false
 * true == !!false -> false
 * true == "true" -> Number(true) == Number("true") -> 1 == NaN -> false
 * false == "false" -> false
 * NaN == NaN -> false (Khi so sánh với NaN luôn trả ra `false`, thậm chí NaN cũng không bằng chính nó)
 * true + false -> 1
* 12 / "6" -> 2
* "number" + 15 + 3 -> "number153"
* 15 + 3 + "number" -> "18number"
* "foo" + + "bar" -> "foo" + NaN -> "fooNaN"
* null == '' -> false
* !!"false" == !!"true" -> true == true
*/
"use strict";