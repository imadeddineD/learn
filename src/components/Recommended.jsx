import React from 'react'

const Recommended = ({ handleClick }) => {
  return (
    <div className='flex gap-2 justify-start items-center py-3 px-2 overflow-x-auto whitespace-nowrap'>
      <div className="section-box cursor-pointer inline-block">
        <input type="radio" name='category' value="" onChange={handleClick} id='All' className='hidden peer' defaultChecked />
        <label htmlFor="All" className='px-[16px] py-[4px] peer-checked:bg-white peer-checked:border-[2px] peer-checked:border-solid peer-checked:border-secondary peer-checked:text-secondary peer-checked:rounded-lg font-semibold cursor-pointer peer-checked:cursor-not-allowed'>
          All
        </label>
      </div>
      <div className="section-box cursor-pointer inline-block">
        <input type="radio" name='category' value="engineering" onChange={handleClick} id='engineering' className='hidden peer' />
        <label htmlFor="engineering" className='px-[16px] py-[4px] peer-checked:bg-white peer-checked:border-[2px] peer-checked:border-solid peer-checked:border-secondary peer-checked:text-secondary peer-checked:rounded-lg font-semibold cursor-pointer peer-checked:cursor-not-allowed'>
          Engineering
        </label>
      </div>
      <div className="section-box cursor-pointer inline-block">
        <input type="radio" name='category' value="english" onChange={handleClick} id='english' className='hidden peer' />
        <label htmlFor="english" className='px-[16px] py-[4px] peer-checked:bg-white peer-checked:border-[2px] peer-checked:border-solid peer-checked:border-secondary peer-checked:text-secondary peer-checked:rounded-lg font-semibold cursor-pointer peer-checked:cursor-not-allowed'>
          English
        </label>
      </div>
      <div className="section-box cursor-pointer inline-block">
        <input type="radio" name='category' value="programming" onChange={handleClick} id='programming' className='hidden peer' />
        <label htmlFor="programming" className='px-[16px] py-[4px] peer-checked:bg-white peer-checked:border-[2px] peer-checked:border-solid peer-checked:border-secondary peer-checked:text-secondary peer-checked:rounded-lg font-semibold cursor-pointer peer-checked:cursor-not-allowed'>
          Programming
        </label>
      </div>
      <div className="section-box cursor-pointer inline-block">
        <input type="radio" name='category' value="science" onChange={handleClick} id='science' className='hidden peer' />
        <label htmlFor="science" className='px-[16px] py-[4px] peer-checked:bg-white peer-checked:border-[2px] peer-checked:border-solid peer-checked:border-secondary peer-checked:text-secondary peer-checked:rounded-lg font-semibold cursor-pointer peer-checked:cursor-not-allowed'>
          Science
        </label>
      </div>
      <div className="section-box cursor-pointer inline-block">
        <input type="radio" name='category' value="history" onChange={handleClick} id='history' className='hidden peer' />
        <label htmlFor="history" className='px-[16px] py-[4px] peer-checked:bg-white peer-checked:border-[2px] peer-checked:border-solid peer-checked:border-secondary peer-checked:text-secondary peer-checked:rounded-lg font-semibold cursor-pointer peer-checked:cursor-not-allowed'>
          History
        </label>
      </div>
      <div className="section-box cursor-pointer inline-block">
        <input type="radio" name='category' value="psychology" onChange={handleClick} id='psychology' className='hidden peer' />
        <label htmlFor="psychology" className='px-[16px] py-[4px] peer-checked:bg-white peer-checked:border-[2px] peer-checked:border-solid peer-checked:border-secondary peer-checked:text-secondary peer-checked:rounded-lg font-semibold cursor-pointer peer-checked:cursor-not-allowed'>
          Psychology
        </label>
      </div>
    </div>
  );
};

export default Recommended;
