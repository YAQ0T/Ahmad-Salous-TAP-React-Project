import "./App.css";
import { Details } from "./pages/details/details";
import { Main } from "./pages/home/main/main";
import { BottomHeader } from "./shared-components/buttom-header/bottom-header";
import { Favorites } from "./shared-components/favorites/favorites";
import { Header } from "./shared-components/header/header";

function App() {
  return (
    <div className="App">
      <Header />
      <BottomHeader />
      <Details />
      {/* <Main />
     
      <Favorites /> */}
      <div id="year-of-develope">
        Developed with <ion-icon name="heart"></ion-icon> © 2024
      </div>
    </div>
  );
}

export default App;
