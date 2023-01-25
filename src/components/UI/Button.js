import styles from './Button.module.scss'

function Button({ onClick, children, title, disablded = false }) {
  return (
    <button className={styles.button} onClick={onClick} title={title} disabled={disablded}>
      {children}
    </button>
  );
}

export default Button
