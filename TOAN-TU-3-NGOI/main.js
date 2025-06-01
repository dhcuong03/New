// Toán tử 3 ngôi
// VD
// let number = 10;
// let message = number >= 0 ? "Số dương" : "Số âm";
// console.log(message);

// let number1 = 3;
// let check = number1 <= 0  ? "Số dương" : "Số âm";
// console.log(check);

// Bài tập : VIết chương trình nhập vào điểm trung bình , và xuất ra kết quả theo tiêu chuẩn 
let a = parseFloat(prompt("Mời bạn nhập điểm Toán"));
let b = parseFloat(prompt("Mời bạn nhập điểm Văn"));
let c = parseFloat(prompt("Mời bạn nhập điểm Anh"));

let dtb = (a+b+c)/3;
let check = dtb >= 8 ? "Giỏi":
            dtb >= 6.5 ? "Khá":
            dtb >= 5 ? "Trung bình":
            "Yếu";
console.log("Điểm trung bình của bạn là " +dtb.toFixed(2));
console.log("Bạn xếp loại: " +check);
