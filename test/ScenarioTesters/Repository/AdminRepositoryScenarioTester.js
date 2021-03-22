const globalObjects = require('../../..');
const DefaultScenarioTester = require('../DefaultScenarioTester');
const TestFunctions = require('../../TestFunctions');
const assert = require('assert');

class AdminRepositoryScenarioTester extends DefaultScenarioTester {

  constructor(scenario) {
    super(scenario);
    this.unitFunctionName = "";
  }

  async thereIsAnAdminSuchAs(dataSource) {
    const specifiedAdmin = TestFunctions.extractSpecifiedObjectData(dataSource);
    globalObjects.adminRepository.setupAddAdmin(specifiedAdmin);
    globalObjects.done = true;
  }

  unitFunctionIsInvokedWithData(unitFunctionName, invocationDataSource) {
    this.unitFunctionName = unitFunctionName;
    const data = TestFunctions.extractSpecifiedObjectData(invocationDataSource);
    if (unitFunctionName == "getAdminWithUsername") {
      globalObjects.adminRepository.getAdminWithUsername(data.username).then(d => {
        globalObjects.result = d;
      });
    }
  }

  async returnedDataIsAs(dataSource) {
    const expectedData = TestFunctions.extractSpecifiedObjectData(dataSource);
    await TestFunctions.waitUntilResult();
    const returnedData = globalObjects.result;

    if (this.unitFunctionName == "getAdminWithUsername") {
      assert.strictEqual(returnedData.username, expectedData.username);
      assert.strictEqual(returnedData.password_hash, expectedData.password_hash);
    }
  }
}

module.exports = AdminRepositoryScenarioTester;
