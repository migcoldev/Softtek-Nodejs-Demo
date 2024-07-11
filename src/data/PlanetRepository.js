const db = require(`../../helpers/db`);
const PlanetTable = process.env.PLANET_TABLE;
const { _headers_cors } = require('../helper/utils')
import { v4 as uuidv4 } from 'uuid';

class PlanetRepository {
    constructor() {
        this.tableName = PlanetTable;
    }

    async getAll() {
        const params = {
            TableName: this.tableName
        };

        try {
            const { Items } = await client.send(new ScanCommand(params));
            return Items;
        } catch (error) {
            console.error("Error al obtener items de DynamoDB:", error);
            throw error;
        }
        //return await db.scan(params).promise();
    }

    async create(data) {
        const params = {
            TableName: this.tableName,
            Item: {
                PlanetId: uuidv4(),
                nombre: data.nombre,
                clima: data.clima,
                diametro: data.diametro,
                gravedad: data.gravedad,
                poblacion: data.poblacion,
                periodo_rotacion: data.periodo_rotacion,
                url: data.url
            },
        };

        try {
            await this.client.send(new PutCommand(params));
            return item;
        } catch (error) {
            console.error("Error DB : ", error);
            throw error;
        }
        //await db.put(params).promise();

        return params.Item;
    }
}

module.exports = new PlanetRepository();