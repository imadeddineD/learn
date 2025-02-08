import React, { useState } from 'react'
import engineer1 from "../../assets/engineer1.jpeg"
import engineer2 from "../../assets/engineer2.jpg"
import english1 from "../../assets/english1.jpg"
import programming1 from "../../assets/programming1.png"
import programming2 from "../../assets/programming2.png"
import science1 from "../../assets/science1.jpeg"
import history from "../../assets/history.jpg"
import psychology from "../../assets/psychology.jpg"
import Navigation from '../Navigation'
import Recommended from '../Recommended'
import Products from '../Products'


const data = [
  {
      id: "1",
      title: "Introduction to Thermodynamics: Energy Transfer from Here to There",
      imageUrl: engineer1,
      chaptersLength: 4,
      price: 19.99,
      progress: null,
      category: "engineering",
  },
  {
      id: "2",
      title: "Introduction to Engineering Design",
      imageUrl: engineer2,
      chaptersLength: 3,
      price: 12.99,
      progress: null,
      category: "engineering",
  },
  {
      id: "3",
      title: "Specialization Learn English: Beginning Grammar",
      imageUrl: english1,
      chaptersLength: 5,
      price: 10.99,
      progress: null,
      category: "english",
  },
  {
      id: "4",
      title: "C Programming for Everybody Specialization",
      imageUrl: programming1,
      chaptersLength: 6,
      price: 19.99,
      progress: null,
      category: "programming",
  },
  {
      id: "5",
      title: "Capstone: Data Retrieval, Processing, and Visualization with Python",
      imageUrl: programming2,
      chaptersLength: 4,
      price: 14.99,
      progress: null,
      category: "programming",
  },
  {
      id: "6",
      title: "Astronomy: Exploring time and space",
      imageUrl: science1,
      chaptersLength: 2,
      price: 9.99,
      progress: null,
      category: "science",
  },
  {
      id: "7",
      title: "The Modern World, Part I: World History from 1760 to 1910",
      imageUrl: history,
      chaptersLength: 7,
      price: 19.99,
      progress: null,
      category: "history",
  },
  {
      id: "8",
      title: "Positive psychiatry and mental health",
      imageUrl: psychology,
      chaptersLength: 4,
      price: 13.99,
      progress: null,
      category: "psychology",
  },
]



const Students = () => {


  const [selectedCategory, setSelectedCategory] = useState(null);

// ----------- Input Filter -----------
const [query, setQuery] = useState("");

const handleInputChange = (event) => {
  setQuery(event.target.value);
};

const filteredItems = data.filter(
  (product ) => product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
);

// ------------ Button Filtering -----------
const handleClick = (event) => {
  setSelectedCategory(event.target.value);
};

function filteredData(products , selected  , query ) {
  let filteredProducts = products;

  // Filtering Input Items
  if (query) {
    filteredProducts = filteredItems;
  }

  // Applying selected filter
  if (selected) {
    filteredProducts = filteredProducts.filter(
      ({ category , title } ) =>
        category === selected ||
        title === selected
    );
  }

  return filteredProducts.map((item) => (
    <a key={item.id} href={`/courses/${item.id}`} className="w-[100%] inline-block">
      <div key={item.id} className='w-full rounded-[16px] bg-white flex justify-center items-center gap-4 p-3 md:h-[185px] h-[185px] sm:h-[210px]'>
            <img
              src={item.imageUrl}
              alt='img'
              className='w-[157px] h-[100%] md:w-[211px] lg:w-[281px] object-cover rounded-[8px]'
            />
            <div className='w-[calc(100% - 173px)] md:w-[calc(100%-227px)] lg:w-[calc(100%-297px)] flex flex-col justify-between items-start lg:gap-5 md:gap-2 gap-1'>
              <div>
                <div className='text-[#343A3F] sm:text-[12px] text-[11px] font-[400]'><span className='font-bold'>{item.subject}</span> {" | "} {item.category}</div>
                <div 
                  className='text-[#21272A] md:text-[18px] text-[16px] font-[600] line-clamp-2 overflow-hidden'
                  title='The arts of influential writing for public and media relations'
                >
                  {item.title}
                </div>
              </div>
              <div>
                <div className='sm:text-[14px] text-[13px] font-[500]'>Category: <span className='text-[#697077]'>{item.category}</span></div>
                <div className='sm:text-[12px] text-[11px] font-[500] text-[#697077]'>{item.chaptersLength} Chapters</div>
              </div>
              <div className='text-[16px] font-[500]'>${item.price}</div>
            </div>
          </div>
          </a>
    )
  );
}

const result = filteredData(data, selectedCategory, query);


  return (
    <div className='bg-primary'>

      <Navigation query={query} handleInputChange={handleInputChange}/>

      <div className=' lg:px-[60px] md:px-8 sm:px-[25px] px-2 mx-auto relative pt-6 '>
        <Recommended handleClick={handleClick} />
        <Products result={result}/>
      </div>

    </div>
  )
}

export default Students