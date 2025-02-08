import React from 'react';
import { useParams } from 'react-router-dom';
import engineer1 from "../../assets/engineer1.jpeg"
import engineer2 from "../../assets/engineer2.jpg"
import english1 from "../../assets/english1.jpg"
import programming1 from "../../assets/programming1.png"
import programming2 from "../../assets/programming2.png"
import science1 from "../../assets/science1.jpeg"
import history from "../../assets/history.jpg"
import psychology from "../../assets/psychology.jpg"


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


const CourseDetails = () => {
  const { id } = useParams();  // Get the course id from the URL
  const course = data.find((item) => item.id === id);  // Find the course by id

  if (!course) {
    return <div className=' h-[100vh] flex justify-center items-center text-[25px] font-bold text-secondary'>Course not found</div>;  // Handle the case where the course doesn't exist
  }

  return (
    <div className="max-w-7xl mx-auto p-8">
        <div className='flex flex-col justify-between lg:flex-row gap-16 lg:items-center'>

        <div className='flex flex-col gap-6 lg:w-2/4'>
        <img src={course.imageUrl} alt={course.title} className='w-full h-full aspect-square object-cover rounded-xl'/>
        </div>

        <div className='flex flex-col gap-4 lg:w-2/4'>
                <div>
                    <span className=' text-secondary font-semibold'>{course.category}</span>
                    <h1 className='text-3xl font-bold'>{course.title}</h1>
                </div>

                <p className='text-gray-700'>
                Con un'ammortizzazione incredibile per sostenerti in tutti i tuoi chilometri, Invincible 3 offre un livello di comfort elevatissimo sotto il piede per aiutarti a dare il massimo oggi, domani e oltre. Questo modello incredibilmente elastico e sostenitivo, è pensato per dare il massimo lungo il tuo percorso preferito e fare ritorno a casa carico di energia, in attesa della prossima corsa.
                </p>

                <h6 className='text-2xl font-semibold'>$ {course.price}</h6>

                <div className='flex flex-row items-center gap-12'>
                    <div className='flex flex-row items-center'>
                        <span className='py-4 px-6 rounded-lg bg-slate-200 font-semibold'>Chapters : {course.chaptersLength}</span>
                    </div>
                    <button className='primary-btn bg-primary text-white font-semibold py-3 px-16 rounded-xl h-full'>Enroll Now</button>
                </div>
        </div>

        </div>










      
      
      
    </div>
  );
};

export default CourseDetails;
