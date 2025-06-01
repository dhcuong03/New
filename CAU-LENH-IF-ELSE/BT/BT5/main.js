// VIết phương trình giải phương trình bậc 2 : ax^2 + bx + c = 0
let a = parseInt(prompt("Mời bạn nhập vào số a"))
let b = parseInt(prompt("Mời bạn nhập vào số b"))
let c = parseInt(prompt("Mời bạn nhập vào số c"))
// ax^2 + bx + c = 0
// Tính Delta
let Delta = b*b - 4 * a * c;
// Kiểm tra Delta
if(Delta > 0){
    let x1 = (-b + Math.sqrt(Delta)) / 2 * a;
    let x2 = (-b - Math.sqrt(Delta)) / 2 * a;
    console.log("x1 = " +x1)
    console.log("x2 = " +x2)
}else if(Delta === 0){
    let x1 = -b / 2 * a;
    console.log("ta được nghiệm kép là x1 = x2 = " +x1)
}else{
    console.log("phương trình vô nghiệm")
}