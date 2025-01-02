import React from 'react'

function Qualities() {
const qualities = [
    {
      id: 1,
      image: "/community.jpg",
      title: "COMMUNITY DEVELOPMENT",
      description:"We are dedicated to empowering local communities through focused development initiatives. Your generous donations support ongoing projects that provide essential services like education, healthcare, and clean water to underserved areas. We work closely with local organizations, volunteers, and community leaders to ensure that our projects are impactful and cater to the specific needs of each community. From building schools to offering medical aid, every contribution helps create lasting positive change. Hear directly from the people whose lives have been transformed through these efforts and see how your support is making a tangible difference in real communities." },
    {
      id: 2,
      image: "/transparency.jpg",
      title: "TRANSPARENCY",
      description:"We believe that transparency is essential in building trust with our donors. That’s why we provide a clear breakdown of how every donation is used. Whether it’s funding for a community center or medical supplies, you can see exactly where your money goes. Our real-time fundraising tracker keeps you updated on the progress of ongoing campaigns, so you can watch as your support helps us reach critical goals. We also publish our annual reports and financial statements to offer full visibility into how funds are allocated. Our independent third-party auditors verify our financial practices to ensure ethical management of all donations. You can always count on us to be fully transparent with you." },
    {
      id: 3,
      image: "/impact.jpg",
      title: "IMPACT MEASURMENT",
      description:"The real power of donations lies in the measurable impact they create. Since our inception, we have funded over 50 community development projects, directly impacting thousands of lives. Through our donor dashboard, you can track the specific outcomes of your donation—whether it’s clean water for a village or educational resources for children. We provide regular updates with photos and videos, showcasing the ongoing progress of our projects. Additionally, our impact reports offer hard data on the long-term effects of our work, ensuring that every initiative leads to sustainable, positive change. With your support, we’re not just making a difference today—we’re shaping a brighter future for generations to come."   },
  ];


  return (
    <>
    <div className="qualities">
      <h2>OUR QUALITIES</h2>                                            
      <div className="container">
       {
         qualities.map(ele=>{
           return (
            <div className="card" key={ele.id}>
              <div className="img-wrapper">
              <img src={ele.image} alt={ele.title} />                                    
</div>   
                 <div className="content">
                    <p className='title'>{ele.title}</p> 
                    <p className='description'> {ele.description}</p>                             </div>                                                                  

            </div>                                      
           )                                       
         })                                         
       }                                           
      </div>
    </div>
    </>
  )
}

export default Qualities