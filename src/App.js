import "./App.css";
import { Header } from "./containers/Header";
import { MainContent } from "./containers/MainContent";
import { Footer } from "./containers/Footer";
import { StateProvider } from "./state/StateContext";
import { UserProvider } from "./state/UserContext";

function App() {
  return (
    <UserProvider>
      <StateProvider>
        <div className="flex flex-col text-sm md:text-xl">
          <Header />
          <MainContent/>
          <Footer />
        </div>
      </StateProvider>
    </UserProvider>
  );
}

export default App;
