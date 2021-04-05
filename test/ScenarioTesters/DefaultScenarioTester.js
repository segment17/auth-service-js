const { Given, When, Then, Before } = require('@cucumber/cucumber');
const TestFunctions = require('../TestFunctions');
const globalObjects = require('../../index');
const assert = require('assert');
const K = require('../../src/Constants/K');
const jwt = require('jsonwebtoken');

class DefaultScenarioTester {

  constructor(scenario) {
    this.scenario = scenario;
    this.endpoint = "";
  }

  // Special Before Scenario Function
  before() {
    globalObjects.resetResult();
    globalObjects.setScenario(this.scenario);
    if (!TestFunctions.isScenarioE2E(this.scenario) && !TestFunctions.isScenarioIntegration(this.scenario)) {
      // If it's not E2E or Integration, it means everything is mocked.
      console.log("GONNA MOCK");
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
    await globalObjects.client.SetupAddAdmin({ username: specifiedAdmin.username, password_hash: specifiedAdmin.password_hash }, function (err, res) {
      globalObjects.done = true;
    });
  }

  endpointIsCalledWithRequestBody(endpoint, requestBodySource) {
    const requestBody = TestFunctions.extractSpecifiedObjectData(requestBodySource);
    this.endpoint = endpoint;
    if (endpoint == "Login") {
      globalObjects.client.Login(requestBody, function (err, res) {
        globalObjects.result = res;
      });
    }
    else if (endpoint == "Validate") {
      globalObjects.client.Validate(requestBody, function (err, res) {
        globalObjects.result = res;
      });
    }
    else {
      assert(false);
    }
  }

  async responseIsAs(expectedResponseDataSource) {
    const expectedResponse = TestFunctions.extractSpecifiedObjectData(expectedResponseDataSource);
    await TestFunctions.waitUntilResult();
    const response = globalObjects.result;

    assert.strictEqual(response.code, expectedResponse.code);
    assert.strictEqual(response.message, expectedResponse.message);
    if (this.endpoint == "Login") {
      if (TestFunctions.isScenarioFaulty(this.scenario)) {
        assert.strictEqual(response.token, expectedResponse.token);
      } else {
        jwt.verify(response.token, K.jwtAppSecret, function (err, decoded) {
          assert(err == null);
          assert.strictEqual(decoded.username, expectedResponse.token_decoded.username);
        });
      }

    }
  }

}

module.exports = DefaultScenarioTester;