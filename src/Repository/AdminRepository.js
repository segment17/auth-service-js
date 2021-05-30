const { connection } = require('./DB');

class AdminRepository {

  constructor() {
    this.tableName = 'admins';
  }

  enterIntegratedTestingEnvironment() {
    this.tableName = 'test_admins';
  }

  async getAdminWithUsername(username) {
    console.log('getAdminWithUsername uxxsername: ', username);
    let queryResult = await this.runQueryForGetAdminWithUsername(username);
    console.log('getAdminWithUsername queryResult: ', queryResult);
    let admin = this.extractAdminFromQueryResult(queryResult);
    console.log('getAdminWithUsername admin: ', admin);
    return admin;
  }

  async runQueryForGetAdminWithUsername(username) {
    console.log('runQueryForGetAdminWithUsername usqqername: ', username);
    return new Promise((resolve, reject) => {
      connection.query(`SELECT * FROM ${this.tableName} WHERE username = '${username}';`, (error, result) => {
        if (error) {
          console.log('runQueryForGetAdminWithUsername DB Error occured: ', error);
          resolve(null);
        }
        console.log('runQueryForGetAdminWithUsername Successful fetch from DB.');
        resolve(result);
      });
    });
  }

  extractAdminFromQueryResult(queryResult) {
    console.log('extractAdminFromQueryResult queryResult: ', queryResult);
    if (queryResult.length == 0) {
      return null;
    }
    return queryResult[0];
  }

  // Setup
  async setupAddAdmin(admin) {
    console.log('setupAddAdmin admin: ', admin);
    return new Promise((resolve, reject) => {
      connection.query(`INSERT INTO test_admins (username, password_hash) VALUES ('${admin.username}', '${admin.password_hash}');`, (error, result) => {
        if (error) {
          console.log('setupAddAdmin DB Error occured: ', error);
          resolve(null);
        }
        console.log('setupAddAdmin Successful setup insert to DB.');
        resolve(result);
      });
    });
  }

  //During testing only
  async cleanUp() {
    console.log('cleanUp: ');
    return new Promise((resolve, reject) => {
      connection.query(`DELETE FROM test_admins;`, (error, result) => {
        if (error) {
          console.log('cleanUp DB Error occured: ', error);
          resolve(null);
        }
        console.log('cleanUp Successful cleanup from DB.');
        resolve(result);
      });
    });
  }

}

module.exports = AdminRepository;
