import React from 'react'
import Post from './Post/Post'
import usestyles from './styles'
import { useSelector } from 'react-redux'

const Post = () => {
    const classes = usestyles()
    const posts = useSelector((state)=>state.posts)
    return (
        
    <>
            <h1>Post</h1>;
            <Post />
            <Post />
    </>
    
    )
}

export default Post;