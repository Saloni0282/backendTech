const ParentModel = require('../models/parentmenu.model');

const createParent = async (req, res) => {
    try {
        const Parent = await ParentModel.create({
            menu_id: req.body.menu_id,
            parentMenu: req.body.parentMenu
        });
        const parentData = await Parent.save();
        return res.status(201).send(parentData);
    } catch (error) {
        console.error("Error creating parent:", error);
        return res.status(500).send({ error: "Internal Server Error" });
    }
};

const parentAllData = async (req, res) => {
    try {
        let data = await ParentModel.find().populate({
            path: 'menu_id'
        });
        res.send(data);
    } catch (error) {
        console.error("Error fetching parent data:", error);
        res.status(500).send({ error: "Internal Server Error" });
    }
};

module.exports = { createParent, parentAllData };

