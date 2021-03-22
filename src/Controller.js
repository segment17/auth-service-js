const Mediator = require('./Mediator');

class Controller {

  constructor() {
    this.mediator = new Mediator();
  }

  // Endpoint guards: guard[endpoint name]
  async guardLogin(request) {
    //TODO Validation

    let isSuccessful = await this.mediator.login(request.username, request.password);
    
    if (isSuccessful) {
      let token = this.mediator.createToken(request.username);
      return {
        code: 200,
        message: 'success',
        token: token
      }
    } else {
      return {
        code: 403,
        message: 'Username or password is incorrect!',
        token: ''
      }
    }

  }

  // Mock
  mock() {
    // Assign to mediator to mock everything it has.
    this.mediator.mock();
  }

  

}

module.exports = Controller;