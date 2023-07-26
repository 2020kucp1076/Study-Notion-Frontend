import React, {useContext} from 'react'
import {AppContext} from '../context/AppContext'

const Pagination = () => {
  
  const {page, handlePageChange, totalPages} = useContext(AppContext)
  
  return (
    <div className="fixed bottom-0 inset-x-0 bg-white py-2 border-t-2 border-solid border-t-gray-300">
      <div className="flex items-center gap-x-3 w-11/12 max-w-2xl mx-auto">
        <div className="flex gap-x-2">
          {page>1 &&
            <button onClick={()=>handlePageChange(page-1)}
            className="rounded-md border-2 px-4 py-1 border-gray-300 border-solid">
              Previous
            </button>
          }

          {page<totalPages && 
            <button onClick={()=>handlePageChange(page+1)}
            className="rounded-md border-2 px-4 py-1 border-gray-300 border-solid">
                        Next
            </button>
            
          }
      
        </div>
        
        <p className="text-sm font-semibold ml-auto">
          Page {page} of {totalPages}
        </p>
        
      </div>


    </div>
  )
}

export default Pagination