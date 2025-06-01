// let i = 1;
// while(i <= 5){
//     console.log(i);
//     i++
// }

// BT: viết chương trình nhập vào số n từ bàn phím. n là số nguyên nằm trong khoảng từ 1 - 99 , nhập sai nhập lại
let n = parseInt(Number(prompt("Mời bạn nhập vào 1 số nguyên từ 1 - 99 :")))
while(isNaN(n) || n < 1 || n > 99 || n % 1 !== 0 ){
    n = Number(prompt("Số bạn nhập không hợp lệ , vui lòng nhập lại trong khoảng từ 1 đến 99"));
}
console.log(n);
alert("Số bạn vừa nhập hợp lệ " +n)

