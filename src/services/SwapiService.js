const SwapiRepository = require(`../data/SwapiRepository`);

class SwapiService {

    async getFilms() {
        const data = await SwapiRepository.getFilms();
        const peliculasTraducidas = data.results.map(pelicula => ({
            titulo: pelicula.title,
            episodio_id: pelicula.episode_id,
            rastreo_apertura: pelicula.opening_crawl,
            director: pelicula.director,
            productor: pelicula.producer,
            fecha_lanzamiento: pelicula.release_date,
            personajes: pelicula.characters,
            planetas: pelicula.planets,
            naves_estelares: pelicula.starships,
            vehiculos: pelicula.vehicles,
            especies: pelicula.species,
            creado: pelicula.created,
            editado: pelicula.edited,
            url: pelicula.url
        }));
        return peliculasTraducidas;
    }

    async getPeople() {
        const data = await SwapiRepository.getPeople();
        const peopleTraducidas = data.results.map(persona => ({
            nombre: persona.name,
            altura: persona.height,
            masa: persona.mass,
            color_cabello: persona.hair_color,
            color_piel: persona.skin_color,
            color_ojos: persona.eye_color,
            fecha_nacimiento: persona.birth_year,
            genero: persona.gender,
            planeta_origen: persona.homeworld,
            peliculas: persona.films,
            especies: persona.species,
            vehiculos: persona.vehicles,
            naves_estelares: persona.starships,
            creado: persona.created,
            editado: persona.edited,
            url: persona.url
        }));

        return peopleTraducidas;
    }

}

module.exports = new SwapiService()