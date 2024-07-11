const PlanetRepository = require(`../data/PlanetRepository`);

class PlanetService {

    async getAll() {
        const data = await PlanetRepository.getAll();

        return data;
    }

    async createPlanet(data) {
        return await PlanetRepository.createPlanet(data);
        
    }

}

module.exports = new PlanetService()