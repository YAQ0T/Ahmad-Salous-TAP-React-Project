import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Details } from "./pages/details/details";
import { Main } from "./pages/home/main/main";
import { useContext, useEffect, useState } from "react";
import { HeaderLayout } from "./Layouts/Header-layout";
import { FooterLayout } from "./Layouts/Footer-layout";
import { FavoritesProvider } from "./contexts/FavoritesContext";
import useAxios from "./hooks/useAxios";
import { ThemeContext, ThemeContextProvider } from "./contexts/ThemeContext";
import { Header } from "./shared-components/header/header";
import { BottomHeader } from "./shared-components/buttom-header/bottom-header";
function App() {
  const { ThemeState } = useContext(ThemeContext);
  const [showFavorites, setShowFavorites] = useState("none");
  const [originalCards, setOriginalCards] = useState([]);
  const [modifiedCards, setModifiedCards] = useState([]);
  const { res, error } = useAxios(
    "https://tap-web-1.herokuapp.com/topics/list",
    "GET"
  );
  if (error) {
    console.log(error);
  }
  useEffect(() => {
    setOriginalCards(res);
    setModifiedCards(res);
  }, [res]);

  if (!originalCards) {
    return (
      <>
        <HeaderLayout
          showFavorites={showFavorites}
          setShowFavorites={setShowFavorites}
        />
      </>
    );
  }
  return (
    <FavoritesProvider>
      <div className={"App " + ThemeState}>
        <Header
          showFavorites={showFavorites}
          setShowFavorites={setShowFavorites}
        />
        <BottomHeader />
        <Routes>
          <Route path="/Ahmad-Salous-TAP-React-Project">
            <Route
              index
              element={
                <Main
                  originalCards={originalCards}
                  modifiedCards={modifiedCards}
                  setOriginalCards={setOriginalCards}
                  setModifiedCards={setModifiedCards}
                />
              }
            />
            <Route path="details/:id" element={<Details />} />
          </Route>
        </Routes>
        <FooterLayout
          showFavorites={showFavorites}
          originalCards={originalCards}
        />
      </div>
    </FavoritesProvider>
  );
}

export default App;
