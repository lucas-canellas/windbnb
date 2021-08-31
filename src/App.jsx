import { GlobalStyle } from "./globalStyles";
import { Navbar } from "./components/Navbar";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import './App.css';

function App() {
  return (
    <>
      <GlobalStyle />
      <div class="wrapper">
        <header>
          <Navbar />
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
