const GlobalObjects = require('./GlobalObjects');
var globalObjects = new GlobalObjects();
module.exports = globalObjects;

// GRPC SETUP
const grpc = require('grpc');
const protoLoader = require('@grpc/proto-loader');
const PROTO_PATH = __dirname + '/proto/authservice.proto';
const packageDefinition = protoLoader.loadSync(PROTO_PATH, { keepCase: true, longs: String, enums: String, defaults: true, oneofs: true });
const authservice_package = grpc.loadPackageDefinition(packageDefinition).authservice_package;
// GRPC SETUP

async function bindMock(call, callback) {
  await globalObjects.controller.mock();
  callback(null, null);
}

async function bindLogin(call, callback) {
  let r = await globalObjects.controller.guardLogin(call.request);
  callback(null, r);
}

//Setup
async function bindSetupAddAdmin(call, callback) {
  globalObjects.controller.mediator.adminRepository.setupAddAdmin(call.request);
  callback(null, {code: 200})
}

function main() {
  console.log("Server running...");
  server = new grpc.Server();
  server.addService(authservice_package.AuthService.service, {
    Mock: bindMock,
    Login: bindLogin,
    SetupAddAdmin: bindSetupAddAdmin
  });

  if (process.env.AUTH_SERVICE_SERVICE_PORT != undefined) {
    server.bind("0.0.0.0" + ":" + process.env.AUTH_SERVICE_SERVICE_PORT, grpc.ServerCredentials.createInsecure());
  } else {
    server.bind("localhost:50001", grpc.ServerCredentials.createInsecure());
  }
  server.start();
}

main();
