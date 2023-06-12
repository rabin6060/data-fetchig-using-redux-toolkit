import React,{useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import DisplayPosts from "../components/DisplayPosts"
import { datafetch } from '../redux/DataFetchSlice'

const Home = () => {
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(datafetch())
  },[dispatch])

  const data = useSelector((state)=>state.data.posts)
  
  return (
    <div className="mx-5 mt-3 w-full flex flex-wrap gap-3">
      {
        data?.map(d=>(
          <DisplayPosts key={d.id} d={d}/>
        ))
      }
    </div>
  )
}

export default Home