const Controller = require('./src/Controller');
const Mediator = require('./src/Mediator');
const AdminRepository = require('./src/Repository/AdminRepository');
const MockAdminRepository = require('./src/Repository/Mock/MockAdminRepository');

// GRPC SETUP
const grpc = require('grpc');
const protoLoader = require('@grpc/proto-loader');
const PROTO_PATH = __dirname + '/proto/ubc.proto';
const packageDefinition = protoLoader.loadSync(PROTO_PATH, { keepCase: true, longs: String, enums: String, defaults: true, oneofs: true });
const ubc_package = grpc.loadPackageDefinition(packageDefinition).ubc_package;
// GRPC SETUP



class GlobalObjects {

  constructor() {
    this.unreturnableContentForResult = "globalObjectsUnreturnableContent";
    this.done = false;
    this.result = this.unreturnableContentForResult; // Result object that will be filled during tests.
    this.controller = new Controller();
    this.mediator = new Mediator();
    this.adminRepository = new AdminRepository();

    this.client = new ubc_package.AuthService(process.env.AUTH_SERVICE_ADDR || "0.0.0.0:50051", grpc.credentials.createInsecure());
    console.log('process.env.AUTH_SERVICE_ADDR: ', process.env.AUTH_SERVICE_ADDR);
  }

  // Mock everything...
  mock() {
    this.mediator.mock();
    this.adminRepository = new MockAdminRepository();
  }

  enterIntegratedTestingEnvironment() {
    this.mediator.enterIntegratedTestingEnvironment();
    this.adminRepository.enterIntegratedTestingEnvironment();
  }

  cleanUp() {
    //TODO: Client cleanup
    this.mediator.cleanUp();
    this.adminRepository.cleanUp();
  }

  resetResult() {
    this.result = this.unreturnableContentForResult;
  }

  setScenario(scenario) {
    this.scenario = scenario;
  }

  setScenarioTester(scenarioTester) {
    this.scenarioTester = scenarioTester;
  }

  reset() {
    this.result = this.unreturnableContentForResult; // Result object that will be filled during tests.
    this.controller = new Controller();
    this.mediator = new Mediator();
    this.adminRepository = new AdminRepository();

    this.client = new ubc_package.AuthService(process.env.AUTH_SERVICE_ADDR || "0.0.0.0:50051", grpc.credentials.createInsecure());
  }

}

module.exports = GlobalObjects;
