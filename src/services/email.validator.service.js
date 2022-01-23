const { body, validationResult } = require("express-validator");
const db = require("../helpers/db");

IsEmailWordsBlacklist = async (email, blacklisted) => {
  try {
    for (let i = 0; i < blacklisted.length; i++) {
      if (email.includes(blacklisted[i])) return true;
    }

    return false;
  } catch (error) {}
};

IsEmailValid = async () => {
  try {
  } catch (error) {}
};

IsEmailDomainBlacklist = async (email, domains) => {
  try {
    for (let i = 0; i < domains.length; i++) {
      if (email.substring(email.lastIndexOf("@") + 1, email.length).includes(domains[i]))
        return true;
    }

    return false;
  } catch (error) {}
};

IsEmailRepeating = async (email) => {
  try {
    let patt = /^([a-z])\1+$/;
    let result = patt.test(email);
    return result;
  } catch (error) {}
};

DoesEmailExist = async () => {
  try {
    //I would use the mailer module here to send a test email, or some servers support a rcpt or asking the amil server if the email address does exist.
  } catch (error) {}
};

AddRecordToDB = async (emailResponse) => {
  try {
    let query = `INSERT INTO execution_log (date, input_email, isValid, errorMsgs) VALUES(?, ?, ?, ?)`;
    let params = [
      new Date(),
      emailResponse.email,
      emailResponse.isValid,
      emailResponse.errorMsgs.join("; "),
    ];
    db.run(query, params, function (err, result) {
      if (err) {
        throw err;
      }
    });
  } catch (error) {
    console.log("error inserting into SQLITE db.");
  }
};

module.exports = {
  IsEmailDomainBlacklist,
  IsEmailRepeating,
  IsEmailValid,
  IsEmailWordsBlacklist,
  AddRecordToDB,
};
