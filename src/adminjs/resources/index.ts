import { ResourceWithOptions } from "adminjs";
import { Category, Course, Episode, User } from "../../models";
import { categoryResourceOptions } from "./category";
import { courseResourceOptions, couseResourceFeatures } from "./course";
import { episodeResourceFeatures, episodeResourceOptions } from "./episode";
import { userResourceOptions } from "./user";

export const adminJsResources: ResourceWithOptions[] = [ 
    {
        resource: Category,
        options: categoryResourceOptions

    },
    {
        resource: Course,
        options: courseResourceOptions,
        features: couseResourceFeatures
    },
    {
        resource: Episode,
        options: episodeResourceOptions,
        features: episodeResourceFeatures
    },
    {
        resource: User,
        options: userResourceOptions,
    },
]