const express = require('express');
const router = express.Router();
const { createMenu }= require('../controllers/menu.controller')
const { createParent, parentAllData } = require('../controllers/parent.controller')

router.post('/menu', createMenu)
router.post('/parentMenu',createParent);
router.get('/allData', parentAllData)

module.exports = {router}