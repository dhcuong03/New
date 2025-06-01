// VIết chương trình nhập vào tháng trong năm , cho biết tháng đó thuộc quý mấy
let Month = Number(prompt("MỜi bạn nhập vào 1 tháng"));
if(Month >= 1 && Month <= 3){
    console.log("Tháng", +Month ,"thuộc quý 1")
}else if(Month >= 4 && Month <= 6){
    console.log("Tháng", +Month ,"thuộc quý 2")
}else if(Month >= 7 && Month <= 9){
    console.log("Tháng", +Month ,"thuộc quý 3")
}else if(Month >= 10 && Month <= 12){
    console.log("Tháng", +Month ,"thuộc quý 4")
}else{
    console.log("Tháng khong hop le")
}
