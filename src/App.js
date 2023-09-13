import "./App.css";
import { Header } from "./containers/Header";
import { MainContent } from "./containers/MainContent";
import { Footer } from "./containers/Footer";
import { StateProvider } from "./state/StateContext";

function App() {
  return (
    <StateProvider>
      <header>
        <Header />
        <MainContent/>
        <Footer />
      </header>
    </StateProvider>
  );
}

export default App;
