import React from "react";
import { Container } from "../../globalStyles";
import Card from "./../Card";
import { Content } from "./styles";

export default function Cards({ cards, sumCouter, city }) {
  console.log(sumCouter);
  console.log(city);
  return (
    <Container>
      <Content>
        {cards.map((card) =>
          city ? (
            card.city === city && sumCouter <= card.maxGuests ? (
              <Card data={card} />
            ) : null
          ) : (
            <Card data={card} />
          )
        )}
      </Content>
    </Container>
  );
}
