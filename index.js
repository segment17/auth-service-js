const GlobalObjects = require('./GlobalObjects');
var globalObjects = new GlobalObjects();
module.exports = globalObjects;

// GRPC SETUP
const grpc = require('grpc');
const protoLoader = require('@grpc/proto-loader');
const PROTO_PATH = __dirname + '/proto/ubc.proto';
const packageDefinition = protoLoader.loadSync(PROTO_PATH, { keepCase: true, longs: String, enums: String, defaults: true, oneofs: true });
const ubc_package = grpc.loadPackageDefinition(packageDefinition).ubc_package;
// GRPC SETUP

async function bindMock(call, callback) {
  await globalObjects.controller.mock();
  callback(null, null);
}

async function bindEnterIntegratedTestingEnvironment(call, callback) {
  await globalObjects.controller.enterIntegratedTestingEnvironment();
  callback(null, null);
}

async function bindLogin(call, callback) {
  let r = await globalObjects.controller.guardLogin(call.request);
  callback(null, r);
}

async function bindValidate(call, callback) {
  let r = await globalObjects.controller.guardValidate(call.request);
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
  server.addService(ubc_package.AuthService.service, {
    Mock: bindMock,
    EnterIntegratedTestingEnvironment: bindEnterIntegratedTestingEnvironment,
    Login: bindLogin,
    Validate: bindValidate,
    SetupAddAdmin: bindSetupAddAdmin
  });

  server.bind("0.0.0.0:50051", grpc.ServerCredentials.createInsecure());
  server.start();
}

main();
