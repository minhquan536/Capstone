function DanhSachSanPham(){
    this.mangSPAdd = [];

    this.themSP = function (sp) {
        this.mangSPAdd.push(sp);
    }
    this.xoaSP = function (id) {
        
        var indexXoa = this.mangSPAdd.findIndex(function (sp) {
            return sp.id === id
        })
        console.log(indexXoa);
        this.mangSPAdd.splice(indexXoa, 1);
    }
}