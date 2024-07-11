const PlanetService = require(`../services/PlanetService`);
const { _headers_cors } = require('../helpers/utils')

class PlanetController {

    async getAll(req, res) {
        const response = { statusCode: 200, headers: _headers_cors };

        const data = await PlanetService.getAll()

        response.body = JSON.stringify({
            data: data,
            status: true
        })
        return response;
    }

    async createPlanet(req, res) {
        const response = { statusCode: 200, headers: _headers_cors };
        
        const jsonData = JSON.parse(req.body);
        const data = await PlanetService.createPlanet(jsonData)
        
        response.body = JSON.stringify({
            data: data,
            status: true
        })
        return response;
    }

}

module.exports = new PlanetController()