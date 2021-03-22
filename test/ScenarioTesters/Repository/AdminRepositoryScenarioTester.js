const globalObjects = require('../../..');
const DefaultScenarioTester = require('../DefaultScenarioTester');
const TestFunctions = require('../../TestFunctions');
const assert = require('assert');

class AdminRepositoryScenarioTester extends DefaultScenarioTester {
  async thereIsAnAdminSuchAs(dataSource) {
    const specifiedAdmin = TestFunctions.extractSpecifiedObjectData(dataSource);
    globalObjects.adminRepository.setupAddAdmin(specifiedAdmin);
    globalObjects.done = true;
  }
}

module.exports = AdminRepositoryScenarioTester;
