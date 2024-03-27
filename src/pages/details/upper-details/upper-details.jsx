import { CardWithButton } from "../../../shared-components/card-with-button/card-with-button";
import { LeftUpperDetails } from "./left-upper-details/left-upper-details";
import styles from "./upper-details.module.css";
export function UpperDetails({
  addState,
  data,
  handleAddFav,
  handleRemoveFav,
}) {
  return (
    <div className={styles.upperDetailsContainer}>
      <LeftUpperDetails
        title={data.category}
        name={data.topic}
        stars={data.rating}
        moreInfo={data.description}
      />
      <CardWithButton
        image={data.image}
        name={data.topic}
        author={data.name}
        onClick={addState === true ? handleAddFav : handleRemoveFav}
        addState={addState}
      />
    </div>
  );
}
