const db = require(`../../helpers/db`);
const PlanetTable = process.env.PLANET_TABLE;
const { _headers_cors } = require('../helper/utils')

class PlanetRepository {
    constructor() {
        this.tableName = 'planeta';
    }

    async getAll() {
        const params = {
            TableName: this.tableName
        };

        return await db.scan(params).promise();
    }

    async create(data) {
        const params = {
            TableName: this.tableName,
            Item: {
                UserID: uuidv4(),
                Username: data.Username,
            },
        };

        await db.put(params).promise();

        return params.Item;
    }
}

module.exports = new PlanetRepository();