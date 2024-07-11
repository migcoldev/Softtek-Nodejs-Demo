const db = require(`../helpers/db`);
const { ScanCommand, PutCommand } = require("@aws-sdk/lib-dynamodb");
const PlanetTable = process.env.PLANET_TABLE;

class PlanetRepository {
    constructor() {
        this.tableName = PlanetTable;
    }

    async getAll() {
        const params = {
            TableName: this.tableName
        };

        try {
            const { Items } = await db.send(new ScanCommand(params));
            return Items;
        } catch (error) {
            console.error("Error al obtener planets de DynamoDB:", error);
            throw error;
        }
    }

    async createPlanet(data) {
        const { v4: uuidv4 } = require('uuid');
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
            await db.send(new PutCommand(params));
            return params.Item;
        } catch (error) {
            console.error("Error DB : ", error);
            throw error;
        }
    }
}

module.exports = new PlanetRepository();