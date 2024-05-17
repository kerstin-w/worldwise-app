import Spinner from "./Spinner";
import styles from "./SpinnerFullPage.module.css";

/**
 * The SpinnerFullPage function returns a div element containing a Spinner component.
 * @returns SpinnerFullPage is being returned. It consists of a div element
 * with a class name of styles.spinnerFullpage and a Spinner component inside the div.
 */
function SpinnerFullPage() {
  return (
    <div className={styles.spinnerFullpage}>
      <Spinner />
    </div>
  );
}

export default SpinnerFullPage;
