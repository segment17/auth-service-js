const md5 = require('md5');
const jwt = require('jsonwebtoken');
const util = require('util');
const K = require('./Constants/K');
const JWTHelper = require('./Helpers/JWTHelper');
const AdminRepository = require('./Repository/AdminRepository');
const MockAdminRepository = require('./Repository/Mock/MockAdminRepository');

class Mediator {

  constructor() {
    this.adminRepository = new AdminRepository();
  }

  // Endpoints
  async login(username, password) {
    console.log('password: ', password);
    console.log('username: ', username);
    let existingAdmin = await this.adminRepository.getAdminWithUsername(username);
    
    if (existingAdmin == null) {
      return false;
    }

    const password_hash = md5(password);
    return password_hash == existingAdmin.password_hash;
  }

  createToken(username) {
    console.log('username: ', username);
    return jwt.sign({ username: username }, K.jwtAppSecret);
  }

  async validate(token) {
    console.log('token: ', token);
    let decoded = await JWTHelper.verify(token);
    console.log('decoded: ', decoded);
    if (decoded == null) {
      return false;
    }
    let existingAdmin = await this.adminRepository.getAdminWithUsername(decoded.username);
    console.log('existingAdmin: ', existingAdmin);
    if (existingAdmin == null) {
      return false;
    }

    return true;
  }

  // Mock everything.
  mock() {
    this.adminRepository = new MockAdminRepository();
  }
  
  enterIntegratedTestingEnvironment() {
    this.adminRepository.enterIntegratedTestingEnvironment();
  }

  cleanUp() {
    this.adminRepository.cleanUp();
  }
  
}

module.exports = Mediator;
