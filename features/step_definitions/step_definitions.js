const { Given, When, Then, Before } = require('@cucumber/cucumber');
const TestFunctions = require('../../test/TestFunctions');
const ScenarioTesterFactory = require('../../test/ScenarioTesters/ScenarioTesterFactory');
const globalObjects = require('../../index');

Before(async function (scenario) {
  globalObjects.done = false;
  globalObjects.setScenarioTester(ScenarioTesterFactory.createScenarioTester(scenario));
  globalObjects.scenarioTester.before();
  while (!globalObjects.done) {
    await TestFunctions.sleep(100);
  }
});

Given('there is an admin such as {string}', async function (adminDataSource) {
  globalObjects.done = false;
  await globalObjects.scenarioTester.thereIsAnAdminSuchAs(adminDataSource);
  while (!globalObjects.done) { await TestFunctions.sleep(100); }
});

When('{string} is called with {string}', function (endpoint, requestBodySource) {
  globalObjects.scenarioTester.endpointIsCalledWithRequestBody(endpoint, requestBodySource);
});

Then('response is as {string}', async function (expectedResponse) {
  await globalObjects.scenarioTester.responseIsAs(expectedResponse);
});
