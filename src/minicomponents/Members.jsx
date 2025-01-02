import React from "react";

function Members() {
  const members = [
    {
      id: 1,
      image: "/m1.jpg",
      title: "Alana",
    },
    {
      id: 2,
      image: "/m2.jpg",
      title: "Kiran",
    },
    {
      id: 3,
      image: "/m3.jpg",
      title: "Rober",
    },
    {
      id: 4,
      image: "/m4.jpg",
      title: "siri",
    },
    {
      id: 5,
      image: "/m5.jpg",
      title: "rehyan",
    },
    {
      id: 6,
      image: "/m6.jpg",
      title: "Taruk",
    },
    {
      id: 7,
      image: "/m7.jpg",
      title: "Jhosh survy",
    },
  ];

  return <>

  <section className="members">
     <div className="container">
 <div className="heading_section">
    <h2 className="heading">MEMBERS</h2>   
    <p>At Donation Crypto Gateway, we are driven by a shared mission: to make the world a better place through the power of cryptocurrency. Our dedicated team works tirelessly to ensure your donations have a meaningful impact. Meet the people behind the platform:</p>                                           
 </div>
 <div className="members_container">
    {
      members.map(ele => (
        <div className="card" key ={ele.id}> 
        <img src= {ele.image} alt={ele.title}></img>
        <h3>{ele.title}</h3>
        </div>                                          
      ))                                            
    }                                              
 </div>
</div>                                             
  </section>
  </>
  ;
}

export default Members;
