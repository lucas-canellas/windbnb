import { Drawer } from "@material-ui/core";
import { Container } from "../../globalStyles";
import { Content } from "./styles";
import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from '@material-ui/icons/Close';

export default function MenuDrawer({ state, toggleDrawer }){

    return (
        <>
            <Drawer anchor={"top"} open={state} onClose={toggleDrawer(false)}>
                <div>
                
                    <Container>                 
                    <div className="close-drawer"onClick={toggleDrawer(false) }  id="close-modal">Fechar<CloseIcon /></div>
                        <Content>
                            <button className="city">
                                <p id="location">Location</p>
                                <input id="location-name"/>
                            </button>
                            <button className="guest">
                                <p id="guests">Guests</p>
                                <input id="guest-name"/>
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
