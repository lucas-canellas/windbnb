import { Drawer } from "@material-ui/core";
import { Container } from "../../globalStyles";
import { Content } from "./styles";
import SearchIcon from "@material-ui/icons/Search";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import RemoveCircleOutlineIcon from "@material-ui/icons/RemoveCircleOutline";
import { useState } from "react";


export default function MenuDrawer({ state, toggleDrawer, cards, counter, sumCouter,setCounter,setSumCounter,city, setCity }) {
  
  const cities = [...new Set(cards.map((card) => card.city))];

  const [show, setShow] = useState(false) 
  const [showCounter, setShowCounter] = useState(false)

  const [counter2, setCounter2] = useState(0)


  const add = () => {
    setCounter(counter + 1)
    setSumCounter(sumCouter + 1)
  }

  const remove= () => {
    setCounter(counter - 1)
    setSumCounter(sumCouter - 1)
  }

  const add2 = () => {
    setCounter2(counter2 + 1)
    setSumCounter(sumCouter + 1)
  }

  const remove2 = () => {
    setCounter2(counter2 - 1)
    setSumCounter(sumCouter - 1)
  }

  const onClick = () => {
    setShow(true)
    setShowCounter(false)
  }

  const onClickCounter = () => {
    setShowCounter(true)
    setShow(false)
  }

  const selectCity = (event) => {
    setCity(event.target.innerHTML)
  }

  return (
    <>
      <Drawer anchor={"top"} open={state} onClose={toggleDrawer(false)}>
      <div>
      <Container>
        <Content>
          <div className="teste">
            <div className="location" onClick={onClick}>
              <p className="label-location">Location</p>
              <p className="location-selected"> {city}</p>
            </div>
            {show ? 
            
              <div className="cities-container" >
              {cities.map((city) => (
                <div className="cities">
                <LocationOnIcon />
                <p onClick={selectCity}>{city}</p><span>, Finland</span>
              </div>
              ))}
              
            </div>

            :

            null
            
            }
          
          </div>
          <div className="teste"> 
            <div className="location" onClick={onClickCounter}>
              <p className="label-location">Guests</p>
              <p className="location-selected">{sumCouter}</p>
            </div>
            { showCounter ? 
              <>
              <div className="counter-container" >
              <p className="peoples">Adults</p>
              <p className="title">Ages 13 or above</p>
              <div className="counter">
                <RemoveCircleOutlineIcon onClick={remove}/>
                <p>{counter}</p>
                <AddCircleOutlineIcon onClick={add}/>
                
              </div>
            </div>
            <div className="counter-container">
              <p className="peoples">Children</p>
              <p className="title">Ages 2-1</p>
              <div className="counter">
                <RemoveCircleOutlineIcon onClick={remove2} />
                <p>{counter2}</p>
                <AddCircleOutlineIcon onClick={add2}/>
              </div>
            </div>
            </>

            :

            null
            
            }
          
          </div>
          <div className="teste">
            <div className="location button-search-container">
              <button className="button-search" onClick={toggleDrawer(false)} >
                <SearchIcon/>
                <p>Search</p>
              </button>
            </div>
          </div>
        </Content>
        </Container>
        </div>
      </Drawer>
    </>
  );
}
