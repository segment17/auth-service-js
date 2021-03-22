const md5 = require('md5');
const jwt = require('jsonwebtoken');
const K = require('./Constants/K');
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
    return jwt.sign({ username: "test-admin" }, K.jwtAppSecret);
  }


  // Mock everything.
  mock() {
    this.adminRepository = new MockAdminRepository();
  }

}

module.exports = Mediator;
