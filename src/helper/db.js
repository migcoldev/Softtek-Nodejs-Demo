import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient } from "@aws-sdk/lib-dynamodb";

const dynamoDBClient = new DynamoDBClient({
    credentials: {
      accessKeyId: process.env.accessKeyId,
      secretAccessKey: process.env.secretAccessKey,
    },
    region: process.env.region,
    endpoint: process.env.endpoint,
  });

const db = DynamoDBDocumentClient.from(dynamoDBClient, {
convertEmptyValues: true,
});

module.exports = db;