import React, {useContext} from 'react'
import {AppContext} from '../context/AppContext'
import Spinner from './Spinner'
import BlogDetails from './BlogDetails'

const Blogs = () => {
  
  const {posts,loading} = useContext(AppContext)
  // mx-auto w-11/12 max-w-[672px] py-8 flex flex-col gap-y-4 mt-[66px] mb-[70px]  h-full justify-center items-center
  return (
    <div className="flex flex-col gap-y-10 my-4 items-center justify-center">
      {
        loading ? (<Spinner/>)
        :(
          posts.length === 0 ? (
            
            <div><p>No Post Found</p></div>
          )
          :( posts.map((post) => 

            (<BlogDetails key={post.id} post={post}/>)))
        )
      }
      
    </div>
  )
}

export default Blogs