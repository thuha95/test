var D = new Date();
var myYear, recentlyYear;
recentlyYear = D.getYear();
myYear = prompt("Bạn sinh năm bao nhiêu ? : ", "");
alert("Tuổi của bạn bây giờ là : " + (recentlyYear - myYear));