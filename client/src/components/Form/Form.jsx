import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { validateEmail, validatePassword } from "../../helpers/Validation";
import PATHROUTES from "../../helpers/PathRoutes";
import styles from "./Form.module.css";

const Form = (props) => {
  const { login } = props;
  const navigate = useNavigate();
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const property = e.target.name;
    const value = e.target.value;

    setUserData({ ...userData, [property]: value });
    if (property === "email") {
      if (value === "") {
        setErrors({ ...errors, email: "" });
      } else {
        validateEmail({ email: value }, errors, setErrors);
      }
    } else if (property === "password") {
      if (value === "") {
        setErrors({ ...errors, password: "" });
      } else {
        validatePassword({ password: value }, errors, setErrors);
      }
    }
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsFormSubmitted(true);

    if (userData.email.trim() === "" || userData.password.trim() === "") {
      return;
    }
    login(userData);
    navigate(PATHROUTES.HOME);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.divImgForm}>
        <img className={styles.imgForm} src="/img/imgForm.png" alt="" />
      </div>
      <div className={styles.containerInputsForm}>
        <div className={styles.divInputsForm}>
          <div className={styles.email}>
            <label htmlFor="emailInput">Email: </label>
            <input
              id="emailInput"
              type="text"
              name="email"
              value={userData.email}
              onChange={handleChange}
              placeholder="📧 email"
              className={
                errors.email ||
                (isFormSubmitted && userData.email.trim() === "")
                  ? styles.errorsInput
                  : userData.email && !errors.email
                  ? styles.successInput
                  : ""
              }
            />
            {isFormSubmitted && userData.email.trim() === "" && (
              <div className={styles.errorText}>Email requerido.</div>
            )}
            <span className={errors.email ? styles.errorsSpan : ""}>
              {errors.email}
            </span>
          </div>
          <div className={styles.password}>
            <label htmlFor="passwordInput">Password: </label>
            <input
              id="passwordInput"
              type="password"
              name="password"
              value={userData.password}
              onChange={handleChange}
              placeholder="🔐 password"
              className={
                errors.password ||
                (isFormSubmitted && userData.password.trim() === "")
                  ? styles.errorsInput
                  : userData.password && !errors.password
                  ? styles.successInput
                  : ""
              }
            />
            {isFormSubmitted && userData.password.trim() === "" && (
              <div className={styles.errorText}>Contraseña requerida.</div>
            )}
            <span className={errors.password ? styles.errorsSpan : ""}>
              {errors.password}
            </span>
          </div>
          <div className={styles.divButtonLogin}>
            <button className={styles.buttonLoginForm} type="submit">
              Login
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Form;