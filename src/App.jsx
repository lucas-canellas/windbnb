import { GlobalStyle } from "./globalStyles";
import { Navbar } from "./components/Navbar";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import "./App.css";
import TitleBar from "./components/TitleBar";
import { useState, useEffect } from "react";
import MenuDrawer from "./components/MenuDrawer";
import data from "axios";

function App() {
  const [city, setCity] = useState(null);

  const [state, setState] = useState(false);
  const [cards, setCards] = useState([]);

  const [counter, setCounter] = useState(0);
  const [sumCouter, setSumCounter] = useState(0);

  useEffect(() => {
    data.get("./stays.json").then((response) => {
      setCards(response.data);
    });
  }, []);

  const toggleDrawer = (open) => (event) => {
    setState(open);
  };

  return (
    <>
      <GlobalStyle />
      <div class="wrapper">
        <header>
          <Navbar toggleDrawer={toggleDrawer} />
          <TitleBar />
          <MenuDrawer
            state={state}
            toggleDrawer={toggleDrawer}
            cards={cards}
            counter={counter}
            sumCouter={sumCouter}
            setCounter={setCounter}
            setSumCounter={setSumCounter}
            city={city}
            setCity={setCity}
          />
        </header>
        <main>
          <Cards cards={cards} city={city} sumCouter={sumCouter} />
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
}

export default App;
