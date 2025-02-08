import React from 'react'
import NavbarBanner from './components/defaultbanner'
import Hero from './components/hero'
import NumberCounter from './components/numbers'
import WhyChooseUs from './components/whyus'
import Banner from './components/banner'
import Img1 from "./assets/banner1.png"
import Img2 from "./assets/banner2.png"
import SubjectCard from './components/subjects'
import Testimonial from './components/testemonials'



const BannerData = {
  image: Img1,
  tag: "Designed Around Your Schedule",
  title: "Expert Online Tutors, Tailored to Your Availability",
  subtitle:
    "Our intuitive scheduling system lets you choose sessions at your convenience. Stay organized, track your classes, and ensure you never miss a lesson. Experience seamless online scheduling with unmatched flexibility.",
  link: "/courses",
};

const BannerData2 = {
  image: Img2,
  tag: "Schedule Flexibility at Its Best",
  title: "Top-Notch Tutors Ready to Assist You Anytime",
  subtitle:
    "With our user-friendly scheduling tool, select tutoring times that work best for you. Stay on top of your tutoring and class schedules effortlessly, with easy access to your sessions whenever needed.",
  link: "/courses",
};



const App = () => {
  return (
    <main className="overflow-x-hidden">

     
      <NavbarBanner />
      <Hero />
      <NumberCounter />
      <WhyChooseUs />
      <Banner {...BannerData} />
      <Banner {...BannerData2} reverse={true} />
      <SubjectCard />
      <Testimonial />
     
      
    </main>
  )
}

export default App



