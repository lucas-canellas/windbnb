import { Drawer } from "@material-ui/core";
import { Container } from "../../globalStyles";
import { Content } from "./styles";
import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from "@material-ui/icons/Close";
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

export default function MenuDrawer({ state, toggleDrawer, cards }) {
  return (
    <>
      <Drawer anchor={"top"} open={state} onClose={toggleDrawer(false)}>
        <div>
          <Container>
            <div
              className="close-drawer"
              onClick={toggleDrawer(false)}
              id="close-modal"
            >
              Fechar
              <CloseIcon />
            </div>
            <Content>
              <button className="city">
                <p id="location">Location</p>
                <Autocomplete
                  id="location-name"
                  options={cards}
                  getOptionLabel={(option) => `${option.city}, ${option.country}` }
                  style={{ width: 300 }}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      // label="Combo box"
                      // variant="outlined"
                    />
                  )}
                />
                {/* <input id="location-name" /> */}
              </button>
              <button className="guest">
                <p id="guests">Guests</p>
                <input id="guest-name" />
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
