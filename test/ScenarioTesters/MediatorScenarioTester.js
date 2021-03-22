const globalObjects = require('../..');
const DefaultScenarioTester = require('./DefaultScenarioTester');
const TestFunctions = require('../TestFunctions');
const assert = require('assert');
const jwt = require('jsonwebtoken');
const K = require('../../src/Constants/K');

class MediatorScenarioTester extends DefaultScenarioTester {

  constructor(scenario) {
    super(scenario);
    this.unitFunctionName = "";
  }

  async thereIsAnAdminSuchAs(dataSource) {
    const specifiedAdmin = TestFunctions.extractSpecifiedObjectData(dataSource);
    globalObjects.mediator.adminRepository.setupAddAdmin(specifiedAdmin);
    globalObjects.done = true;
  }

  async unitFunctionIsInvokedWithData(unitFunctionName, invocationDataSource) {
    this.unitFunctionName = unitFunctionName;
    const data = TestFunctions.extractSpecifiedObjectData(invocationDataSource);
    if (unitFunctionName == "createToken") {
      globalObjects.result = globalObjects.mediator.createToken(data.username);
    } else if (unitFunctionName == "validate") {
      globalObjects.result = await globalObjects.mediator.validate(data.token);
    }
  }

  async returnedDataIsAs(dataSource) {
    const expectedData = TestFunctions.extractSpecifiedObjectData(dataSource);
    await TestFunctions.waitUntilResult();
    const returnedData = globalObjects.result;

    if (this.unitFunctionName == "createToken") {
      jwt.verify(returnedData, K.jwtAppSecret, function(err, decoded) {
        assert(err == null);
        assert.strictEqual(decoded.username, expectedData.username);
      });
    } 
    else if (this.unitFunctionName == "validate") {
      assert.strictEqual(returnedData, expectedData);
    }
    else {
      assert(false);
    }

  }
}

module.exports = MediatorScenarioTester;
