import { GlobalStyle } from "./globalStyles";
import { Navbar } from "./components/Navbar";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import './App.css';
import TitleBar from "./components/TitleBar";
import { useState } from "react";
import MenuDrawer from "./components/MenuDrawer";

function App() {

  const [state, setState] = useState(false);

  const toggleDrawer = (open) => (event) => {
      setState(open)
  }

  return (
    <>
      <GlobalStyle />
      <div class="wrapper">
        <header>
          <Navbar toggleDrawer={toggleDrawer} />
          <MenuDrawer state={state} toggleDrawer={toggleDrawer}/>
          <TitleBar/>
        </header>
        <main>
          <Cards />          
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
}

export default App;
