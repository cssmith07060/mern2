import { TextField } from '@material-ui/core'
import { Typography } from '@material-ui/core'
import React, {useState} from 'react'
import usestyles from './styles'
import (TextField, Button, Typography, Paper) from '@material-ui/core'

const Form = () => {
    const[postData, setPostData] = useState({ creator:'', title:'', message:'', tags:'', selectedFile:''})
     const classes = usestyles()
    
    const handleSubmit = () => {

    }
   
    
    
    return (<Paper className={classes.paper}>
        <form autoComplete='off' noValidate className={classes.form}></form>
        <Typography variant="h6">Creating a Post</Typography>  
        <TextField name="creator" variant="outlined" label="Creator" fullWidth="" value={postData.creator} onChange={(e) => setPostData({ ...postData, creator: e.currentTarget.value })} />

        <TextField name="title" variant="outlined" label="Creator" fullWidth="" value={postData.creator} onChange={(e) => setPostData({ ...postData, creator: e.currentTarget.value })} />
        
        <TextField name="message" variant="outlined" label="Creator" fullWidth="" value={postData.creator} onChange={(e) => setPostData({ ...postData, creator: e.currentTarget.value })} />
        
        <TextField name="creator" variant="outlined"label="Creator" fullWidth="" value={postData.creator} onChange={(e)=> setPostData({...postData, creator: e.currentTarget.value})}/>
        
    </Paper>
    );
}

export default Form;