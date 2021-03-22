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

  unitFunctionIsInvokedWithData(unitFunctionName, invocationDataSource) {
    this.unitFunctionName = unitFunctionName;
    const data = TestFunctions.extractSpecifiedObjectData(invocationDataSource);
    if (unitFunctionName == "createToken") {
      globalObjects.result = globalObjects.mediator.createToken(data.username);
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

  }
}

module.exports = MediatorScenarioTester;
