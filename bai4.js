var D = new Date();
var myYear, recentlyYear;
recentlyYear = D.getYear(); // Lưu năm hiện tại vào biến
myYear = prompt("Bạn sinh năm bao nhiêu ? : ", "");
alert("Tuổi của bạn bây giờ là : " + (recentlyYear - myYear));