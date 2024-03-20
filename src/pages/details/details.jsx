import { useParams } from "react-router-dom";
import styles from "./details.module.css";
import { LowerDetails } from "./lower-details/lower-details";
import { UpperDetails } from "./upper-details/upper-details";
import UseAxios from "../../hooks/useAxios";

export function Details() {
  let { id } = useParams();
  const { res, error } = UseAxios(
    `https://tap-web-1.herokuapp.com/topics/details/${id}`
  );
  if (error) {
    console.log(error);
    return <h1>ERROR</h1>;
  }
  return (
    <div className={styles.detailsContainer}>
      {!res ? (
        <h1>loading</h1>
      ) : (
        <>
          <UpperDetails data={res} />
          <LowerDetails data={res} />
        </>
      )}
    </div>
  );
}
