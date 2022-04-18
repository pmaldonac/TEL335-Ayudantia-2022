const Router = require('koa-router')
const companies = require('./Company/company.route')

const router = new Router()

router.get('/companies', companies.getAllCompanies)
router.post('/companies', companies.searchByNameOrLocation)
router.get('/companies/byptype/:paymentType/:order', companies.searchByPaymentType)

module.exports = router