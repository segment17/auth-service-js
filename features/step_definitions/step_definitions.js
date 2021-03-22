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

Given('there is an admin such as {string}', function (adminDataSource) {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});

When('{string} is called with {string}', function (endpoint, requestBody) {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});

Then('response is as {string}', function (expectedResponse) {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});
