import React from 'react'
import Post from './Post/Post'
import usestyles from './styles'
cosnt state = useSelector(state => state.state)

const Post = () => {
    const classes = usestyles()
    return (
        
    <>
            <h1>Post</h1>;
            <Post />
            <Post />
    </>
    
    )
}

export default Post;