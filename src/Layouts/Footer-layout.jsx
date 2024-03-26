import { Favorites } from "../shared-components/favorites/favorites";
export function FooterLayout({ showFavorites, originalCards }) {
  return (
    <>
      <Favorites showFavorites={showFavorites} originalCards={originalCards} />
      <div id="year-of-develope">
        Developed with <ion-icon name="heart"></ion-icon> © 2024
      </div>
    </>
  );
}
