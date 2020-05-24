function bamgio() {
    num = document.the_form.kq.value;
    num = eval(num) + 1;
    document.the_form.kq.value = num;
    hengio = setTimeout("bamgio();", 1000);
}