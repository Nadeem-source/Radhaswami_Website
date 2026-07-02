import "./ImpactSection.css";

import {
FaGraduationCap,
FaHeartbeat,
FaBolt,
FaLeaf,
FaShieldAlt,
FaHandsHelping
} from "react-icons/fa";

export default function ImpactSection(){

return(

<section className="impactsection-section">

<div className="impactsection-left">

{/* <h2>Lives Impacted</h2> */}

{/* <h2>
4,29,753+
</h2>

<p>
Individuals empowered through AFLISH Group initiatives across
education, healthcare, disaster resilience, livelihood development,
humanitarian response and sustainable community programmes.
</p> */}

<img
src="/images/GalleryPageImage92.png"
alt=""
/>

</div>


<div className="impactsection-right">

<div className="impactsection-card protection"  style={{ "--icon-color": "#df7638" }}>

<FaShieldAlt className="impactsection-icon"/>

<h3>39,631</h3>

<p>
People protected through child protection and safeguarding programmes.
</p>

</div>


<div className="impactsection-card humanitarian">

<FaHandsHelping className="impactsection-icon" style={{ "--icon-color": "#b18dd3" }}/>

<h3>18,927</h3>

<p>
Families supported through humanitarian relief and emergency response.
</p>

</div>


<div className="impactsection-card livelihood">

<FaLeaf className="impactsection-icon" style={{ "--icon-color": "#57c78c" }}/>

<h3>1,63,073</h3>

<p>
People benefited through livelihood and sustainable development initiatives.
</p>

</div>


<div className="impactsection-card resilience">

<FaBolt className="impactsection-icon" style={{ "--icon-color": "#b44528" }}/>

<h3>1,16,276</h3>

<p>
Communities strengthened through disaster resilience programmes.
</p>

</div>


<div className="impactsection-card education">

<FaGraduationCap className="impactsection-icon" style={{ "--icon-color": "#12a9b8" }}/>

<h3>86,737</h3>

<p>
Children reached through education and digital learning programmes.
</p>

</div>


<div className="impactsection-card health">

<FaHeartbeat className="impactsection-icon" style={{ "--icon-color": "#6a51c4" }}/>

<h3>58,904</h3>

<p>
Individuals benefited through healthcare and nutrition initiatives.
</p>

</div>
<div className="impactsection-date">
    *April 2025 to March 2026
</div>

</div>

</section>

)

}