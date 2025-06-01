// bt1

let r = Number(prompt("Nhập vào bán kính đường tròn "));
console.log(r);
console.log(typeof r);

let PI = Math.PI;
let chuVi = 2 * PI * r;
let dienTich = PI * r *r ;

console.log("Chu vi là: " +chuVi);
console.log("Diện tích là: " +dienTich);

// bt2

let CD = Number(prompt("mời bạn nhập chiều dài"));
let CR = Number(prompt("mời bạn nhập chiều rộng"));

dienTich = CD * CR;
chuVi = (CD + CR) * 2;
console.log("Diện tích hình chữ nhật là: " +dienTich);
console.log("Chu Vi hình chữ nhật là: " +chuVi);
// bt 3
let a = Number(prompt("mời bạn nhập a"));
    b = Number(prompt("mời bạn nhập b"));
    c = Number(prompt("mời bạn nhập c"));

let dtb = (a+b+c)/3;
dtb = dtb.toFixed(2);
console.log("Điểm trung bình là: " +dtb);
