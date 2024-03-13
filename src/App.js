import "./App.css";
import { SelectList } from "./pages/home/search/select-list/select-list";
import { BottomHeader } from "./shared-components/buttom-header/bottom-header";
import { Header } from "./shared-components/header/header";

function App() {
  return (
    <div className="App">
      <Header />
      <BottomHeader />
      <SelectList label={"Sort by:"} />
    </div>
  );
}

export default App;
