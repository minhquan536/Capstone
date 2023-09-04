var dssp = new DanhSachSanPham();

function setLocalStorage() {
    localStorage.setItem("DSSP", JSON.stringify(dssp.mangSPAdd));
}

function hienThiSanPhamTrongGioHang(mang){
    var content ="";
    
    mang.map(function (sp) {
        content += `
        <tr class="">
            <th>${sp.id}</th>
            <th><img src="${sp.image}" width="44" height="44"></th>
            <th>${sp.name}</th>
            <th>${sp.price}</th>
            <th><input id="taolaymay" type="number" min="1" value="${sp.price}"></th>
            
            <th><p id"value-sp"></p></th>
            <th><button style="background-color: red; padding: 0 10px;border: none;" onclick="xoaSP(${sp.id})">X</button></th>
        </tr>
        `;

    })
    document.querySelector("#tbodySanPham").innerHTML = content;
}

function hienThiThongTinSP(mang){
    var content ="";
    
    mang.map(function (sp) {
        content = `
        <div class="container">
                        <div class="form__popupsp">
                            <div class="img__sp">
                                <img src="${sp.image}" alt="">
                            </div>
                            <div class="thongtin__sp">
                                <h1>${sp.name}</h1>
                                <p>${sp.description}</p>
                                <h3>SIZE</h3>
                                <div>${sp.size}</div>
                                <h3>$ ${sp.price}</h3>
                                <span class=verd13>
                                    <button class="chitetsp__bt__updown" onclick="HmFunction()"><b>-</b></button>
                                </span>
                                <input type="number" id="HNumber" class="verd15" value="0" min="1">
                                <span class=verd13>
                                    <button class="chitetsp__bt__updown" onclick="HaFunction()"><b>+</b></button>
                                </span>
                                <button class="chitetsp__bt" onclick="addGioHang(${sp.id-1})">add to cart</button>
                            </div>
                        </div>

                    </div>
        `;

    })
    document.querySelector("#popup-ctsp").innerHTML = content;
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
        var ccc = cc.content;
        console.log(ccc);

        dssp.themSPAll(ccc);
        //TODO: Hiển thị danh sách
        hienThiDS(cc.content);
    });

    promiseObj.catch(function (error) {
        // thất bại
        console.log(error);
        // alert("hệ thống đang bảo trì")
    });
}


function hienThiDS(mang) {
    var content = "";
    mang.map(function (sp) {
        content += `
        <div class="col-12 col-sm-6 col-lg-4 mb-4 ">
            <div class="card" onclick="showSPChiTiet(${sp.id-1})">
            <button class="form_over" type="button" data-toggle="modal" data-target="#exampleModal1">
                    <img src="${sp.image}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <p class="card_name">${sp.name}</p>
                        <p class="card_price">$ ${sp.price}</p>
                        <p class="card__hang">${sp.alias} </p>
                        <button id="bt__addCart" onclick="addGioHang(${sp.id-1})">Add to cart</button>
                    </div>
            </button>
            </div>
            
        </div>
        `
    })
    document.querySelector("#allsp").innerHTML = content;
}
{/* <a class="hidenasp" onclick="showSP(${sp.id-1})" tyle="text-decoration: none" href=""></a> */}




function addGioHang(id) {
    console.log(id);
//     var promiseObj = axios({
//         method: 'get',
//         url: 'https://shop.cyberlearn.vn/api/Product',
//     });//pending

//     // then, catch : thành công, thất bại
//     // result , response
//     promiseObj.then(function (result) {
//         // thành công
//         // console.log(result);// mỗi BE trả về kết quả khác nhau
//         // axios tự chuyển kiểu dữ liệu Json sang mảng(Array)
//         var cc = result.data
//         var ccc =cc.content
//         var cccc = ccc[id];

//         let ids = cccc.id;
//         let name = cccc.name; 
//         let alias = cccc.alias;
//         let price = cccc.price;
//         let description = cccc.description;
//         let size = cccc.size;
//         let shortDescription = cccc.shortDescription;
//         let quantity = cccc.quantity;
//         let image = cccc.image;
//         console.log(name);
//         console.log(alias);
//         console.log(price);


//         // console.log(cccc.name);
//         var sp = new SanPham(id,name,alias,price,1,size,shortDescription,quantity,image);
//         dssp.themSP(sp);
//         // console.log(dssp.mangSPAdd);
//         setLocalStorage();
//         getLocalStorage();
//         //TODO: Hiển thị danh sách
//         hienThiGioHang(dssp.mangSPAdd);
//         // tìm kiếm sp trong mangAll
// // kiêm tra ton tại ở mangAdd
// //=> chưa tồn tại thì thêm sp vao mangAdd
// //=> đã tồn tại rồi, tăng số lượng thêm 1
// //=> show ds gio hang
//     });
//     promiseObj.catch(function (error) {
//         // thất bại
//         console.log(error);
//         // alert("hệ thống đang bảo trì")
//     });
    console.log(dssp.mangSPAll[id]);
    // this.mangSPAll=[...ds] => chuyền id sẽ chuyền hết 
    dssp.themSP(dssp.mangSPAll[id]);
    setLocalStorage();

    getLocalStorage();

    //TODO: Hiển thị danh sách
    
    hienThiSanPhamTrongGioHang(dssp.mangSPAdd);
   
}

function getLocalStorage() {
    //kiểm tra có tồn tại localStorage cần lấy hay không
    if (localStorage.getItem("DSSP") != null) {
        // có local( có dữ liệu lưu trên web )
        // lấy dữ liệu từ JSON local => chuyển từ JSON sang mảng obj => lưu vào biến mangSV
        // JSON.parse
        dssp.mangSPAdd = JSON.parse(localStorage.getItem("DSSP"));
        hienThiSanPhamTrongGioHang(dssp.mangSPAdd);
    }
}


function xoaSP(id) {
    console.log(id);
    dssp.xoaSP(id);
    setLocalStorage();
    getLocalStorage();
}

function showSPChiTiet(id) {
    console.log(id);
    // var promiseObj = axios({
    //     method: 'get',
    //     url: 'https://shop.cyberlearn.vn/api/Product/getbyid?id='+id,
    // });//pending
    // promiseObj.then(function (result) {
    //     console.log(result.data.content);
    //     dssp.luuSPChiTiet(result.data.content);
    //     // console.log(dssp.luuSPChiTiet(result.data.content));
    // });
    // promiseObj.catch(function (error) {
    //     // thất bại
    //     console.log(error);
    //     // alert("hệ thống đang bảo trì")
    // });
    dssp.luuSPChiTiet(dssp.mangSPAll[id]);
    console.log(dssp.spChiTiet);
    hienThiThongTinSP(dssp.spChiTiet);
}

//dã xử lý localstorage => lưu token vào local

// function checkAuth (){
//   const token=  localStorage.getItem('token')
//   return dssp.uses.find(user=>user.token===token)
// }
// // cho sự kiện dặt hàng và thêm vào gio hang
// function active (){
//  return  checkAuth?true:false
// }

// lấy dánh sách và hiển thị ngay khi user vào trang web
//! Chạy sk nên để hết dưới cùng cho dẽ flow, cái nào khai báo thì để hết lên trên
Product();

//! ri trừ điểm cấu trúc code ah nghe
getLocalStorage()