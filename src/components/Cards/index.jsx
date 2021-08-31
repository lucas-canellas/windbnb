import React from "react";
import { Container } from "../../globalStyles";
import Card from "./../Card";
import data from '../../assets/stays.json';


import { Content } from "./styles";
import { useEffect } from "react";





export default function Cards() {

  useEffect(()=> console.log(data),[])

  return (
    <Container>
      <Content>
        {data.map(card => (
					<Card data={card}/> 
				))}               
      </Content>
    </Container>
  );
}
