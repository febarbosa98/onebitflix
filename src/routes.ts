import  express from "express"
import { categoriesCOntroller } from "./controllers/categoriesController"
import { coursesController } from "./controllers/coursesController"
import { episodeController } from "./controllers/episodeController"
import { authController } from "./controllers/authController"
import { ensureAuth, ensureAuthViaQuery } from "./middlewares/auth"
import { favoritesController } from "./controllers/favoritesController"
import { likeController } from "./controllers/likeController"

const router = express.Router()

router.post('/auth/register', authController.register)
router.post('/auth/login', authController.login)

router.get('/categories',ensureAuth, categoriesCOntroller.index)
router.get('/categories/:id', ensureAuth, categoriesCOntroller.show)

router.get('/courses/featured', ensureAuth, coursesController.featured)
router.get('/courses/newest', coursesController.newest)
router.get('/courses/popular',ensureAuth, coursesController.popular)
router.get('/courses/search', ensureAuth, coursesController.search)
router.get('/courses/:id', ensureAuth, coursesController.show)

router.get('/episodes/stream', ensureAuthViaQuery, episodeController.stream)

router.get('/favorites', ensureAuth, favoritesController.index)
router.post('/favorites', ensureAuth, favoritesController.save)
router.delete('/favorites/:id', ensureAuth, favoritesController.delete)

router.post('/likes', ensureAuth, likeController.save)
router.delete('/likes/:id', ensureAuth, likeController.delete)

export {router}