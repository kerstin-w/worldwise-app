import useAuth from "../../hooks/useAuth";
import styles from "./User.module.css";

function User() {
  const { user } = useAuth();

  function handleClick() {}

  return (
    <div className={styles.user}>
      <img src={user.avatar} alt={user.name} />
      <span>Welcome, {user.name}</span>
      <button onClick={handleClick}>Logout</button>
    </div>
  );
}

export default User;
