import { ResourceOptions } from "adminjs";

export const categoryResourceOptions : ResourceOptions = {
    navigation: 'Catálogo',
    editProperties: ['name', 'position'],
    filterProperties: ['name', 'position', 'cretedAt', 'updatedAt'],
    listProperties: ['id','name', 'position'],
    showProperties: ['id','name', 'position', 'cretedAt', 'updatedAt'],

}