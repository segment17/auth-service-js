
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
    token_decoded: {
      username: "test-admin"
    }
  }
}

A0_Scenario1_Variation1 = {
  admin:  {
    username: "test-admin",
    password_hash: "13019e4c76dbb79db5c2562ad0572f74"
  },
  request_body: {
    token: "token"
  },
  expected_response: {
    code: 200,
    message: 'success'
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
  // Expected data is decoded JWT token
  expected_data: {
    username: "test-admin"
  }
}

module.exports = {
  A1_Scenario1_Variation1,
  Unit_AdminRepository_Scenario1,
  Unit_Mediator_Scenario1,
  A0_Scenario1_Variation1,
}
