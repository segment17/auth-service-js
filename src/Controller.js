const Mediator = require('./Mediator');

class Controller {

  constructor() {
    this.mediator = new Mediator();
  }

  // Endpoint guards: guard[endpoint name]
  async guardLogin(request) {
    //TODO Validation
    const { username, password } = request;
    console.log(`Login request received for user: ${username} and password [${'*'.repeat(password ? password.length : 8)}].`);
    let isSuccessful = await this.mediator.login(username, password);
    
    if (isSuccessful) {
      let token = this.mediator.createToken(username);
      return {
        code: 200,
        message: 'success',
        token: token
      }
    } else {
      return {
        code: 403,
        message: 'Incorrect login!',
        token: ''
      }
    }

  }

  async guardValidate(request) {
    // TODO data validation
    const { token } = request;
    console.log(`Validate request received for token: [${'*'.repeat(token ? token.length : 32)}]`);
    let isAuthorized = await this.mediator.validate(token);

    if (isAuthorized) {
      return {
        code: 200,
        message: 'success'
      }
    } else {
      return {
        code: 403,
        message: 'forbidden'
      }
    }
  }

  // Mock
  mock() {
    // Assign to mediator to mock everything it has.
    this.mediator.mock();
  }

  enterIntegratedTestingEnvironment() {
    this.mediator.enterIntegratedTestingEnvironment();
  }

  

}

module.exports = Controller;