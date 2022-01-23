const assert = require("assert");
const emailService = require(`../../src/services/email.validator.service`);

describe("Email Validator Service Test Suite.", () => {
  it(`Check if domain is blacklisted`, async () => {
    let email = "martin@somewhere.co.za";
    let blacklistDomain = ["somewhere.co.za"];

    let isBlacklisted = await emailService.IsEmailDomainBlacklist(email, blacklistDomain);

    assert.equal(isBlacklisted, true, "Domain was not detected in email.");
  });
});
