
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

A1_Scenario1_Faulty_Variation1 = {
  admin:  {
    username: "test-admin",
    password_hash: "13019e4c76dbb79db5c2562ad0572f74"
  },
  request_body: {
    username: "test-admin",
    password: "randompassword"
  },
  expected_response: {
    code: 403,
    message: 'Incorrect login!',
    token: ''
  }
}


A1_Scenario1_Faulty_Variation2 = {
  admin:  {
    username: "test-admin",
    password_hash: "13019e4c76dbb79db5c2562ad0572f74"
  },
  request_body: {
    username: "random-admin-username",
    password: "test-password-1234"
  },
  expected_response: {
    code: 403,
    message: 'Incorrect login!',
    token: ''
  }
}

A0_Scenario1_Variation1 = {
  admin:  {
    username: "test-admin",
    password_hash: "13019e4c76dbb79db5c2562ad0572f74"
  },
  request_body: {
    token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3QtYWRtaW4ifQ.Ie8nanpMvN_aNxqEDDL6_2nvcDzbh0yBL2p_VrSY4r0"
  },
  expected_response: {
    code: 200,
    message: 'success'
  }
}

A0_Scenario1_Faulty_Variation1 = {
  admin:  {
    username: "test-admin",
    password_hash: "13019e4c76dbb79db5c2562ad0572f74"
  },
  request_body: {
    token: "34hfy3bf834h8fy3h48fgy38y4fby34bf83y4f8y3b48yfg384yfb"
  },
  expected_response: {
    code: 403,
    message: 'forbidden'
  }
}

A0_Scenario1_Faulty_Variation2 = {
  admin:  {
    username: "test-admin-other",
    password_hash: "13019e4c76dbb79db5c2562ad0572f74"
  },
  request_body: {
    token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3QtYWRtaW4ifQ.Ie8nanpMvN_aNxqEDDL6_2nvcDzbh0yBL2p_VrSY4r0"
  },
  expected_response: {
    code: 403,
    message: 'forbidden'
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

Unit_AdminRepository_Scenario1_Faulty_Variation1 = {
  admin: {
    username: "test-admin",
    password_hash: "13019e4c76dbb79db5c2562ad0572f74"
  },
  invocation_data: {username: "non-existent-admin-username"},
  expected_data: null
}

Unit_AdminRepository_Scenario1_Faulty_Variation2 = {
  admin: {
    username: "test-admin",
    password_hash: "13019e4c76dbb79db5c2562ad0572f74"
  },
  invocation_data: {username: ""},
  expected_data: null
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

Unit_Repository_Scenario2 = {
  admin: {
    username: "test-admin",
    password_hash: "13019e4c76dbb79db5c2562ad0572f74"
  },
  invocation_data: {
    token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3QtYWRtaW4ifQ.Ie8nanpMvN_aNxqEDDL6_2nvcDzbh0yBL2p_VrSY4r0"
  },
  expected_data: true
}

module.exports = {
  A1_Scenario1_Variation1,
  A1_Scenario1_Faulty_Variation1,
  A1_Scenario1_Faulty_Variation2,
  Unit_AdminRepository_Scenario1,
  Unit_Mediator_Scenario1,
  A0_Scenario1_Variation1,
  Unit_Repository_Scenario2,
  Unit_AdminRepository_Scenario1_Faulty_Variation1,
  Unit_AdminRepository_Scenario1_Faulty_Variation2,
  A0_Scenario1_Faulty_Variation1,
  A0_Scenario1_Faulty_Variation2,
}
