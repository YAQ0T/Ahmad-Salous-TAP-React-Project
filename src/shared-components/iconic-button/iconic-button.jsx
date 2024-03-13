import styles from "./iconic-button.module.css";

export function IconicButton({ icon, label, ...props }) {
  return (
    <button className={styles.container} {...props}>
      <ion-icon name={`${icon}-outline`}></ion-icon>
      {label}
    </button>
  );
}
