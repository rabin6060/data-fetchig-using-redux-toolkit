import React from 'react'
import { useDispatch } from 'react-redux'
import { addCard } from '../redux/CardSlice'

const DisplayPosts = ({d}) => {
  const dispatch = useDispatch()

  const handleClick = ()=>{
    dispatch(addCard(d))
  }

 return (
    <>
     
      <div 
      className='w-[300px] h-[250px] bg-gray-300 p-2 rounded
        hover:bg-blue-200 shadow-lg
        flex flex-col justify-evenly'>
        <div>
          <h1>Post-Id: {d.id}</h1>
          <h2>Title: {d.title}</h2>
        </div>
        <div className='bg-white rounded p-2 text-sm'>
          Body: {d.body}
        </div>
        <button className='btn' onClick={()=>handleClick()}>Add</button>
      </div>
      
    </>
    
  )
}

export default DisplayPosts