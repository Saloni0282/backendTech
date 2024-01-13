const mongoose = require('mongoose');

const menuSchema = new mongoose.Schema({
    menuName:String,
});

const MenuModel = mongoose.model('Menu', menuSchema)
module.exports = MenuModel