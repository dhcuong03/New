// nhập vào 1 tháng bất kỳ sử dụng switch case 
let month = parseInt(prompt("Mời bạn nhập vào 1 tháng "))
switch(month){
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        console.log("Tháng có 31 ngày");
        break;
    case 4 :
    case 6 :
    case 9 :
    case 11:
        console.log("Tháng có 30 ngày");
        break;
    case 2 :
        console.log("Tháng có 28 , 29 ngày")
        break;
    default :
        console.log("Không hợp lệ vì chỉ có 12 tháng")
}