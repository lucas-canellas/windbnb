import React from "react";
import { Container } from "../../globalStyles";
import Card from "./../Card";
import { Content } from "./styles";




export default function Cards({cards}) {

  
  return (
    <Container>
      <Content>
        {cards.map(card => (
					<Card data={card}/> 
				))}                       
      </Content>
    </Container>
  );
}
