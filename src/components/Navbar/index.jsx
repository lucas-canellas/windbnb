import { Container } from "../../globalStyles";
import logoImg from "../../assets/logo.svg";
import SearchIcon from "@material-ui/icons/Search";
import { Button, Content } from "./styles";
import MenuDrawer from "../MenuDrawer";


export function Navbar() {




  return (
    <Container>
      <Content>
        <img src={logoImg} alt="Logo" />
        <MenuDrawer/>

        <Button>
          <button className="name-city">Itaborai, Brazil</button>
          <input  placeholder="Add guests" />
          <div className="icon">
            <SearchIcon />
          </div>
        </Button>

      </Content>
    </Container>
  );
}

