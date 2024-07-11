const PlanetRepository = require(`../data/PlanetRepository`);
import { v4 as uuidv4 } from 'uuid';

class PlanetService {

    async getAll() {
        const data = await PlanetRepository.getAll();

        return data;
    }

    async create(data) {
        return await PlanetRepository.create({
            Username: data.Username
        });
    }

}

module.exports = new PlanetService()