import {Router} from 'express'
import { addUser, login } from '../controller/user.controller'
import validate from "../middleware/validate";
import { createUser, loginUser } from '../zod/zod.user';


const router = Router()


router.post('/',validate(createUser), addUser)
router.get('/',validate(loginUser)


export default router 