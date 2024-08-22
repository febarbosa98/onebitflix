import  express from "express"
import { categoriesCOntroller } from "./controllers/categoriesController"

const router = express.Router()

router.get('/categories', categoriesCOntroller.index)

export {router}