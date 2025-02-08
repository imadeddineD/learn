import React from 'react'


const Products = ({result}) => {
    
  return (
    <div className=' py-[25px] flex flex-col gap-[15px] justify-center items-center'>
        {
        result.length === 0 ? 
        <div className=' h-[170vh] flex justify-center pt-[140px] text-[22px] font-semibold'>Not Found</div> : 
        <>{result}</>
        }
    </div>
  )
}

export default Products