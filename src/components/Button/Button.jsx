import styles from "./Button.module.css";

/**
 * The Button component renders a button element with specified children, onClick
 * function, and type styling.
 * @returns The `Button` component is being returned. It is a button element with the specified
 * `children`, `onClick` event handler, and `type` class name. The class names are dynamically
 * generated based on the `styles` object.
 */
function Button({ children, onClick, type }) {
  return (
    <button onClick={onClick} className={`${styles.btn} ${styles[type]}`}>
      {children}
    </button>
  );
}

export default Button;
