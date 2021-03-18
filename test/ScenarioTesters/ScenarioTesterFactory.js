const DefaultScenarioTester = require('./DefaultScenarioTester');
const StandingsServiceGatewayScenarioTester = require('./Gateway/StandingsServiceGatewayScenarioTester');
const AuthServiceGatewayScenarioTester = require('./Gateway/AuthServiceGatewayScenarioTester');
const BoxerRepositoryScenarioTester = require('./Repository/UserRepositoryScenarioTester');
const TestFunctions = require('../TestFunctions');

class ScenarioTesterFactory {

  static createScenarioTester(scenario) {
    if (TestFunctions.isScenarioUnit(scenario, "AdminRepository") || TestFunctions.isScenarioIntegration(scenario, "AdminRepository")) {
      return new BoxerRepositoryScenarioTester(scenario);
    }
    return new DefaultScenarioTester(scenario);
  }

}

module.exports = ScenarioTesterFactory;
