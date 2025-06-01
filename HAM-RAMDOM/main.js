// Hàm Math.ramdom
// 1 Random trong khoảng [0->1];
let randomValue = Math.random();
console.log("Số ngẫu nhiễn từ 0 -> 1 là: "+randomValue);

// 3 Ramdom số lớn hơn 1 
let randomValue2 = Math.random() * 10;
console.log("Số ngẫu nhiên từ 0 đến sát 10 là :" +randomValue2);

// 3 Ramdom số nguyên
let randomValue3 = parseInt(Math.random() * 10);
console.log("Số ngẫu nhiên số nguyên từ 0 đến sát 10 là :" +randomValue3);

// 4 Ramdom số nguyên 
let randomValue4 = parseInt(Math.random() * 30) + 10;
console.log("Số ngẫu nhiên số nguyên từ 0 đến sát 40 là :" +randomValue4);