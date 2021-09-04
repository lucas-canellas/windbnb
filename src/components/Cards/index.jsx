import React from "react";
import { Container } from "../../globalStyles";
import Card from "./../Card";
import { Content } from "./styles";

export default function Cards({ cards, sumCouter, city }) {
  return (
    <Container>
      <Content>
        {cards.map((card) =>
          city ? (
            card.city === city && sumCouter <= card.maxGuests ? (
              <Card key={card.title} data={card} />
            ) : null
          ) : (
            <Card key={card.title} data={card} />
          )
        )}
      </Content>
    </Container>
  );
}
