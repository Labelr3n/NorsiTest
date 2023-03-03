import axios from "axios";

export default class API {
    static async getAll(limit = 10, page = 1) {
        
            const response = await axios.get('https://62f503b3535c0c50e767cf0c.mockapi.io/api/v1/tasks', {
                params: {
                    _limit: limit,
                    _page: page
                }
            })
            return response
       
    }
}