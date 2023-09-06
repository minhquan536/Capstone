function DanhSachSanPham(){
    // đây
    this.mangSPAll = [];
    this.spChiTiet =[];
    this.uses=[
        {id:'quanngungoc',
    pass:'1233123',
token:'1231231231231231'}
    ]

    // this.luuSPChiTiet = (sp)=>{
    //     this.spChiTiet={...sp}
    // }
    this.luuSPChiTiet = function (sp) {
        this.spChiTiet.push(sp);
    }
    //Luu ý cai nay, đay là thêm nhìu hay them 1 sp, nên dùng rest param để them nhìu sp
    this.themSPAll = function (ds) {
        //! đây đang sai nek, e dùng push để thêm một danh sách vào 1 danh sách, vậy mảng chỉ có 1 phần tử là mảng
        // this.mangSPAll.push(sp);
        // tạo một mảng mới bằng mảng hiện tại và mảng get từ api
        this.mangSPAll=[...ds]
        //for
        //for off và foreach, foreach thì ko quan tam index của các phần tử 
        //for in các phân tử của đối tượng

// rest parameter
    //    const {content,message,stateCode}= data

        // có thể viết gọn hơn 
        // this.mangSPAll=[...this.mangSPAll,...ds]

        // console.log(this.mangSPAll);
    }

    // đây là sao, thấy giống ở trên
    this.mangSPAdd = [];

    this.themSP = function (sp) {
        this.mangSPAdd.push(sp);
        // console.log(mangSPAdd);
    }
    this.xoaSP = function (id) {
        
        var indexXoa = this.mangSPAdd.findIndex(function (sp) {
            return sp.id === id
        })
        console.log(indexXoa);
        this.mangSPAdd.splice(indexXoa, 1);
    }

    this.xemSP = function (id) {
        // Đang bị lỗi ở đây phải ko
        console.log(this.mangSPAll,id)
        var spFind = this.mangSPAll.find(function(sp) {
            return sp.id === id;
        })
        console.log(spFind);
        return spFind;
    }

    this.sanphamdatontai = function (id) {
        
    }

    // this.addSP = function (id) {
    //     // Đang bị lỗi ở đây phải ko
    //     // console.log(this.mangSPAll,id)
    //     var spFind = this.mangSPAll.find(function(sp) {
    //         return sp == id;
    //     })
    //     console.log(spFind);
    //     return spFind;
    // }


    // this.kiemtrasp = function (id) {
    //     console.log("cap nhat ", id);

    //     // nếu tìm thấy => trả về vị trí tìm dc
    //     // ngược lại => -1 (mặc định nó thế)
    //     var indexUpdate = this.mangSPAdd.findIndex(function(sv){
    //         return sv.id == id.id;
    //     });

    //     if(indexUpdate > -1){
    //         // tìm thấy
    //         // svUpdate = class  update vừa lấy giá trị bên main gắn vài vị trí this.mangSV[indexUpdate]
    //         this.mangSPAdd[indexUpdate] = id;
    //     }
    // }

}



// tìm kiếm sp trong mangAll


// kiêm tra ton tại ở mangAdd


//=> chưa tồn tại thì thêm sp vao mangAdd


//=> đã tồn tại rồi, tăng số lượng thêm 1


//=> show ds gio hang


