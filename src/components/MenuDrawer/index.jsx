import { Drawer } from "@material-ui/core";
import { Container } from "../../globalStyles";
import { Content } from "./styles";
import SearchIcon from "@material-ui/icons/Search";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import RemoveCircleOutlineIcon from "@material-ui/icons/RemoveCircleOutline";
import { useState } from "react";

export default function MenuDrawer({ state, toggleDrawer, cards }) {
  // const cities = [...new Set(cards.map((card) => card.city))];

  const [show, setShow] = useState(false) 
  const onClick = () => setShow(true)

  return (
    <>
      <Drawer anchor={"top"} open={state} onClose={toggleDrawer(false)}>
      <div>
      <Container>
        <Content>
          <div className="teste">
            <div className="location" onClick={onClick}>
              <p className="label-location">Location</p>
              <p className="location-selected"> asdasasda</p>
            </div>
            {show ? 
            
              <div className="cities-container">
              <div className="cities">
                <LocationOnIcon />
                <p>Helsink, Filand</p>
              </div>
              <div className="cities">
                <LocationOnIcon />
                <p>Helsink, Filand</p>
              </div>
              <div className="cities">
                <LocationOnIcon />
                <p>Helsink, Filand</p>
              </div>
              <div className="cities">
                <LocationOnIcon />
                <p>Helsink, Filand</p>
              </div>
            </div>

            :

            null
            
            }
          
          </div>
          <div className="teste"> 
            <div className="location" onClick={onClick}>
              <p className="label-location">Guests</p>
              <p className="location-selected"> Add guests</p>
            </div>
            { show ? 
              <>
              <div className="counter-container" >
              <p className="peoples">Adults</p>
              <p className="title">Ages 13 or above</p>
              <div className="counter">
                <RemoveCircleOutlineIcon />
                <p>0</p>
                <AddCircleOutlineIcon />
              </div>
            </div>
            <div className="counter-container">
              <p className="peoples">Children</p>
              <p className="title">Ages 2-1</p>
              <div className="counter">
                <RemoveCircleOutlineIcon />
                <p>0</p>
                <AddCircleOutlineIcon />
              </div>
            </div>
            </>

            :

            null
            
            }
          
          </div>
          <div className="teste">
            <div className="location button-search-container">
              <button className="button-search">
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
