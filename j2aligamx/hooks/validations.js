import {
  regexUserName,
  regexEmail,
  regexPassword,
} from "../utilities/regularExpression";

const validation = () => {
  const validationUserName = (userName) => {
    return regexUserName.test(userName);
  };

  const validationEmail = (email) => {
    return regexEmail.test(email);
  };

  const validationPassword = (password) => {
    return regexPassword.test(password);
  };

  return [validationUserName, validationEmail, validationPassword];
};

export default validation;
