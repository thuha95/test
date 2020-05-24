var D = new Date();
var NamSinh, NamHienTai;
NamHienTai = D.getYear();
do {
    NamSinh = prompt("Bạn sinh năm bao nhiêu : ", "");
} while (parseInt(NamSinh) > NamHienTai);
alert("Tuổi của bạn bây giờ là : " + (NamHienTai - NamSinh));