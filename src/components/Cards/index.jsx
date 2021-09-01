import React from "react";
import { Container } from "../../globalStyles";
import Card from "./../Card";
import { Content } from "./styles";
import { useEffect, useState } from "react";
import data from 'axios';   


export default function Cards() {

  const [cards, setCards] = useState([]);

  useEffect(() => {
    data.get('./stays.json').then(response => {
      setCards(response.data)
    })     
    
  },[])

  
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
