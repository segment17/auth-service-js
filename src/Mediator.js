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
    let existingAdmin = await this.adminRepository.getAdminWithUsername(username);
    // Check if admin exists.
    return md5(password) == existingAdmin.password_hash;
  }

  createToken(username) {
    return jwt.sign({ username: username }, K.jwtAppSecret);
  }

  async validate(token) {
    let decoded = await JWTHelper.verify(token);
    if (decoded == null) {
      return false;
    }
    let existingAdmin = await this.adminRepository.getAdminWithUsername(decoded.username);
    if (existingAdmin == null) {
      return false;
    }

    return true;
  }

  // Mock everything.
  mock() {
    this.adminRepository = new MockAdminRepository();
  }

}

module.exports = Mediator;
