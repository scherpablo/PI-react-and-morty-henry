import { useNavigate } from "react-router-dom";
import styles from "./Error.module.css";
import PATHROUTES from "../../helpers/PathRoutes";

const Error = () => {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate(PATHROUTES.HOME);
  };

  return (
    <>
      <div className={styles.divContainerError}>
        <img src="/img/error.png" className={styles.imgError} alt="" />
        <button onClick={handleRedirect} className={styles.btnErrorHome}>Home</button>
      </div>
    </>
  );
};

export default Error;
