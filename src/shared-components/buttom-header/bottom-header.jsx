import { BigTitle } from "../Text/big-title";
import { MediumTitle } from "../Text/medium-title";
import { Brand } from "../brand/brand";
import styles from "./bottom-header.module.css";

export function BottomHeader() {
  return (
    <div className={styles.bottomHeader}>
      <Brand />
      <div className={styles.Welcome}>
        <BigTitle
          color={"var(--brand-secondary)"}
          data={"Welcome to our website!"}
          size={"25px"}
        />
        <MediumTitle
          color={"var(--body-text)"}
          data={"We have a new design that's fresh, modern, and easy to use."}
          weight={"400"}
          size={"17px"}
        />
      </div>
    </div>
  );
}
