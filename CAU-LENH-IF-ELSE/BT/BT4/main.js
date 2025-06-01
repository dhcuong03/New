// BT : Viết chương trình nhập vào 1 vào 1 tháng bất kì , kiếm tra tháng đó có bao nhiêu ngày
let Month = parseInt(prompt("Mời bạn nhập vào 1 tháng:"));
if(Month === (1,3,5,7,9,11)){
    console.log("Tháng đó có 31 ngày")
}else if(Month === (4,6,8,10,12)){
    console.log("Tháng đó có 30 ngày")
}else if(Month === 2  ){
    let Year = parseInt(prompt("Mời bạn nhập vào năm:"))
    if(Year % 4 === 0 && Year % 100 !== 0){
        console.log("Tháng 2 có 29 ngày");
    }else{
        console.log("Tháng 2 có 28 ngày");
    }
}else{
    console.log("Tháng không hợp lệ , vui lòng nhập lại")
}
    
