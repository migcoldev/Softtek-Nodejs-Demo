const swapi = require('swapi-node');
const axios = require('axios');

class SwapiRepository {
    constructor() {
        this.baseUrl = 'https://swapi.dev/api/';
    }

    async getFilms() {
        //Utilizando swapi-node para consultar API
        return await swapi.get(this.baseUrl + 'films').then((result) => {
            return result;
        });
    }

    async getPeople() {
        try {
            //Utilizando Axios para consultar API
            const response = await axios.get(this.baseUrl + 'people');
            console.log(response);
            return response.data;
        } catch (error) {
            console.log(error);
            return null;
        }


        //return await db.get(params).promise();
    }
}

module.exports = new SwapiRepository();