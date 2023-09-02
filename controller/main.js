function setLocalStorage() {
    localStorage.setItem("DSSP", JSON.stringify(dssp.mangSPAdd));
}

function hienThiGioHang(mang){
    var content ="";
    
    mang.map(function (sp) {

        // var cc = document.querySelector("#quantity").value;
        // console.log(cc);
        content += `
        <tr class="${sp.name+"_"+sp.id}">
            <th>${sp.id}</th>
            <th><img src="${sp.image}" width="44" height="44"></th>
            <th>${sp.name}</th>
            <th>${sp.price}</th>
            <th><input type="number" id="quantity" value="1" min="1" max="99"></th>
            
            <th>${sp.price}</th>
            <th><button style="background-color: red; padding: 0 10px;border: none;" onclick="xoaSP(${sp.id})">X</button></th>
        </tr>
        `
    })
    document.querySelector("#tbodySanPham").innerHTML = content;
}


/**
 *? Hiển thị
 * Function layDanhSachSP
 *          Call API
 *          => lấy thành công => hienThiDanhSach
 *          
 *          ngược lại lấy không thành công => thông báo lỗi
 */
function Product() {
    var promiseObj = axios({
        method: 'get',
        url: 'https://shop.cyberlearn.vn/api/Product',
    });//pending

    // then, catch : thành công, thất bại
    // result , response
    promiseObj.then(function (result) {
        // thành công
        console.log(result);// mỗi BE trả về kết quả khác nhau
        // axios tự chuyển kiểu dữ liệu Json sang mảng(Array)
        var cc = result.data
        console.log(cc.content);
        console.log(result.data);
        //TODO: Hiển thị danh sách
        hienThiDS(cc.content);
    });

    promiseObj.catch(function (error) {
        // thất bại
        console.log(error);
        // alert("hệ thống đang bảo trì")
    });
}
// lấy dánh sách và hiển thị ngay khi user vào trang web
Product();

function hienThiDS(mang) {
    var content = "";
    mang.map(function (sp) {
        content += `
        <div class="col-12 col-sm-6 col-lg-3 mb-4 ">
            <div class="card">
                <img src="${sp.image}" class="card-img-top" alt="...">
                <div class="card-body">
                    <p class="card_name">${sp.name}</p>
                    <p class="card_price">$ ${sp.price}</p>
                    <p class="card__hang">${sp.alias} </p>
                    <button class="" onclick="addGioHang(${sp.id-1})">Add</button>
                </div>
            </div>
        </div>
        `
    })
    document.querySelector("#allsp").innerHTML = content;
}


var dssp = new DanhSachSanPham();


function addGioHang(id) {
    console.log(id);
    var promiseObj = axios({
        method: 'get',
        url: 'https://shop.cyberlearn.vn/api/Product',
    });//pending

    // then, catch : thành công, thất bại
    // result , response
    promiseObj.then(function (result) {
        // thành công
        // console.log(result);// mỗi BE trả về kết quả khác nhau
        // axios tự chuyển kiểu dữ liệu Json sang mảng(Array)
        var cc = result.data
        var ccc =cc.content
        var cccc = ccc[id];

        let ids = cccc.id;
        let name = cccc.name; 
        let alias = cccc.alias;
        let price = cccc.price;
        let description = cccc.description;
        let size = cccc.size;
        let shortDescription = cccc.shortDescription;
        let quantity = cccc.quantity;
        let image = cccc.image;
        console.log(name);
        console.log(alias);
        console.log(price);


        // console.log(cccc.name);
        var sp = new SanPham(id,name,alias,price,description,size,shortDescription,quantity,image)
        dssp.themSP(sp);
        console.log(dssp.mangSPAdd);

        setLocalStorage();

        getLocalStorage();

        //TODO: Hiển thị danh sách
        hienThiGioHang(dssp.mangSPAdd);
    });

    promiseObj.catch(function (error) {
        // thất bại
        console.log(error);
        // alert("hệ thống đang bảo trì")
    });
}

function getLocalStorage() {
    //kiểm tra có tồn tại localStorage cần lấy hay không
    if (localStorage.getItem("DSSP") != null) {
        // có local( có dữ liệu lưu trên web )
        // lấy dữ liệu từ JSON local => chuyển từ JSON sang mảng obj => lưu vào biến mangSV
        // JSON.parse
        dssp.mangSPAdd = JSON.parse(localStorage.getItem("DSSP"));
        hienThiGioHang(dssp.mangSPAdd);
    }
}
getLocalStorage()

function xoaSP(id) {
    console.log(id);
    dssp.xoaSP(id);
    setLocalStorage();
    getLocalStorage();
}
