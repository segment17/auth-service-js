const globalObjects = require('../..');
const DefaultScenarioTester = require('./DefaultScenarioTester');
const TestFunctions = require('../TestFunctions');
const assert = require('assert');

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
      assert.strictEqual(returnedData, expectedData);
    }

  }
}

module.exports = MediatorScenarioTester;
