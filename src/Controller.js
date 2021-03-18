const Mediator = require('./Mediator');

class Controller {

  constructor() {
    this.mediator = new Mediator();
  }

  // Endpoint guards: guard[endpoint name]
  

  // Mock
  mock() {
    // Assign to mediator to mock everything it has.
    this.mediator.mock();
  }

}

module.exports = Controller;