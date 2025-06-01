
console.log("Xin chào!");
console.log("Xin chào cường!");
let number = Number(prompt("Nhập một số:"));
if (isNaN(number)) {
    alert("Vui lòng nhập một số hợp lệ!");
} else if (number % 2 === 0) {
    alert(number + " là số chẵn.");
} else {
    alert(number + " là số lẻ.");
}
