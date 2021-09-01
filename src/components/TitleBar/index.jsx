import { Container } from "../../globalStyles";
import { Content } from "./styles";

export default function TitleBar() {
  return (
    <Container>
      <Content>
        <p id="place-name">Stays in Finland</p>
        <p id="number-stays">12+ stays</p>
      </Content>
    </Container>
  );
}
