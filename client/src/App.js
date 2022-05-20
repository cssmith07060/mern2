import React from 'react'
import {Container, AppBar, Typography, Grow, Grid} from "material-ui/core"

import instaverse from './images/Instaverse.png'

const App = () => {
    return (
        <Container maxwidth="lg">
            <AppBar postion="static" color="inherit">
                <Typography variant="h2" align="center">Instaverse</Typography>
                <img src={instaverse} alt="instaverse"/>

            </AppBar>
        </Container>
    )
}

export default App;