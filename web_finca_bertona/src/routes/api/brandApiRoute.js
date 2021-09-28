const express = require('express');
const router = express.Router();
const brandApiController = require('../../controllers/api/brandApiController');

router.get('/', brandApiController.list);
//router.get('/detail/:id', brandApiController.detail);


module.exports = router;