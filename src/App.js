import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Details } from "./pages/details/details";
import { Main } from "./pages/home/main/main";
import { BottomHeader } from "./shared-components/buttom-header/bottom-header";
import { Header } from "./shared-components/header/header";
// use story telling in the intruduce ur self
function App() {
  return (
    <div className="App">
      <Header />
      <BottomHeader />
      <Routes>
        <Route path="/">
          <Route index element={<Main />} />
          <Route path="details/:id" element={<Details />} />
        </Route>
      </Routes>
      <div id="year-of-develope">
        Developed with <ion-icon name="heart"></ion-icon> © 2024
      </div>
    </div>
  );
}

export default App;
