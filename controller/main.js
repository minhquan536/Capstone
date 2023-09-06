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
            <th>
                <span class=verd13>
                    <button class="chitetsp__bt__updown" onclick="HmFunction()"><b>-</b></button>
                </span>
                <input type="number" id="HNumber" class="verd15" value="1" min="1">
                <span class=verd13>
                    <button class="chitetsp__bt__updown" onclick="HaFunction()"><b>+</b></button>
                </span>
            </th>
            
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
