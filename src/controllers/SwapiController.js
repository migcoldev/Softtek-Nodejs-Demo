const SwapiService = require(`../services/SwapiService`);
const { _headers_cors } = require('../helper/utils')

class SwapiController {

    async getFilms(req, res) {
        const response = { statusCode: 200, headers: _headers_cors };

        const data = await SwapiService.getFilms()


        response.body = JSON.stringify({
            data: data,
            status: true
        })
        return response;
    }

    async getPeople(req, res) {
        const response = { statusCode: 200, headers: _headers_cors };

        const data = await SwapiService.getPeople()

        response.body = JSON.stringify({
            data: data,
            status: true
        })
        return response;
    }

}

module.exports = new SwapiController()