const { DynamoDBClient, PutItemCommand, GetItemCommand, ScanCommand } = require("@aws-sdk/client-dynamodb");
const { DynamoDBDocumentClient, PutCommand, GetCommand } = require("@aws-sdk/lib-dynamodb");


const dynamoDBClient = new DynamoDBClient({
    credentials: {
      accessKeyId: process.env.ACCESS_KEY_ID,
      secretAccessKey: process.env.SECRET_ACCESS_KEY,
    },
    region: process.env.REGION
  });

const db = DynamoDBDocumentClient.from(dynamoDBClient, {
convertEmptyValues: true,
});

module.exports = db;