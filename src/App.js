import "./App.css";
import { Header } from "./containers/Header";
import { MainContent } from "./containers/MainContent";
import { Footer } from "./containers/Footer";
import { StateProvider } from "./state/StateContext";

function App() {
  return (
    <StateProvider>
      <div className="flex flex-col text-sm">
        <Header />
        <MainContent/>
        <Footer />
      </div>
    </StateProvider>
  );
}

export default App;
