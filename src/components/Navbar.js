import React, {useState} from 'react'
import Logo from '../assets/Logo.svg'
import {NavLink, Link} from 'react-router-dom'
import {toast} from "react-hot-toast"
import "./Navbar.css"


const Navbar = (props) => {
    const isLoggedIn = props.isLoggedIn
    let setIsLoggedIn = props.setIsLoggedIn
    const [sidebar, setSidebar] = useState(false)
    
    function showSidebar(){
        setSidebar(!sidebar)
    }

    return (
    <div className="w-screen bg-richblack-900">
        <div className=" flex justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto">
        {/* width={160} height={32} */}
            <NavLink to ="/">
                <img src={Logo} alt="Logo" className="scale-95" loading="lazy"/>
            </NavLink>

            <nav className="hidden lg:block">
                <ul className="flex gap-x-6 text-richblack-100">
                    <li>
                        <NavLink to ="/">Home</NavLink>
                    </li>

                    <li>
                        <NavLink to ="/blogs">Blogs</NavLink>
                    </li>

                    <li>
                        <NavLink to ="/shopping">Student Store</NavLink>
                    </li>

                    <li>
                        <NavLink to ="/opportunities">Job opportunities</NavLink>
                    </li>
                </ul>
            </nav>


            <div className="lg:flex items-center gap-x-4 hidden">
                {!isLoggedIn && 
                    <NavLink to ="/login">
                        <button className="bg-richblack-800 text-richblack-100
                        py-[8px] px-[12px] rounded-[8px] border border-richblack-700"
                        >Login</button>
                    </NavLink>
                }

                {!isLoggedIn &&
                    <NavLink to ="/signup" >
                        <button className="bg-richblack-800 text-richblack-100
                        py-[8px] px-[12px] rounded-[8px] border border-richblack-700"
                        >Sign up</button>
                    </NavLink>
                }

                {isLoggedIn && 
                    <NavLink to ="/">
                        <button className="bg-richblack-800 text-richblack-100
                        py-[8px] px-[12px] rounded-[8px] border border-richblack-700" 
                        onClick={()=>{
                            setIsLoggedIn(false)
                            toast.success("Logged Out")
                        }}>Log out</button>
                    </NavLink>
                }

                {isLoggedIn &&
                    <NavLink to ="/Dashboard">
                        <button className="bg-richblack-800 text-richblack-100
                        py-[8px] px-[12px] rounded-[8px] border border-richblack-700"
                        >Dashboard</button>
                    </NavLink>
                }
            </div>

            {/* Hamburger Menu Code */}
            
            <div className="lg:hidden">
                <div className="scale-150">
                    {sidebar ? 
                    (
                        <button className="mr-4" onClick={showSidebar} >
                            <span className="text-white font-extrabold">&#10005;</span>
                        </button>  
                    )
                    :
                    (<button className="mr-4 fill-white" onClick={showSidebar}>
                        <span className="text-white font-medium">&#9776;</span>
                    </button>) 
                    }
                </div>

                <div className={`${sidebar ? "nav-menu active":"nav-menu"} border-2 border-richblack-700 border-solid` }>
                    <div>
                        
                        <div className="flex flex-row justify-end w-full pt-6 mr-3 pr-4">
                            <div className="flex" onClick={showSidebar}>
                                <span className=" text-black font-extrabold scale-150 cursor-pointer">&#10005;</span>
                            </div>
        
                        </div>

                        <li className="nav-text mt-20"  onClick={showSidebar}>
                            <NavLink to ="/">Home</NavLink>
                        </li>

                        <li className="nav-text" onClick={showSidebar}>
                            <NavLink to ="/blogs">Blogs</NavLink>
                        </li>

                        <li className="nav-text" onClick={showSidebar}>
                            <NavLink to ="/shopping">Student Store</NavLink>
                        </li>

                        <li className="nav-text" onClick={showSidebar}>
                            <NavLink to ="/opportunities">Job opportunities</NavLink>
                        </li>

                        <li className="nav-text" onClick={showSidebar}>
                            {!isLoggedIn && 
                                <NavLink to ="/login">Login</NavLink>
                            }
                        </li>

                        <li className="nav-text" onClick={showSidebar}>
                            {!isLoggedIn &&
                                <NavLink to ="/signup">Sign Up</NavLink>
                            }
                        </li>

                        <li className="nav-text" onClick={showSidebar}>
                            {isLoggedIn && 
                                <NavLink to ="/" onClick={()=>{
                                        setIsLoggedIn(false)
                                        toast.success("Logged Out")
                                    }}>
                                    Log out
                                </NavLink>
                            }
                        </li>

                        <li className="nav-text" onClick={showSidebar}>
                            {isLoggedIn &&
                                <NavLink to ="/Dashboard">
                                    Dashboard
                                </NavLink>
                            }
                        </li>
                    </div>
                </div>
            </div>



        </div>
    </div>
  )
}

export default Navbar;