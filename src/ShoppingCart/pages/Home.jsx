import {useState, useEffect} from 'react'
import Spinner from '../components/Spinner'
import Product from '../components/Product'
import Data from "../data"
import {useSelector} from 'react-redux'

const Home = () => {
  const API_URL = "https://api.itbook.store/1.0/new";
  const [loading, setLoading] = useState(false)
  const [posts, setPosts] = useState([])
  const {cart} = useSelector((state)=>state)


  async function fetchProductData(){
    setLoading(true)

    try{
      const res = await fetch(API_URL);
      const data = await res.json()
      setPosts(data.books);
      
    }
    catch(error){
      console.log("Error in api call")
      setPosts([])
    }

    setLoading(false)
  }

  useEffect(()=>{
    fetchProductData()
  },[])

  return (
  <div>
      {/* <div className="max-w-[1200px] p-2 flex justify-center space-x-5">
      <div className="flex items-center font-medium text-slate-100 tracking-tighter list-none mr-5 space-x-6">
        <NavLink to="/shopping">
          <p className="text-black">Home</p>
        </NavLink>

        <NavLink to="/shopping/cart">
        <div className="relative ">
          <FaShoppingCart className="text-2xl text-black"/>

          {cart.length >0 && 
          <span className="absolute -top-1 -right-2 bg-green-600 text-xs w-5 h-5 flex
          justify-center items-center rounded-full text-white animate-bounce "
          >{cart.length}</span>}
        </div>
        </NavLink>
        
      </div>
      </div> */}
    
    {

      loading ? <Spinner/> 
      
      :(posts.length > 0 ? 
      (<div className="max-w-[1200px] grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-2 mx-auto space-y-10 space-x-5 min-h-[80vh] ">
        {
          posts.map((post)=>(<Product key={post["isbn13"]} post={post}/>))
        }
      </div>)
      
      :(<div className="flex justify-center items-center"><p>No Data Found</p></div>))
    }  
  </div>);
};

export default Home;
