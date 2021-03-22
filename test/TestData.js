
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

// Unit - Mediator
Unit_Mediator_Scenario1 = {
  invocation_data: {
    username: "test-admin"
  },
  expected_data: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3QtZGF0YSJ9.G_5Ao_RNM6btDvohXl67T95AUEjooN0mQZ0UdEMRmpQ"
}

module.exports = {
  A1_Scenario1_Variation1,
  Unit_AdminRepository_Scenario1,
  Unit_Mediator_Scenario1,
}
