import React from 'react'

const Navigation = ({query , handleInputChange}) => {
  return (
    <div className=' h-[96px] md:px-[40px] lg:px-[80px] px-3 py-[24px] flex justify-center items-center gap-6'>
            
                <input type="text" className=' md:w-[70%] w-[100%] px-[16px] py-3 outline-none border-none bg-[#F2F4F8] text-secondary placeholder:text-secondary/40 transition-all duration-200 shadow-md rounded-[20px]' placeholder='Search For...'  onChange={handleInputChange} value={query} />
            
    </div>
  )
}

export default Navigation