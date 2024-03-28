import React, { createContext, useEffect, useState } from "react";

export const FavoritesContext = createContext();

export function FavoritesProvider({ children }) {
  const [favsSet, setFavsSet] = useState(new Set());

  const addFav = (fav) => {
    if (!favsSet.has(fav)) {
      setFavsSet((prevFavsSet) => {
        sessionStorage.setItem("favs", JSON.stringify([...prevFavsSet, fav]));

        return new Set([...prevFavsSet, fav]);
      });
    }
  };

  const removeFav = (fav) => {
    if (favsSet.has(fav)) {
      const newFavsSet = new Set(favsSet);
      newFavsSet.delete(fav);
      setFavsSet(newFavsSet);
      sessionStorage.setItem("favs", JSON.stringify([...newFavsSet]));
    }
  };
  useEffect(() => {
    setFavsSet(() => {
      const currentFavs = sessionStorage.getItem("favs");
      if (currentFavs) {
        return new Set(JSON.parse(currentFavs));
      } else {
        return new Set([]);
      }
    });
    // add the state variable "favsSet" as a dependency
  }, []);

  return (
    <FavoritesContext.Provider value={{ favsSet, addFav, removeFav }}>
      {children}
    </FavoritesContext.Provider>
  );
}
