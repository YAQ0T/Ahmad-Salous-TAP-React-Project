import { CardWithButton } from "../../../shared-components/card-with-button/card-with-button";
import { LeftUpperDetails } from "./left-upper-details/left-upper-details";
import styles from "./upper-details.module.css";
export function UpperDetails() {
  return (
    <div className={styles.upperDetailsContainer}>
      <LeftUpperDetails
        title={"Web Development Languages"}
        name={"HTML"}
        stars={5}
        moreInfo={
          "HTML (Hypertext Markup Language) is the standard markup language for creating web pages and other information that can be displayed in a web browser. It provides a structure for content and defines how it should be displayed on a web page, including text, images, and multimedia. HTML is essential for creating static web pages and is a foundational technology for the World Wide Web."
        }
      />
      <CardWithButton
        image={"javascript.jpg"}
        name={"JavaScript"}
        author={"Sarah Smith"}
      />
    </div>
  );
}
