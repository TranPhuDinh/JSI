/**
 *  Các dữ liệu -> convert boolean -> return false (còn lại đều là true)
 * 1."" (chuỗi rỗng)
 * 2.0 (số 0)
 * 3.false
 * 4.null (**LƯU Ý: typeof null -> object)
 * 5.undefined
 * 6.NaN
 */

// --------------------------------------------------
// vd1: Dánh ách rỗng/ object rỗng (-> true)
const empty_list = [];
if (empty_list.length) {
  // 0 -> false
  console.log("Empty_list had length > 0");
} else if (empty_list) {
  console.log("Had empty_list"); // run this code
}

// --------------------------------------------------
// vd2: Kiểm tra biến có tồn tại(load api) - sử dụng toán tử 3 ngôi
const none_list = undefined;

const none_var = home_list ? none_list : "None list is not defined";
console.log(none_var);
// ghi lại code (if)
if (none_list) console.log(none_list);
else console.log("None list is not defined");
// sử dụng so sánh (|| &&)
const ss = none_list || null;
console.log(ss);

// -----------------------------------------------
// KIỂU DỮ LIỆU
console.log(typeof 0.0); // 'number'
console.log(typeof NaN); // 'number'
// chuyen thanh number
console.log(parseInt("123.6")); // 123 -> làm tròn xuống
console.log(parseFloat("123.6")); // 123.6

console.log(typeof ""); // string
// chuyển thành string
console.log(String(true)); // true
console.log(String(unđerfined)); // "underfined"
console.log("90" + 1); // "901"
console.log("90" - 1); // số 89 (vì string không có toán tử -)

console.log(typeof undefined); // 'boolean'
// chuyển thành booLean
console.log(Boolean(0)); // false
console.log(Boolean([])); // true

console.log(typeof []); // 'object'
console.log(typeof {}); // 'object'
// cách kiểm tra array [] (phan biet voi object {})
console.log(Array.isArray([])); // true
console.log(Array.isArray({})); // true

// ------------------------------------------------
// TOÁN TỬ LOGIC
//  and (và) '&&' : trả về giá trị false gần nhất
// => nếu không có false trong biểu thức => trả về true cuối cùng
console.log(true && true && 1); // 1
console.log("" && true && []); // ""

// or (hoặc) '||': trả về giá trị true gần nhất
// => nếu không có false trong biểu thức => trả về giá trị false cuối cùng
console.log(true || null || undefined); // true
console.log(null || 0 || "1"); // "1"
