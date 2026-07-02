import React from "react";
import "./MapSection.css";
import IndiaMap from "../../assets/GalleryPageImage94.svg?react";
import { useState } from "react";
import {useNavigate} from "react-router-dom";


export default function MapSection() {
  const [hoveredState,setHoveredState]=useState(null);
  const [mouse,setMouse]=useState({
x:0,
y:0
});
const navigate=useNavigate();
  return (
    <section className="map-section">

      <div className="map-left">

        <h2>
          AFLISH GROUP'S IMPACT
          <br />
          ACROSS INDIA
        </h2>

        <p>
          AFLISH Group is implementing integrated development programmes
          across multiple states in India to strengthen education,
          healthcare, livelihood, disaster resilience, women empowerment,
          humanitarian response, environmental sustainability, and community
          development.
        </p>
<p>Explore our state-wise programmes by clicking on the map's state</p>
        {/* <p>
          Our initiatives are designed to create sustainable impact by
          partnering with governments, institutions, industries, and local
          communities. Explore our state-wise interventions and discover how
          AFLISH Group is transforming lives through innovation, inclusion,
          and long-term development.
        </p> */}

      </div>

      <div className="map-right" onMouseMove={(e)=>{

setMouse({

x:e.clientX,

y:e.clientY

})

}}>

        {/* <img
          src="src/assets/GalleryPageImage94.svg"
          alt="India Map"
        /> */}
<IndiaMap className="india-map"/>
<div className="tooltip" style={{ top: mouse.y, left: mouse.x }}>

<h4>{hoveredState?.name}</h4>

<p>
Click to know about our programmes
</p>

</div>

<path

id="rajasthan"

onMouseEnter={()=>
setHoveredState({
name:"Rajasthan",
link:"/programs/rajasthan"
})
}
onClick={()=>navigate("/programs/rajasthan")}
onMouseLeave={()=>
setHoveredState(null)
}

onClick={()=>
navigate("/programs/rajasthan")
}

/>

      </div>

    </section>
  );
}