import { Container } from "../../globalStyles";
import logoImg from "../../assets/logo.svg";
import SearchIcon from "@material-ui/icons/Search";
import { Button, Content } from "./styles";

export function Navbar() {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="Logo" />

        <Button>
          <div className="name-city">Itaborai, Brazil</div>
          <input placeholder="Add guests" />
          <div className="icon">
            <SearchIcon />
          </div>
        </Button>
      </Content>
    </Container>
  );
}
