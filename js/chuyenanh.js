var danhSachAnh = [
    '../img/banner0.png',
    '../img/banner1.png',
    '../img/banner2.png',
    '../img/banner3.png',
    
]

var index = 0;

function chuyenAnh() {
    index++;
    if(index >= danhSachAnh.length)index = 0;
    var anh=document.getElementById("anh");
    anh.src = danhSachAnh[index];
}
setInterval("chuyenAnh()", 2000);