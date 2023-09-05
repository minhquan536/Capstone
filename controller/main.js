function sign() {
    var email = document.querySelector("#taiKhoan").value;
    var password = document.querySelector("#matKhau").value;
    var name = document.querySelector("#hoTen").value;
    var gender = document.querySelector("#gender").value;
    var phone = document.querySelector("#SDT").value;
    var user = new user(email, password, name, gender, phone);
    var promiseObj = axios({
        method: 'post',
        url: 'https://shop.cyberlearn.vn/api/Users/signup',
        data: user
    });//pending
    promiseObj.then(function (result) {
        //thành công
        console.log(result);
    });
    promiseObj.catch(function (error) {
        console.log(error);
    })
}
sign();
