const { connection } = require('./DB');

class AdminRepository {

  async getAdminWithUsername(username) {
    let queryResult = await this.runQueryForGetAdminWithUsername(username);
    let admin = this.extractAdminFromQueryResult(queryResult);
    return admin;
  }

  async runQueryForGetAdminWithUsername(username) {
    return new Promise((resolve, reject) => {
      connection.query(`SELECT * FROM admins WHERE username = '${username}';`, (error, result) => {
        if (error) {
          console.log(error);
          resolve(null);
        }
        resolve(result);
      });
    });
  }

  extractAdminFromQueryResult(queryResult) {
    if (queryResult.length == 0) {
      return null;
    }
    return queryResult[0];
  }

  // Setup
  async setupAddAdmin(admin) {
    console.log(admin);
    return new Promise((resolve, reject) => {
      connection.query(`INSERT INTO admins (username, password_hash) VALUES ('${admin.username}', '${admin.password_hash}');`, (error, result) => {
        if (error) {
          console.log(error);
          resolve(null);
        }
        console.log("RESULT");
        console.log(result);
        resolve(result);
      });
    });
  }

}

module.exports = AdminRepository;
