const DefaultScenarioTester = require('./DefaultScenarioTester');
const AdminRepositoryScenarioTester = require('./Repository/AdminRepositoryScenarioTester');
const TestFunctions = require('../TestFunctions');

class ScenarioTesterFactory {

  static createScenarioTester(scenario) {
    if (TestFunctions.isScenarioUnit(scenario, "AdminRepository") || TestFunctions.isScenarioIntegration(scenario, "AdminRepository")) {
      return new AdminRepositoryScenarioTester(scenario);
    }
    return new DefaultScenarioTester(scenario);
  }

}

module.exports = ScenarioTesterFactory;
