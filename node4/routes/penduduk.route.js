'use strict'

const express = require('express')
const pendudukController = require('../controllers/penduduk.controller.js')
const router = new express.Router();

router.get("/", pendudukController.index)
router.post("/add", pendudukController.add)
router.put("/put/:id", pendudukController.put)
router.delete("/delete/:id", pendudukController.delete)

module.exports = router