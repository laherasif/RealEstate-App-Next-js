import axios from 'axios'

export const baseUrl = 'https://bayut.p.rapidapi.com/properties/list'

export const fetchApi = async (url) => {
    let {data} = await axios.get(url, {
        headers: {
            'x-rapidapi-host': 'bayut.p.rapidapi.com',
            'x-rapidapi-key': '74c6a59e06msha26a52b45fe145fp118b28jsn4b367836b750'
        }
    })

    return data 

}



