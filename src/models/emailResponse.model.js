class EmailResponse {
  constructor(email, isValid, errorMsgs) {
    this.email = email;
    this.isValid = isValid;
    this.errorMsgs = errorMsgs;
  }
}

module.exports = EmailResponse;
