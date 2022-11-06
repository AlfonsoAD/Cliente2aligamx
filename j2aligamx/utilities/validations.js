import { regexUserName, regexEmail, regexPassword } from "./regularExpression";

const validationUserName = (userName) => {
  return regexUserName.test(userName);
};

const validationEmail = (email) => {
  return regexEmail.test(email);
};

const validationPassword = (password) => {
  return regexPassword.test(password);
};

export { validationUserName, validationEmail, validationPassword };
