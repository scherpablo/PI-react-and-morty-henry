const validateEmail = (userData, errors, setErrors) => {
  if (userData.email.length > 35) {
    setErrors({
      ...errors,
      email: "El email no puede tener más de 35 caracteres.",
    });
  } else if (
    /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{3})+$/.test(userData.email)
  ) {
    setErrors({ ...errors, email: "" });
  } else {
    setErrors({ ...errors, email: "El email no es válido." });
  }
};

const validatePassword = (userData, errors, setErrors) => {
  if (userData.password.length < 6 || userData.password.length > 10) {
    setErrors({
      ...errors,
      password: "La contraseña debe tener entre 6 y 10 caracteres.",
    });
  } else if (!/\d/.test(userData.password)) {
    setErrors({
      ...errors,
      password: "La contraseña debe contener al menos un número.",
    });
  } else {
    setErrors({ ...errors, password: "" });
  }
};

export { validateEmail, validatePassword };
