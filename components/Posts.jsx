import React from 'react'
import Post from './Post'

const Posts = () => {

    const FactitiousData = [
        {
            id: '101',
            username: 'godfather',
            userImg: 'https://picsum.photos/200/300?grayscale',
            img: ""

        }
    ]


  return (
    <div className=''>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
    </div>
  )
}

export default Posts