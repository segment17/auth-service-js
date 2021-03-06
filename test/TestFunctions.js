const TestData = require('./TestData');
const globalObjects = require('../index');

function extractSpecifiedObjectData(dataSource) {
  const [variation, object] = dataSource.split(".");
  return TestData[variation][object];
}

function extractTags(scenario) {
  let res = [];
  const tagObjects = scenario.pickle.tags;
  for (let index = 0; index < tagObjects.length; index++) {
    const element = tagObjects[index];
    res.push(element.name);
  }
  return res;
}

function isScenarioUnit(scenario, layer) {
  // layer can be "Mediator", "Gateway", "Repository" or one of the domain object tags
  const tags = extractTags(scenario);
  return tags.includes('@Unit') && tags.includes('@' + layer);
}

function isScenarioIntegration(scenario, layer = null) {
  // layer can be "Mediator", "Gateway", "Repository" or one of the domain object tags
  const tags = extractTags(scenario);
  if (layer == null) {
    return tags.includes('@Integration');
  }
  return tags.includes('@Integration') && tags.includes('@' + layer);
}

function isScenarioComponent(scenario) {
  return extractTags(scenario).includes('@Component');
}

function isScenarioE2E(scenario) {
  return extractTags(scenario).includes('@E2E');
}

function isScenarioFaulty(scenario) {
  return extractTags(scenario).includes('@Faulty');
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function waitUntilResult() {
  while (globalObjects.result == globalObjects.unreturnableContentForResult) {
    await sleep(100);
  }
}

module.exports = { 
  extractSpecifiedObjectData,
  isScenarioFaulty,
  isScenarioUnit,
  isScenarioIntegration,
  isScenarioComponent,
  isScenarioE2E,
  waitUntilResult,
  sleep,
}
