'use strict';

const justindb = require('justindb');
const client   = new justindb();

module.exports.get = async (event, context, callback) => {
  const response = {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*', // Required for CORS support to work
    },
    body: await client.get(event, 3)
  };

  callback(null, response);
};

module.exports.put = async (event, context, callback) => {
  const id = event

  const response = {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*', // Required for CORS support to work
    },
    body: await client.put(id, "this is test + " + id, 3)
  };

  callback(null, response);
};
