
function signUp() {
    var nam = document.getElementById("Nam");
    console.log(nam)
    var nu = document.getElementById("Nu");
    var email = document.querySelector("#taiKhoan").value;
    var password = document.querySelector("#matKhau").value;
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
        console.log("mnb");

    });
    promiseObj.catch(function (error) {
        console.log(error);
    })

}
document.querySelector("#sign__btn").onclick = signUp;

function kiemTraGioiTinh(radio1, radio2) {
    var loai = ""
    if (radio1.checked) {
        loai = "Nam"
    }
    else if (radio2) {
        loai = "Nữ"
    }
    else {
        alert("Vui lòng chọn giới tính")
    }
    return loai;
}
