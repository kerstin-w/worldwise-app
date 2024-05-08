import styles from "./Spinner.module.css";

/**
 * The Spinner displays a spinning animation within a container.
 */
function Spinner() {
  return (
    <div className={styles.spinnerContainer}>
      <div className={styles.spinner}></div>
    </div>
  );
}

export default Spinner;
