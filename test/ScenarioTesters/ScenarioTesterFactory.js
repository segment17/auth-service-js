const DefaultScenarioTester = require('./DefaultScenarioTester');
const AdminRepositoryScenarioTester = require('./Repository/AdminRepositoryScenarioTester');
const TestFunctions = require('../TestFunctions');
const MediatorScenarioTester = require('./MediatorScenarioTester');

class ScenarioTesterFactory {

  static createScenarioTester(scenario) {
    if (TestFunctions.isScenarioUnit(scenario, "AdminRepository") || TestFunctions.isScenarioIntegration(scenario, "AdminRepository")) {
      return new AdminRepositoryScenarioTester(scenario);
    } else if (TestFunctions.isScenarioUnit(scenario, "Mediator") || TestFunctions.isScenarioIntegration(scenario, "Mediator")) {
      return new MediatorScenarioTester(scenario);
    }
    return new DefaultScenarioTester(scenario);
  }

}

module.exports = ScenarioTesterFactory;
