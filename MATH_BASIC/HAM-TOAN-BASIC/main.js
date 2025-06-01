// các phép toán thông dụng
//1 hàm `Math.srqt()`
let a = Math.sqrt(4);
console.log(a); //hàm căn bậc 2

//2 Hàm `Math.pow(base , exponent )`
let b = Math.pow(2,3);
console.log(b);  // hàm mũ theo thứ tự từ trái -> phải


// 3 Hàm `Math.abs()`
let c = Math.abs(-5);
console.log(c);     //giá trị tuyệt đối

// 4 Hàm Math.cecil();  Hàm Math.floor();
let d = Math.floor(5.03333); // hàm làm tròn xuống
console.log(c)

let e = Math.ceil(5.0999); // hàm làm tròn lên
console.log(e);

//5 Hàm Math.round();    làm tròn từ 0.5 thành 1
let f = Math.round(7.66);
console.log(f)

// 6 Làm tròn x chữ số phần đơn vị
let g = 3.15642;
let grounded = Number(g.toFixed(2));
console.log(grounded);
console.log( typeof grounded);

// 7 Hàm Math.max() và Math.min()
let aa = 5;
let bb = 6;

let min = Math.min(aa , bb);
console.log("số nhỏ nhất là: " +min);

let max = Math.max(1 , 3 , 5, 7 , 9 ,100);
console.log("Số lớn nhất là: " +max);
