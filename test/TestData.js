
// Component
A1_Scenario1_Variation1 = {
  admin:  {
    username: "test-admin",
    password_hash: "13019e4c76dbb79db5c2562ad0572f74"
  },
  request_body: {
    username: "test-admin",
    password: "test-password-1234"
  },
  expected_response: {
    code: 200,
    message: 'success',
    token: 'expected_jwt_token' //TODO
  }
}

// Unit - AdminRepository
Unit_AdminRepository_Scenario1 = {
  admin: {
    username: "test-admin",
    password_hash: "13019e4c76dbb79db5c2562ad0572f74"
  },
  invocation_data: {username: "test-admin"},
  expected_data: {
    username: "test-admin",
    password_hash: "13019e4c76dbb79db5c2562ad0572f74"
  }
}

module.exports = {
  A1_Scenario1_Variation1,
  Unit_AdminRepository_Scenario1,
}
