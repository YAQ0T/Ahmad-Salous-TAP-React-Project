import "./App.css";
import { Main } from "./pages/home/main/main";
import { BottomHeader } from "./shared-components/buttom-header/bottom-header";
import { Header } from "./shared-components/header/header";

function App() {
  return (
    <div className="App">
      <Header />
      <BottomHeader />
      <Main />
    </div>
  );
}

export default App;
