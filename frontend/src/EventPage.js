import Event from "./Event/Event";
import Event2 from "./Event/Event2";
import Event3 from "./Event/Event3";
import Event4 from "./Event/Event4";
// import Events from "./Event/Events";
import React, { useState, useEffect } from "react";
import Loader from "./loader/loader";


function EventPage() {
   const [loading, setLoading] = useState(true);
    
  
      useEffect(() => {
          setTimeout(() => {
             
              setLoading(false);
          }, 1000); // Simulating data fetch delay
      }, []);
  return (
    <div>
      <div
        className="fixed inset-0 bg-no-repeat bg-cover bg-center z-[-1]"
        style={{ backgroundImage: "url('background.png')" }}
      ></div>
      {loading?
      <Loader />
      :
      <>
       <Event />
      <Event2 />
      <Event3 />
      <Event4 />
      </> 
    }
     
      {/* <Events /> */}
    </div>
  );
}

export default EventPage;
