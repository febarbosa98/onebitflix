import  express from "express"
import { categoriesCOntroller } from "./controllers/categoriesController"
import { coursesController } from "./controllers/coursesController"
import { episodeController } from "./controllers/episodeController"
import { authController } from "./controllers/authController"

const router = express.Router()

router.post('/auth/register', authController.register)
router.post('/auth/login', authController.login)

router.get('/categories', categoriesCOntroller.index)
router.get('/categories/:id', categoriesCOntroller.show)

router.get('/courses/featured', coursesController.featured)
router.get('/courses/newest', coursesController.newest)
router.get('/courses/search', coursesController.search)
router.get('/courses/:id', coursesController.show)

router.get('/episodes/stream', episodeController.stream)

export {router}