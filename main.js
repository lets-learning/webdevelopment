function confirm(a, b) {

    result = false;

    if (a.length > 0 && b.length > 0) {
        result = (a == b)
    }

    return result;
}


function confirmForm() {

    p = document.getElementById('password');
    p1 = p.value;

    rp = document.getElementById('rpassword');
    p2 = rp.value;


    x = confirm(p1, p2)
    if (x == true) {
        alert("success")
        console.log("ccc");

    } else {
        alert("check your password")
        console.log("check your password");

        window.open('https://www.google.co.nz/');

    }

}