const PlanetService = require(`../services/PlanetService`);
const { _headers_cors } = require('../helper/utils')

class PlanetController {

    async getAll(req, res) {
        const response = { statusCode: 200, headers: _headers_cors };

        const data = await PlanetService.getAll()

        return data;
    }

    async create(req, res) {
        const response = { statusCode: 200, headers: _headers_cors };

        const data = await PlanetService.create()

        response.body = JSON.stringify({
            data: data,
            status: true
        })
        return response;
    }

}

module.exports = new PlanetController()