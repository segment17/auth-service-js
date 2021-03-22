
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
    token: '' //TODO
  }
}

module.exports = {
  A1_Scenario1_Variation1,
}
