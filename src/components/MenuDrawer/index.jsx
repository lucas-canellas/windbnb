import { Drawer } from "@material-ui/core";
import { Container } from "../../globalStyles";
import { Content } from "./styles";
import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from '@material-ui/icons/Close';

export default function MenuDrawer({ state, toggleDrawer }) {

  return (
    <>
      <Drawer anchor={"top"} open={state} onCLose={toggleDrawer(false)}>
        <div>
          <Container>
            <div onClick={toggleDrawer(false)} id="close-modal"><CloseIcon/></div>
            <Content>
              <button className="city">
                <p id="location">Location</p>
                <p id="location-name">Helsink, Filand</p>
              </button>
              <button className="guest">
                <p id="guests">Guests</p>
                <p id="guest-name">Helsink, Filand</p>
              </button>
              <div className="button">
                <button>
                  <div>
                    <SearchIcon />
                  </div>
                  <div>Search</div>
                </button>
              </div>
            </Content>
          </Container>
        </div>
      </Drawer>
    </>
  );
}
