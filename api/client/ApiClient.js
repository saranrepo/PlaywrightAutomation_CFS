const Endpoints =
require('../endpoints/Endpoints');


const Constants =
require('../../utils/Constants');


class ApiClient {


    constructor(request){

        this.request = request;

        this.baseURL = Constants.API_BASE_URL;

    }


    async createPet(payload){


        return await this.request.post(

    `${this.baseURL}${Endpoints.PET}`,

    {
        data:payload
    }

);


    }



    async getPet(id){


        return await this.request.get(

    `${this.baseURL}${Endpoints.PET_BY_ID(id)}`

);


    }



    async updatePet(payload){


        return await this.request.put(

    `${this.baseURL}${Endpoints.PET}`,

    {
        data:payload
    }

);


    }



    async deletePet(id){


        return await this.request.delete(

    `${this.baseURL}${Endpoints.PET_BY_ID(id)}`

);


    }


}


module.exports = ApiClient;