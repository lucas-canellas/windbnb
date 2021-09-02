import { GlobalStyle } from "./globalStyles";
import { Navbar } from "./components/Navbar";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import './App.css';
import TitleBar from "./components/TitleBar";
import { useState, useEffect } from "react";
import MenuDrawer from "./components/MenuDrawer";
import data from 'axios';   

function App() {

  const [state, setState] = useState(false);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    data.get('./stays.json').then(response => {
      setCards(response.data)
    })     
    
  },[])

  const toggleDrawer = (open) => (event) => {
    setState(open)
  }

  return (
    <>
      <GlobalStyle />
      <div class="wrapper">
        <header>
          <Navbar toggleDrawer={toggleDrawer} />
          <MenuDrawer state={state} toggleDrawer={toggleDrawer} cards={cards} />
          <TitleBar />
        </header>
        <main>
          <Cards cards={cards}/>
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
}

export default App;
