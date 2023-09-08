
function signUp() {
    var nam = document.getElementById("#Nam").value;
    var nu = document.getElementById("#Nu").value;
    var email = document.querySelector("#taiKhoan").value;
    var password = document.querySelector("matKhau").value;
    var name = document.querySelector("#hoTen").value;
    var gender = kiemTraGioiTinh(nam, nu);
    var phone = document.querySelector("#SDT").value;
    var user = new User(email, password, name, gender, phone);
    console.log(user)
    var promiseObj = axios({
        method: 'post',
        url: 'https://shop.cyberlearn.vn/api/Users/signup',
        data: user
    });
    promiseObj.then(function (result) {
        console.log(result);

    });
    promiseObj.catch(function (error) {
        //thất bại
        console.log(error);
    })
    document.querySelector("#btn__home").click();
}
function kiemTraGioiTinh(radio1, radio2) {
    var loai = ""
    if (radio1.checked) {
        loai = "Nam"
    }
    else if (radio2.checked) {
        loai = "Nữ"
    }

    else {
        alert("Vui lòng chọn giới tính")
    }
    return loai;
}
