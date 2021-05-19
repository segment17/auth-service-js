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
    globalObjects.adminRepository.setupAddAdmin(TestFunctions.extractSpecifiedObjectData(dataSource));
    globalObjects.done = true;
  }

  unitFunctionIsInvokedWithData(unitFunctionName, invocationDataSource) {
    this.unitFunctionName = unitFunctionName;
    
    if (unitFunctionName == "getAdminWithUsername") {
      globalObjects.adminRepository.getAdminWithUsername(TestFunctions.extractSpecifiedObjectData(invocationDataSource).username).then(d => {
        globalObjects.result = d;
      });
    }
  }

  async returnedDataIsAs(dataSource) {
    const expectedData = TestFunctions.extractSpecifiedObjectData(dataSource);
    await TestFunctions.waitUntilResult();
    const returnedData = globalObjects.result;

    if (this.unitFunctionName == "getAdminWithUsername") {
      if (expectedData == null) {
        assert(returnedData == null);
      } else {
        assert.strictEqual(returnedData.username, expectedData.username);
        assert.strictEqual(returnedData.password_hash, expectedData.password_hash);
      }
    }
    else {
      assert(false);
    }
  }
}

module.exports = AdminRepositoryScenarioTester;
