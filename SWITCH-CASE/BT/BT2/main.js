// cách xuất chuỗi xuống dòng 
console.log("tôi là Đỗ Hùng Cường\n Hiện tại là đang 22 tuổi")


let search = Number(prompt(`
    Chọn cách tìm kiếm 
        1.Tìm theo tên 
        2.Tìm theo tên tác giả 
        3.Tìm theo nhà xuất bản 
        4.Tìm theo tiêu đề
`));

switch(search){
    case 1:
        alert("Bạn đã chọn tìm theo tên")
        break;
    case 2:
        alert("Bạn đã chọn tìm theo tên tác giả")
        break;
    case 3:
        alert("Bạn đã chọn tìm theo nhà sản xuất")
        break;
    case 4:
        alert("Bạn đã chọn tìm theo tiêu đề")
        break;
    default :
        alert("Phím bấm không hợp lệ")
        break;
}