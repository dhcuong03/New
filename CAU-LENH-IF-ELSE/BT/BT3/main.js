// bài tập 3 tính năm nhuận , không nhuận
let nam = parseInt(prompt("Mời bạn nhập vào 1 năm bất kỳ:"))
if(nam % 4 === 0 && nam % 100 !== 0){
    console.log("Năm này là năm nhuận..");
}else if(nam % 400 === 0){
     console.log("Năm này là năm nhuận..");
}else{
     console.log("Năm này là năm không nhuận..")
}