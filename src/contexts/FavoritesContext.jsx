import React, { createContext, useState } from "react";

export const FavoritesContext = createContext();

export function FavoritesProvider({ children }) {
  const [favsSet, setFavsSet] = useState(new Set());

  const addFav = (fav) => {
    if (!favsSet.has(fav)) {
      setFavsSet((prevFavsSet) => new Set([...prevFavsSet, fav]));
    }
  };

  const removeFav = (fav) => {
    if (favsSet.has(fav)) {
      const newFavsSet = new Set(favsSet);
      newFavsSet.delete(fav);
      setFavsSet(newFavsSet);
    }
  };

  return (
    <FavoritesContext.Provider value={{ favsSet, addFav, removeFav }}>
      {children}
    </FavoritesContext.Provider>
  );
}
