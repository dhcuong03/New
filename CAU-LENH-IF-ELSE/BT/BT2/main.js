// bài tập vận dụng
// BT : Viết chương trình nhập vào chiều cao , cân nặng , tính BMI và xuất ra thông báo
let chieuCao = parseFloat(prompt("Mời bạn nhập vào chiều cao(m):"));
let canNang  = parseFloat(prompt("Mời bạn nhập vào cân nặng(kg):"));
let BMI = canNang/ Math.pow(chieuCao, 2);
if(BMI < 15){
    console.log("Thân hình quá gầy:")
}else if(BMI >= 15 &&  BMI < 16){
    console.log("Thân hình gầy")
}else if(BMI >= 16 && BMI < 18.5){
    console.log("Thân hình gầy")
}else if(BMI >= 18.5 && BMI < 25){
    console.log("Thân hình bình thường")
}else if(BMI >= 25 && BMI < 30){
    console.log("Thân hình hơi béo")
}else if(BMI >= 30 && BMI < 35){
    console.log("Thân hình béo")
}else if(BMI > 35){
    console.log("Thân hình quá khổ -_- ")
}else{
    console.log("Bó tay rồi :))")
}

    