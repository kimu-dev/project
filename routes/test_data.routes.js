const Router = require('express')
const router = new Router()

const dataController = require('/home/project/controllers/test_data.controllers')

router.post('/test_data', dataController.createData)
router.get('/test_data', dataController.getData)
router.get('/test_data/:id', dataController.getOneData)
router.put('/test_data', dataController.updateData)
router.delete('/test_data/:id', dataController.deleteData)

module.exports = router