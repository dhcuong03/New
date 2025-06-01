// // cách xuất dữ liệu với biến trong js
// let soA = 25;
// let soB = 5;

// // C1
// console.log("Căn bậc 2 của " + soA +" là: " + soB); 
// //C2
// console.log("Căn bậc 2 của ", soA , " là: " , soB);
// //C3
// console.log(` Căn bậc 2 của ${soA} là ${soB}`);
// // C4
// console.log(` Căn bậc 2 của %s là : %s `, soA,soB)

let a = 4 , b = 3;
ketqua = a * b;
console.log("Kết quả là: " + a + " nhân " + b + " bằng " +ketqua);
console.log("Kết quả là: ", a , "nhân" , b , "bằng ", ketqua);
console.log(` Kết quả là ${a} nhân ${b} bằng ${ketqua}`);
console.log(`Kết quả là %s nhân %s bằng %s`, a , b , ketqua);