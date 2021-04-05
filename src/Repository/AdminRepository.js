class AdminRepository {

  async getAdminWithUsername(username) {
    let queryResult = await this.runQueryForGetAdminWithUsername(username);
    let admin = this.extractAdminFromQueryResult(queryResult);
    return admin;
  }

  async runQueryForGetAdminWithUsername(username) {
    // Real read query to database
    return null;
  }

  extractAdminFromQueryResult(queryResult) {
    if (queryResult.length == 0) {
      return null;
    }
    return queryResult[0];
  }

  // Setup
  async setupAddAdmin(admin) {
    // Real write query to database to add fake admin
  }

}

module.exports = AdminRepository;
