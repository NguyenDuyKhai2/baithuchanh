var danhSachAnh = [
    '../img/banner0.gif',
    '../img/banner1.png',
    '../img/banner2.png',
    '../img/banner3.png',
    '../img/banner4.png',
    '../img/banner5.png',
    '../img/banner6.png',
    '../img/banner7.png',
    '../img/banner8.png',
    '../img/banner9.png'
];

var index = 0;

function chuyenAnh() {
    index++;
    if(index >= danhSachAnh.length)index = 0;
    var anh=document.getElementById("anh");
    anh.src = danhSachAnh[index];
}
setInterval("chuyenAnh()", 2000);