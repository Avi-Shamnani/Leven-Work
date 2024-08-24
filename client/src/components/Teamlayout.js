import React from 'react'; 
import Gaurav from './Gaurav2.png'; 
import jobBappa from './jobBappa.png'; 
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './TeamLayout.css'
function Teamlayout() {
  const teamData = [
    {
      name : "Gaurav Dwivedi",
      image : Gaurav,
      role : "Ads Manager",
      specialization : `Highly creative and results-driven professional with expertise in Graphic Design, SEO, Google Ads, and Meta Ads. Proficient in crafting visually stunning designs and driving digital campaigns that deliver.`
    },
    {
      name : "Avi Shamnani",
      image : jobBappa,
      role : "CEO",
      specialization : "Lorem ipsum dolor sit, amet consectetur adipisicing elit.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et consectetur omnis laboriosam."
    },
    {
      name : "Vikram Khuswaha",
      image : "https://png.pngtree.com/png-vector/20240106/ourmid/pngtree-lord-bal-ganesh-beautiful-chaturdashi-baby-ganesha-look-happy-chaturthi-png-image_11419984.png",
      role : "Co- Founder",
      specialization : "Lorem ipsum dolor sit, amet consectetur adipisicing elit.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et consectetur omnis laboriosam."
    },
    {
      name : "Vishnu",
      image : "https://png.pngtree.com/png-vector/20240106/ourmid/pngtree-lord-bal-ganesh-beautiful-chaturdashi-baby-ganesha-look-happy-chaturthi-png-image_11419984.png",
      role : "Co- Founder",
      specialization : "Lorem ipsum dolor sit, amet consectetur adipisicing elit.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et consectetur omnis laboriosam."
    }
  ]

  const settings = {
    dots: true,
    infinite : true,
    speed : 500,
    slidesToShow : 3,
    slidesToScroll : 1,
    centerMode: true, // This makes the central card more prominent
    centerPadding: '0', // No extra padding around the central card
    focusOnSelect: true, // Clickable slide
    beforeChange: (current, next) => setActiveSlide(next), // Keep track of the current slide
  };

   // To track which slide is active
   const [activeSlide, setActiveSlide] = React.useState(0);

  return (
    <div className='mt-20 mb-20 ml-24 mr-16 bg-gray-800 rounded-3xl '>
      <Slider {...settings}>
    {teamData.map((member, index) => 
    <div 
    key={member.name} 
    className={`team-card border-2 border-primary mx-2 my-10 ${
      index === activeSlide ? 'scale-100' : 'scale-75'
    } transition-transform duration-300`}
  >
        <div className='image w-[380px] bg-gray-100 h-56 mt-3 ml-3.5 mb-0.5 rounded-xl'><img src={member.image} alt={member.name} className='rounded-full h-60 w-full'></img> 
        </div>
        <div className='description flex tracking-tighter flex-col mt-0 w-full p-4'>
            <div className='text-[#FFF455] font-bold text-xl'>{member.name}</div>
            <div className='text-[#4793AF] font-medium'>{member.role}</div>
            <div className='text-[#C0D6E8] font-normal flex tracking-tighter'>{member.specialization}</div>

        </div>
    </div>
    )}
    </Slider>
    </div>
  )
}

export default Teamlayout