import { TextField } from '@material-ui/core'
import { Typography } from '@material-ui/core'
import React from 'react'
import usestyles from './styles'
import (TextField, Button, Typography, Paper) from '@material-ui/core'

const Form = () => {
    const classes = usestyles()

    const handleSubmit = () => {

    }
   
    
    
    return (<Paper className={classes.paper}>
        <form autoComplete='off' noValidate className={classes.form}></form>
        <Typography variant="h6">Creating a Post</Typography>  
        <TextField name="creator" variant="outlined" label="creator" fullWidth=""/>
    </Paper>
    );
}

export default Form;