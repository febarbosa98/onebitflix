// src/controllers/favoritesController.ts

import { Response } from 'express'
import { authenticatedRequest } from "../middlewares/auth";
import { favoriteService } from '../services/favoriteService'

export const favoritesController = {
 // POST /favorites
  save: async (req: authenticatedRequest, res: Response) => {
    const userId = req.user!.id
    const { courseId } = req.body

    try {
      const favorite = await favoriteService.create(userId, courseId)
      return res.status(201).json(favorite)
    } catch (err) {
      if (err instanceof Error) {
        return res.status(400).json({ message: err.message })
      }
    }
  }
}