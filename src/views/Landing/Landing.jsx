import { useNavigate } from "react-router-dom";
import styles from "./Landing.module.css";

const Landing = () => {
  const navigate = useNavigate();
  
  const handleSubmit = (event) => {
    event.preventDefault();
    navigate('/home');
  };
  
  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit}>
        <button className={styles.button}>GO HOMEPAGE</button>
      </form>
    </div>
  );
};

export default Landing;