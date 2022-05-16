import logo from "./logo.svg";
import "./App.css";
import { Header } from "./components/Header";
import { Body } from "./components/Body";
import { Footer } from "./components/Footer";
import { CountDownProvider } from "./contexts/CountDown";

function App() {
  return (
    <CountDownProvider>
      <div className="app">
        <Header />
        <Body />
        <Footer />
      </div>
    </CountDownProvider>
  );
}

export default App;
