import Router from 'koa-router'
import getHealth from './health/health'
import userToken from './users/index'

const router = new Router()

router.get('/health', getHealth)
router.post('/get-token', userToken.getToken)
router.get('/get-user/:token', userToken.getData)

export default router
