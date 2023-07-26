import React,{useEffect, useState} from "react";
import {apiUrl, filterData} from "./data";
import Filter from "./components/Filter";
import Cards from  "./components/Cards";
import {toast} from "react-toastify";
import Spinner from "./components/Spinner";

const Home = () => {

  const [courses, setCourses] = useState(null);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState(filterData[0].title);

  const fetchData = async()=>{
    setLoading(true);
    
    try{
      let res = await fetch(apiUrl);
      let output = await res.json();
      setCourses(output.data);
    }
    catch(error){
      toast.error("Something went wrong")
    }

    setLoading(false);
  }

  useEffect(()=>{
    fetchData();
  },[])

  return( 
  <div className="bg-white">
  <div className="min-h-screen flex flex-col ">
     

     <div><Filter filterData={filterData} category={category} setCategory={setCategory}></Filter></div>
     
     <div  className="w-11/12 max-w-[1200px] 
        mx-auto flex flex-wrap justify-center items-center min-h-[50vh]">
      {
        loading ? (<Spinner/>):(<Cards courses = {courses} category={category}/>)
      }
      
     </div>
  </div>
  </div>);
};

export default Home;
