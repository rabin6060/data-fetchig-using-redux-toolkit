import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'


const Navigation = () => {
  const post = useSelector((state)=>state.posts)
  return (
    <div>
      <div className='flex justify-between items-center text-[28px]
                     mx-5 my-2 text-red-500'>
        <span>Posts</span>
        <div className='flex gap-1.5'>
          <ul className='list-none flex gap-3 cursor-pointer'>
            <Link to="/posts">Home</Link>
            <Link to={`/posts/id`}>CardItem</Link>
          </ul>
          <div className='bg-purple-300 rounded mx-1'>
            Post Items : {post.length}
          </div>
        </div>
      
      </div>
      
     
    </div>
  )
}

export default Navigation