import { Request, Response } from "express";
import { categoryService } from "../services/categoryService";
import { getpaginationParams } from "../helpers/getpaginationParams";

export const categoriesCOntroller = {
    // GET /categories
    index: async (req: Request, res: Response) => {
        const [page, perPage] = getpaginationParams(req.query)
		
        try {
            const paginatedCategories = await categoryService.findAllPaginated(page, perPage)

            return res.json(paginatedCategories)
        } catch (error) {
            if(error instanceof Error){
                return res.status(400).json({message: error.message})
            }
        }
        
        
    },

    // GET /categories/:id
    show: async (req: Request, res: Response) =>{
        const { id } = req.params
        try {
            const category = await categoryService.findByIdWithCourses(id)
            return res.json(category)
        } catch (err) {
            if (err instanceof Error)
            return res.status(400).json({message: err.message})
        }

    }
}