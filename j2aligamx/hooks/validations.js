import {
  regexUserName,
  regexEmail,
  regexPassword,
} from "../utilities/regularExpression";

const validation = () => {
  const validationUserName = (userName) => {
    if (userName != "") return regexUserName.test(userName);
  };

  const validationEmail = (email) => {
    if (email != "") return regexEmail.test(email);
  };

  const validationPassword = (password) => {
    if (password != "") return regexPassword.test(password);
  };

  return { validationUserName, validationEmail, validationPassword };
};

export default validation;
