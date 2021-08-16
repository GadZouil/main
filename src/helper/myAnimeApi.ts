
const jikanjs  = require('jikanjs');

class MyAnimeApi {

    loadTopAnime = (page: number = 1) => {
        return jikanjs.loadTop('anime', page)
    }

    loadTopManga = (page: number = 1) => {
        return jikanjs.loadTop('manga', page)
    }

}

export const myAnimeApi = new MyAnimeApi()
