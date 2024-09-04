import { Response } from "express";
import { authenticatedRequest } from "../middlewares/auth";
import { likeService } from "../services/LikeService";

export const likeController = {
    // POST /likes
    save: async (req: authenticatedRequest, res: Response) => {
        const userId = req.user!.id
        const {courseId} = req.body

        try {
            const like = await likeService.create(userId, courseId)
            return res.status(201).json(like)
        } catch (err) {
            if (err instanceof Error) {
                return res.status(400).json({ message: err.message })
              }
        }
    },
    // DELETE /likes:id
    delete: async (req: authenticatedRequest, res: Response) => {
        const userId = req.user!.id
        const courseId = req.params.id
    
        try {
          await likeService.delete(userId, Number(courseId))
          return res.status(204).send()
        } catch (err) {
          if (err instanceof Error) {
            return res.status(400).json({ message: err.message })
              }
        }
    }
}