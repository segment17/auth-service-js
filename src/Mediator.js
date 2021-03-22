const md5 = require('md5');
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
    return '';
  }


  // Mock everything.
  mock() {
    this.adminRepository = new MockAdminRepository();
  }

}

module.exports = Mediator;
