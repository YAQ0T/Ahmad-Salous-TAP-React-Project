import { BottomHeader } from "../shared-components/buttom-header/bottom-header";
import { Header } from "../shared-components/header/header";

export function HeaderLayout({ showFavorites, setShowFavorites }) {
  return (
    <>
      <Header
        showFavorites={showFavorites}
        setShowFavorites={setShowFavorites}
      />
      <BottomHeader />
    </>
  );
}
