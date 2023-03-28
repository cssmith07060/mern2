import React from 'react'
import usestyles from './styles'
import (TextField, Button, Typography, Paper) from '@material-ui/core'

const Form = () => {
    const classes = usestyles()
    return <Paper className={classes.paper}>
        <form autoComplete='off' noValidate className={classes.form}></form>

    </Paper>
}

export default Form;