var D = new Date();
var NamSinh, NamHienTai;
NamHienTai = D.getYear(); //Lưu năm hiện tại vào biến
do {
    NamSinh = prompt("Bạn sinh năm bao nhiêu : ", "");
} while (parseInt(NamSinh) > NamHienTai); //Nhập lại nếu Năm sinh>năm hiện tại
alert("Tuổi của bạn bây giờ là : " + (NamHienTai - NamSinh));