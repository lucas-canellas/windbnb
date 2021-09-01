import { Container } from "../../globalStyles";
import logoImg from "../../assets/logo.svg";
import SearchIcon from "@material-ui/icons/Search";
import { Button, Content } from "./styles";


export function Navbar({toggleDrawer}) {


  return (
    <Container>
      <Content>
        <img src={logoImg} alt="Logo" />
        

        <Button onClick={toggleDrawer(true)}>
          <button className="name-city">Add city</button>
          <button  className="guests" placeholder="Add guests">Add guest</button>
          <button className="icon">
            <SearchIcon />
          </button>
        </Button>

      </Content>
    </Container>
  );
}

