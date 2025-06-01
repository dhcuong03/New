// Kiểm tra điểm 
let score = parseFloat(prompt("Mời bạn nhập điểm"));
// câu lệnh điều kiên
if(score >= 8 && score <= 10){
    console.log("Bạn là học sinh giỏi");
}else if(score >= 6.5 && score < 8){
    console.log("Bạn là học sinh khá");
}else if(score >= 5 && score < 6.5){
    console.log("Bạn là học sinh trung bình");
}else{
    console.log("Bạn bị đúp");
}
