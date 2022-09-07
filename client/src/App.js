import React from 'react'
import {Container, AppBar, Typography, Grow, Grid} from "material-ui/core"
import{useDispatch} from 'react-redux'

import Posts from './components/Posts/Posts'
import Form from './components/Form/Form'
import useStyles from './styles'

import instaverse from './images/Instaverse.png'

const App = () => {
    const classes = useStyles()
    const dispatch = usedispatch()

    useEffect(() => {
        dispatch(getPosts())
        
    },[dispatch])
    return (
        <Container maxwidth="lg">
            <AppBar className={classes.AppBar} postion="static" color="inherit">
                <Typography className={classes.heading} variant="h2" align="center">Instaverse</Typography>
                <img classname={classes.img}src={instaverse} alt="instaverse"/>

            </AppBar>
            <Grow in>
                <Container>
                    <Grid Container justifyContent="space-between" alignItems="stretch" spacinig="4">
                        <Grid item xs={12} sm={7}>
                          <posts/>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                          <form/>
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    )
}

export default App;