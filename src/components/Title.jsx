import styles from "./styles.module.css";

export default function Wrapper({ info, children }) {
  return (
    <div className={styles.divCard}>
      <div className={styles.infoDiv}>
        <h2>{info}</h2>
      </div>
      {children}
    </div>
  );
}
