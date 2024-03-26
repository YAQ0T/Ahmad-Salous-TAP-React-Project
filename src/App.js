import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Details } from "./pages/details/details";
import { Main } from "./pages/home/main/main";
import { useEffect, useState } from "react";
import { HeaderLayout } from "./Layouts/Header-layout";
import { FooterLayout } from "./Layouts/Footer-layout";
import { FavoritesProvider } from "./contexts/FavoritesContext";
import UseAxios from "./hooks/useAxios";
// use story telling in the intruduce ur self
function App() {
  const [showFavorites, setShowFavorites] = useState("none");
  const [originalCards, setOriginalCards] = useState([]);
  const [modifiedCards, setModifiedCards] = useState([]);
  const { res, error } = UseAxios(
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
      <div className="App">
        <HeaderLayout
          showFavorites={showFavorites}
          setShowFavorites={setShowFavorites}
        />
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
            <Route
              path="Ahmad-Salous-TAP-React-Project/details/:id"
              element={<Details />}
            />
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
