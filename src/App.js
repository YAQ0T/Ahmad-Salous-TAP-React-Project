import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Details } from "./pages/details/details";
import { Home } from "./pages/home/home";
import { useContext, useState } from "react";
import { FooterLayout } from "./Layouts/Footer-layout";
import { FavoritesProvider } from "./contexts/FavoritesContext";
import { ThemeContext } from "./contexts/ThemeContext";
import { Header } from "./shared-components/header/header";
import { BottomHeader } from "./shared-components/buttom-header/bottom-header";
function App() {
  const { ThemeState } = useContext(ThemeContext);
  const [showFavorites, setShowFavorites] = useState("none");

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
            <Route index element={<Home />} />
            <Route path="details/:id" element={<Details />} />
          </Route>
        </Routes>
        <FooterLayout showFavorites={showFavorites} />
      </div>
    </FavoritesProvider>
  );
}

export default App;
