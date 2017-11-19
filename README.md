# JustinDB-Serverless-example

## Brief intro
Aim of the JustinDB is to be publicly available hosted DB seamlessly integrating with serverless applications. 
This repository shows how one can start using it.

This repository also helps to discover the easiest yet effiecient possible way of combining with serverless framework. 

## How to use it
1. Clone the repository and open it.
2. Install dependencies:
    * `npm install serverless -g` // install serverless library
    * `npm install justindb` // it downloads last JustinDB nodejs client revision
3. Prepare working local JustinDB cluster. Current justindb npm version v0.0.2 hits to local cluster against localhost:9000 address.
    1. PUT: `sls invoke local --function put --data "e2499aad-fa9f-49d7-ef9e-e3379ecc1147"` (sls -> serverless)
    2. GET `sls invoke local --function get --data "e2499aad-fa9f-49d7-ef9e-e3379ecc1147"`
