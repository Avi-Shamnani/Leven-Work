  import React from "react";

  function ExpertLayout() {
      const works = [
          {
            title: "Step 1: Strategy and Planning",
            image: "https://images.pexels.com/photos/3183165/pexels-photo-3183165.jpeg?auto=compress&cs=tinysrgb&w=600", // Placeholder for the image URL
            description: `
              ● In-depth client consultation to understand business goals and target audience.<br/>
              ● Market research and competitor analysis.<br/>
              ● Development of a comprehensive marketing strategy.
            `,
            linkTitle: "Check Strategy That Works For You",
          },
          {
            title: "Step 2: Creative Development",
            image: "https://images.pexels.com/photos/3758105/pexels-photo-3758105.jpeg?auto=compress&cs=tinysrgb&w=600", // Placeholder for the image URL
            description: `
              ● Brainstorming innovative ideas and concepts.<br/>
              ● Design and development of creative assets (visuals, copy, etc.).<br/>
              ● Building a strong brand identity.
            `,
            linkTitle: "Explore Creative Solutions",
          },
          {
            title: "Step 3: Campaign Execution",
            image: "https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=600", // Placeholder for the image URL
            description: `
              ● Implementation of marketing campaigns across various channels.<br/>
              ● Monitoring and analysis of campaign performance.<br/>
              ● Optimization for maximum impact.
            `,
            linkTitle: "Learn About Our Campaigns",
          },
          {
            title: "Step 4: Measurement and Optimization",
            image: "https://images.pexels.com/photos/3782226/pexels-photo-3782226.jpeg?auto=compress&cs=tinysrgb&w=600", // Placeholder for the image URL
            description: `
              ● Tracking key performance indicators (KPIs) and ROI.<br/>
              ● Regular reporting and analysis.<br/>
              ● Continuous optimization of campaigns.
            `,
            linkTitle: "Optimize Your Results",
          },
        ];
        
    return (
      <div className="flex flex-wrap justify-center bg-gray-500 p-20 rounded-xl space-x-24 space-y-16 mb-0">
        <div  className="block w-full justify-center text-6xl mb-8"><h1 className="justify-center w-full text-[#00FFFF] flex">How w  <strong className="font-semibold">e WORK</strong></h1></div>
      {works.map((work, index)=>(
      <div key={index} className="w-[500px] h-[800px] m-4 p-4 bg-[#000] rounded-2xl">
        <div className="w-[470px] h-[500px]"><img src = {work.image} alt={work.title} className="w-full rounded-xl h-full"></img></div>
        <div className="w-[470px] tracking-tighter">
          <h1 className="font-bold text-3xl mx-2 my-6">{work.title}</h1>
          <p className="text-xl mb-6" dangerouslySetInnerHTML={{ __html: work.description }}/>
          
          <a href="/contact" className="text-2xl mr-5 mt-5 text-blue-400 border-red-600 justify-end flex">{work.linkTitle}</a>
        </div>
      </div>
      ))}
      </div>
    );
  }

  export default ExpertLayout;
