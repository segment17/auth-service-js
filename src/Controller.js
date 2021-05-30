const Mediator = require('./Mediator');

class Controller {

  constructor() {
    this.mediator = new Mediator();
  }

  // Endpoint guards: guard[endpoint name]
  async guardLogin(request) {
    console.log('guardLogin request: ', request);
    //TODO Validation
    const { username, password } = request;
    console.log(`guardLogin Login request received for user: ${username} and password [${'*'.repeat(password ? password.length : 8)}].`);
    let isSuccessful = await this.mediator.login(username, password);
    console.log('guardLogin isSuccessful: ', isSuccessful);
    
    if (isSuccessful) {
      let token = this.mediator.createToken(username);
      console.log('guardLogin token: ', token);
      return {
        code: 200,
        message: 'success',
        token: token
      }
    } else {
      console.log('guardLogin 403: ', 403);
      return {
        code: 403,
        message: 'Incorrect login!',
        token: ''
      }
    }

  }

  async guardValidate(request) {
    console.log('guardValidate request: ', request);
    // TODO data validation
    const { token } = request;
    console.log(`guardValidate Validate request received for token: [${'*'.repeat(token ? token.length : 32)}]`);
    let isAuthorized = await this.mediator.validate(token);
    console.log('guardValidate isAuthorized: ', isAuthorized);

    if (isAuthorized) {
      console.log('guardValidate isAuthorized: ', isAuthorized);
      return {
        code: 200,
        message: 'success'
      }
    } else {
      console.log('guardValidate 403: ', 403);
      return {
        code: 403,
        message: 'forbidden'
      }
    }
  }

  // Mock
  mock() {
    console.log('mock: ');
    // Assign to mediator to mock everything it has.
    this.mediator.mock();
  }

  enterIntegratedTestingEnvironment() {
    console.log('enterIntegratedTestingEnvironment:');
    this.mediator.enterIntegratedTestingEnvironment();
  }

  

}

module.exports = Controller;