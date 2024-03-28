import { Favorites } from "../shared-components/favorites/favorites";
import useAxios from "../hooks/useAxios";
export function FooterLayout({ showFavorites }) {
  const { res, error } = useAxios(
    "https://tap-web-1.herokuapp.com/topics/list",
    "GET"
  );
  if (error) {
    console.log(error);
  }

  return (
    <>
      <Favorites showFavorites={showFavorites} cards={res} />
      <div id="year-of-develope">
        Developed with <ion-icon name="heart"></ion-icon> © 2024
      </div>
    </>
  );
}
