import { URL_BASE_PATH } from '../client.config'

export const getImagePath = (imageUrl: string): string => {
    return `${URL_BASE_PATH}${imageUrl}`
}

export const getFilePath = (fileUrl: string): string => {
    return `${URL_BASE_PATH}${fileUrl}`
}
