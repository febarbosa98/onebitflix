import { Request, Response } from "express"
import { coursesService } from "../services/coursesServoce"
import { getpaginationParams } from "../helpers/getpaginationParams"
import { authenticatedRequest } from "../middlewares/auth"
import { likeService } from "../services/LikeService"
import { favoriteService } from "../services/favoriteService"

export const coursesController = {
    // GET /courses/featured
    featured: async (req: Request, res: Response) => {
        try {
            const featuredCourses = await coursesService.getRandomFeaturedCourses()
            return res.json(featuredCourses)

        } catch (err) {
            if(err instanceof Error){
                return res.status(400).json({message: err.message})
            }
        }
    },
    // GET /courses/newest
    newest: async (req: Request, res: Response) => {
        try {
            const newestCourses = await coursesService.getTopTenNewest()
            return res.json(newestCourses)

        } catch (err) {
            if(err instanceof Error){
                return res.status(400).json({message: err.message})
            }
        }
    },
    popular: async (req: Request, res: Response) => {
        try {
            const topTen = await coursesService.getTopTenByLikes()
            return res.json(topTen)

        } catch (err) {
            if(err instanceof Error){
                return res.status(400).json({message: err.message})
            }
        }
    },



       // GET /courses/search?name=
       search: async (req: Request, res: Response) => {
        const { name } = req.query
        const [page, perPage] = getpaginationParams(req.query)

        try {
            if (typeof name !== 'string') throw new Error('name param must be of type string')
            const courses = await coursesService.findByName(name, page, perPage)
            return res.json(courses)
        } catch (err) {
            if (err instanceof Error) {
                return res.status(400).json({ message: err.message })
            }
        }
    },

    // GET /courses/:id
    show: async (req: authenticatedRequest, res: Response) => {
        const userId = req.user!.id
        const courseId = req.params.id

        try {
            const course = await coursesService.findbyIdWithEpisodes(courseId)

            if (!course) return res.status(404).json({message: 'curso não encontrado'})

                const liked = await likeService.isLiked(userId, Number(courseId))
                const favorited = await favoriteService.isFavorited(userId, Number(courseId))
                return res.json({...course.get(), favorited, liked})
                    
        } catch (err) {
            if(err instanceof Error){
                return res.status(400).json({message: err.message})
            }
        }
    }

}