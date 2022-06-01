import React from 'react'
import Post from './Post/Post'


const Posts = () => {
    const classes = usestyles()

    return (
        <>
            <h1 className={classes.something}>Posts</h1>
            <Post/>
            <Post />
        </>    
    );
}

export default Posts;