const dataValidations = () => {
  const vUserName = (validationUserName) => {
    if (validationUserName == false) {
      return "* No tiene el formato admitido (no espacios, solo letras, números y - _) más de 3 caracteres y menos de 26.";
    }
  };

  const vEmail = (validationEmail) => {
    if (validationEmail == false) {
      return "* No tiene formato de correo electrónico.";
    }
  };

  const vPassword = (validationPassword) => {
    if (validationPassword == false) {
      return "* Debe tener minimo una letra minúscula, una letra mayúscula, un número, un carácter especial y mayor a 8 caracteres.";
    }
  };

  const vPasswordConfirm = (password, passwordConfirm) => {
    if (password !== passwordConfirm) {
      return "* Las contraseñas no coinciden";
    }
  };

  return [vUserName, vEmail, vPassword, vPasswordConfirm];
};

export { dataValidations };
