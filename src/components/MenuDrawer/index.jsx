import { Button, Drawer } from "@material-ui/core";
import { useState } from "react";


export default function MenuDrawer({props}) {

    const [state, setState] = useState(false);

    const toggleDrawer = (open) => (event) => {
        setState(open)
    }


    const list = () => (
        <div onClick={toggleDrawer(false)}>
            <p>asdasasdasdasdas</p>
        </div>


    )

    return (
        <>
            <Button onClick={toggleDrawer(true)}>Abrir topo</Button>
            <Drawer
                anchor={'top'}
                open={state}
                onCLose={toggleDrawer(false)}
            >
                {list()}
            </Drawer>
        </>
    )
}
