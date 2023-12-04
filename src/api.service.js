import axios from 'axios'

const BASE_URI = 'https://youtube-v31.p.rapidapi.com'

const options = {
    params: {
        maxResults: '50',
    },
    headers: {
        'X-RapidAPI-Key': '704a08375bmsh5c5d8de26061087p1d6fc6jsnb62a52fe0f63',
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    },
}

export const ApiService = {
    async fetching(url) {
        const response = await axios.get(`${BASE_URI}/${url}`, options)
        return response.data
    },
}