import styles from "./Header.module.css";
import logo from "../../assets/logo.svg";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.bar}>
        <span>
          The health and well-being of our patients and their health care team
          will always be our priority, so we follow the best practices for
          cleanliness.
        </span>
      </div>
      <div className={styles.headerNavbar}>
        <div className={styles.logo}>
          <img src={logo} alt="logo" />
        </div>
        <div className={styles.navbar}>
          <div>Find Doctors</div>
          <div>Hospitals</div>
          <div>Medicines</div>
          <div>Surgeries</div>
          <div>Software for Provider</div>
          <div>Facilities</div>
          <button>My Bookings</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
