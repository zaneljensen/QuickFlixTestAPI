import { AppState } from "../AppState.js"
import { logger } from "../utils/Logger.js"
import { ottApi } from "./AxiosService.js"




class ContentService {
    async getMovies() {
        const res = await ottApi.get('')
        logger.log('Getting movies', res.data)
        AppState.movie = res.data.results


    }



}





export const contentService = new ContentService()