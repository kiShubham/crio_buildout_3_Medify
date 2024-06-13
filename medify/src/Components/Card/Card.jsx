import detox from "../../assets/detox.svg";
import doctor from "../../assets/doctor.png";
import styles from "./Card.module.css";

const Card = () => {
  return (
    <div className={styles.card}>
      <img src={detox} alt="image" className={styles.cardImage} />
      <div className={styles.cardText}>
        <div>Medical | March 31, 2022</div>
        <div>6 Tips To Protect Your Mental Health When You’re Sick</div>
        <div>
          <img src={doctor} alt="doctor image" />
          <span>Rebecca Lee</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
