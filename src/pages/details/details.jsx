import { useParams } from "react-router-dom";
import styles from "./details.module.css";
import { LowerDetails } from "./lower-details/lower-details";
import { UpperDetails } from "./upper-details/upper-details";
import useAxios from "../../hooks/useAxios";
import { useContext, useEffect, useState } from "react";
import { FavoritesContext } from "../../contexts/FavoritesContext";

export function Details() {
  const [addState, setAddState] = useState(true);
  let { id } = useParams();
  id = Number(id);
  const { res, error } = useAxios(
    `https://tap-web-1.herokuapp.com/topics/details/${id}`
  );
  const { favsSet, addFav, removeFav } = useContext(FavoritesContext);
  const handleAddFav = () => {
    addFav(id);
  };
  const handleRemoveFav = () => {
    removeFav(id);
  };
  useEffect(() => {
    if (favsSet.has(id)) {
      setAddState(false);
    } else {
      setAddState(true);
    }
  }, [favsSet, id]);
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
          <UpperDetails
            data={res}
            addState={addState}
            handleAddFav={handleAddFav}
            handleRemoveFav={handleRemoveFav}
          />
          <LowerDetails data={res} />
        </>
      )}
    </div>
  );
}
