const emailService = require(`../services/email.validator.service`);
const EmailResponse = require(`../models/emailResponse.model`);

ValidateBatchEmails = async (req, res, next) => {
  try {
    let emails = req.body.emails;
    let blacklistDomains = req.body.blacklist.domains;
    let blacklistWords = req.body.blacklist.words;
    let results = [];

    for (let i = 0; i < emails.length; i++) {
      results.push(new EmailResponse(emails[i], true, []));

      if (await emailService.IsEmailWordsBlacklist(emails[i], blacklistWords)) {
        results[i].isValid = false;
        results[i].errorMsgs.push("Words in Email is blacklisted");
      }

      if (await emailService.IsEmailRepeating(emails[i])) {
        results[i].isValid = false;
        results[i].errorMsgs.push("Repeating characters in Email");
      }

      if (await emailService.IsEmailDomainBlacklist(emails[i], blacklistDomains)) {
        results[i].isValid = false;
        results[i].errorMsgs.push("Domain of Email is blacklisted");
      }
    }

    for (let i = 0; i < res.locals.errors.length; i++) {
      let index = res.locals.errors[i].param.substring(
        res.locals.errors[i].param.lastIndexOf("[") + 1,
        res.locals.errors[i].param.lastIndexOf("]")
      );

      results[index].isValid = false;
      results[index].errorMsgs.push("Email is not valid");
    }

    res.send(results);
  } catch (error) {
    res.status(500).json({ ThereBeMonsters: "Aye" });
  }
};

module.exports = {
  ValidateBatchEmails,
};
