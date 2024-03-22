import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Details } from "./pages/details/details";
import { Main } from "./pages/home/main/main";
import { BottomHeader } from "./shared-components/buttom-header/bottom-header";
import { Header } from "./shared-components/header/header";
import { useState } from "react";
import { Favorites } from "./shared-components/favorites/favorites";

// use story telling in the intruduce ur self
function App() {
  const [showFavorites, setShowFavorites] = useState("none");
  console.log(document.documentElement.style);
  return (
    <div className="App">
      <Header
        showFavorites={showFavorites}
        setShowFavorites={setShowFavorites}
      />
      <BottomHeader />
      <Routes>
        <Route path="/Ahmad-Salous-TAP-React-Project">
          <Route index element={<Main />} />
          <Route
            path="Ahmad-Salous-TAP-React-Project/details/:id"
            element={<Details />}
          />
        </Route>
      </Routes>
      <Favorites showFavorites={showFavorites} />
      <div id="year-of-develope">
        Developed with <ion-icon name="heart"></ion-icon> © 2024
      </div>
    </div>
  );
}

export default App;
