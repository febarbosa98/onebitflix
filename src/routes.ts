import  express from "express"
import { categoriesCOntroller } from "./controllers/categoriesController"
import { coursesController } from "./controllers/coursesController"

const router = express.Router()

router.get('/categories', categoriesCOntroller.index)
router.get('/categories/:id', categoriesCOntroller.show)

router.get('/courses/featured', coursesController.featured)
router.get('/courses/newest', coursesController.newest)
router.get('/courses/search', coursesController.search)
router.get('/courses/:id', coursesController.show)

export {router}