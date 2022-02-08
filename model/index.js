//DATABASE
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const adapter = new FileSync('./database/db.json');
const db = low(adapter);

const model = {

    getFind(item1, item2, item3) {
        return db.get(item1).find({
            [item2]: item3
        }).value();
    },

    getAdd(item1, item2) {
        db.get(item1).push(item2).write();
    },

    getBaiVietHome() {
        let n = db.get("baidang").size().value();
        return db.get("baidang").filter(function(item, index) {
            return index > n - 7;
        }).value();

    },
    getIdDanhMuc(name) {
        return db.get("danhmuc").find({ name: name }).value();
    },

    getBaiVietDanhMuc(value) {
        return db.get("baidang").filter({ iddanhmuc: value }).value();
    },

    getAllDanhMuc() {
        return db.get("danhmuc").value();
    },
    delete(item1, item2, item3) {
        db.get(item1)
            .remove({
                [item2]: item3
            })
            .write()
    },
    getBaiDang(item) {
        return db.get("baidang").filter({ iddanhmuc: item }).value();
    },


}

module.exports = model;