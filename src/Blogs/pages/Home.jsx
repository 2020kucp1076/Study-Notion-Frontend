import React from 'react'
import Blogs from '../components/Blogs'
import Pagination from '../components/Pagination'
import Header from '../components/Header'

const Home = () => {
  return (
    <div>
        
        <div className="my-[100px]">
            <Blogs/>
            <Pagination/>
        </div>
    </div>
  )
}

export default Home