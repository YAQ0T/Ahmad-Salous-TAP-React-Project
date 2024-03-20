import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Details } from "./pages/details/details";
import { Main } from "./pages/home/main/main";
import { BottomHeader } from "./shared-components/buttom-header/bottom-header";
import { Header } from "./shared-components/header/header";
import UseAxios from "./hooks/useAxios";

function App() {
  const { res, error } = UseAxios(
    "https://tap-web-1.herokuapp.com/topics/list",
    "GET"
  );
  if (error) {
    console.log(error);
  }
  return (
    <div className="App">
      <Header />
      <BottomHeader />
      <Routes>
        <Route path="/">
          <Route
            index
            element={!res ? <div>Loading...</div> : <Main cards={res} />}
          />
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
