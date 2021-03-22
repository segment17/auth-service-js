
A1_Scenario1_Variation1 = {
  admin:  {
    username: "test-admin",
    password: "test-password-1234"
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
