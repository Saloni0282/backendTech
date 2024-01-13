
const MenuModel = require('../models/menu.model');

const createMenu = async (req, res) => {
    try {
        const { menuName } = req.body;
        const Menu = await MenuModel.create({
            menuName
        });
        return res.status(201).send(Menu);
    } catch (error) {
        console.error("Error creating menu:", error);
        return res.status(500).send({ error: "Internal Server Error" });
    }
};

module.exports = { createMenu };
