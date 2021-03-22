const { Given, When, Then, Before } = require('@cucumber/cucumber');
const TestFunctions = require('../TestFunctions');
const globalObjects = require('../../index');
const assert = require('assert');

class DefaultScenarioTester {

  constructor(scenario) {
    this.scenario = scenario;
  }

  // Special Before Scenario Function
  before() {
    globalObjects.resetResult();
    globalObjects.setScenario(this.scenario);
    if (!TestFunctions.isScenarioE2E(this.scenario) && !TestFunctions.isScenarioIntegration(this.scenario)) {
      // If it's not E2E or Integration, it means everything is mocked.
      globalObjects.mock();
      globalObjects.client.Mock({}, (err, res) => {
        globalObjects.done = true;
      });
    } else {
      globalObjects.done = true;
    }
  }

  async thereIsAnAdminSuchAs(dataSource) {
    const specifiedAdmin = TestFunctions.extractSpecifiedObjectData(dataSource);
    // globalObjects.controller.mediator.boxerRepository.setupAddBoxer(specifiedBoxer);
    await globalObjects.client.SetupAddAdmin({username: specifiedAdmin.username, password_hash: specifiedAdmin.password_hash}, function (err, res) {
      globalObjects.done = true;
    });
  }

  endpointIsCalledWithRequestBody(endpoint, requestBodySource) {
    const requestBody = TestFunctions.extractSpecifiedObjectData(requestBodySource);
    if (endpoint == "Login") {
      globalObjects.client.Login(requestBody, function (err, res) {
        globalObjects.result = res;
      });
    } else {
      assert(false);
    }
  }

}

module.exports = DefaultScenarioTester;