import {Router} from 'express'
 import { addTask, deleteTask, getTaskById, updateTask } from '../controller/task.controller'
import { createTask ,UpdateTask} from '../zod/zod.task'
import validate from '../middleware/validate'

const router = Router()


router.post('/',validate(createTask),addTask)
router.get('/:id', getTaskById)
router.put('/:id',validate(UpdateTask), updateTask)
router.delete('/:id', deleteTask)




export default router 