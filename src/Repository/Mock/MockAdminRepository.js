const AdminRepository = require("../AdminRepository");

class MockAdminRepository extends AdminRepository {

  constructor() {
    super();
    this.admins = []
  }
  
  async runQueryForGetAdminWithUsername(username) {
    for (let i = 0; i < this.admins.length; i++) {
        if (this.admins[i].username == username) {
        return [this.admins[i]];
      }
    }
    return [];
  }

  async setupAddAdmin(admin) {
    this.admins.push(admin);
  }

}

module.exports = MockAdminRepository;