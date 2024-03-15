import styles from "./left-upper-details.module.css";
import { Paragraph } from "../../../../shared-components/Text/paragraph";
import { BigTitle } from "../../../../shared-components/Text/big-title";
import { Stars } from "../../../../shared-components/stars/stars";
export function LeftUpperDetails({ title, name, stars, moreInfo }) {
  return (
    <div className={styles.leftUpperDetailsContainer}>
      <div className={styles.innerLeftUpperDetailsContainer}>
        <Paragraph
          data={title}
          size={"15px"}
          color={"var(--brand-secondary)"}
          weight={"600"}
        />
        <BigTitle
          data={name}
          color={"var(--bg_default)"}
          weight={"700"}
          size={"22px"}
        />
        <Stars numberOfStars={stars} />
        <Paragraph data={moreInfo} color={"var(--bg_default)"} size={"16px"} />
      </div>
    </div>
  );
}
