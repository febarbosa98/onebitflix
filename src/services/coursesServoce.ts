import { Course } from "../models"

export const coursesService = {
    findbyIdWithEpisodes: async (id: string) =>{
        const coursesWithEpisodes= await Course.findByPk(id, {
            attributes: [
                'id',
                'name',
                'synopsis',
                ['thumbnail_url', 'thumbnailUrl']
            ],
            include:{
                association: 'Episodes',
                attributes: [
                    'id',
                    'name',
                    'synopsis',
                    'order',
                    ['video_url', 'videoUrl'],
                    ['seconds_long', 'secondsLong'],
                ],
                order: [['order', 'ASC']],
                separate: true
            }
        })
        return coursesWithEpisodes
    }
}