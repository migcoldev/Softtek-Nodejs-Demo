const SwapiRepository = require(`../data/SwapiRepository`);

class SwapiService {

    async getFilms() {
        const data = await SwapiRepository.getFilms();

        return data;
    }

    async getPeople() {
        const data = await SwapiRepository.getPeople();

        return data;
    }

}

module.exports = new SwapiService()