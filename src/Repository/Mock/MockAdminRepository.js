const AdminRepository = require("../AdminRepository");

class MockAdminRepository extends AdminRepository {

  constructor() {
    super();
    this.admins = []
  }
  
  async runQueryForGetAdminWithUsername(username) {
    for (let i = 0; i < this.admins.length; i++) {
      const element = this.admins[i];
      if (element.username == username) {
        return [element];
      }
    }
    return [];
  }

  async setupAddAdmin(admin) {
    this.admins.push(admin);
  }

}

module.exports = MockAdminRepository;