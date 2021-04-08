const { connection } = require('./DB');

class AdminRepository {

  constructor() {
    this.tableName = 'admins';
  }

  enterIntegratedTestingEnvironment() {
    this.tableName = 'test_admins';
  }

  async getAdminWithUsername(username) {
    let queryResult = await this.runQueryForGetAdminWithUsername(username);
    let admin = this.extractAdminFromQueryResult(queryResult);
    return admin;
  }

  async runQueryForGetAdminWithUsername(username) {
    console.log(this.tableName);
    return new Promise((resolve, reject) => {
      connection.query(`SELECT * FROM ${this.tableName} WHERE username = '${username}';`, (error, result) => {
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
    return new Promise((resolve, reject) => {
      connection.query(`INSERT INTO test_admins (username, password_hash) VALUES ('${admin.username}', '${admin.password_hash}');`, (error, result) => {
        if (error) {
          console.log(error);
          resolve(null);
        }
        resolve(result);
      });
    });
  }

  //During testing only
  async cleanUp() {
    return new Promise((resolve, reject) => {
      connection.query(`DELETE FROM test_admins;`, (error, result) => {
        if (error) {
          console.log(error);
          resolve(null);
        }
        resolve(result);
      });
    });
  }

}

module.exports = AdminRepository;
