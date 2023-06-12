import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import {removeCard} from "../redux/CardSlice"

const CardItem = () => {
  const dispatch = useDispatch()
  const posts = useSelector((state)=>state.posts)

  const handleRemove = (post)=>{
    dispatch(removeCard(post))
  }


  return (
    <div className='mx-5'>
      <section className='p-4 w-full h-100% bg-slate-100 rounded'>
        { posts?.length===0? <div>No post selected</div>:
          posts.map(post=>(
            <div key={post.id} className="my-2 bg-slate-300 p-2 rounded">
              <h1> id: {post.id}</h1>
              <h2>Title: {post.title}</h2>
              <p>
                {post.body}
              </p>
              <button className='btn px-2 hover:to-blue-400' onClick={()=>handleRemove(post.id)}>Remove</button>
            </div>
          ))
        }
      </section>
    </div>
  )
}

export default CardItem