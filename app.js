function edad() {
    let d1 = document.getElementById('dia').value;
    let m1 = document.getElementById('mes').value;
    let a1 = document.getElementById('anio').value;

    let date = new Date();
    let d2 = date.getDate();
    let m2 = 1 + date.getMonth();
    let a2 = date.getFullYear();

    let mes = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    if (d1 > d2){
        d2 = d2 + mes[m2 - 1];
        m2 = m2 - 1;
    }

    if (m1 > m2) {
        m2 = m2 + 12;
        a2 = a2 - 1;
    }

    let d = d2 - d1;
    let m = m2 - m1;
    let a = a2 - a1;

    document.getElementById('age').innerHTML = "Tu edad es " + a + " años, " + m + " meses, y " + d + " dia/s.";
}