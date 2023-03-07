  import userRoter  from './user.route'
import taskRoute  from './task.route'
 
import {Router} from 'express'
const router = Router()


router.use('/user',userRoter)
router.use('/task',taskRoute)


export default router 