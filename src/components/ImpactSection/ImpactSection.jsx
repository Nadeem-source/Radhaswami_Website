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

<section className="impact-section">

<div className="impact-left">

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


<div className="impact-right">

<div className="impact-card protection">

<FaShieldAlt className="impact-icon"/>

<h3>39,631</h3>

<p>
People protected through child protection and safeguarding programmes.
</p>

</div>


<div className="impact-card humanitarian">

<FaHandsHelping className="impact-icon"/>

<h3>18,927</h3>

<p>
Families supported through humanitarian relief and emergency response.
</p>

</div>


<div className="impact-card livelihood">

<FaLeaf className="impact-icon"/>

<h3>1,63,073</h3>

<p>
People benefited through livelihood and sustainable development initiatives.
</p>

</div>


<div className="impact-card resilience">

<FaBolt className="impact-icon"/>

<h3>1,16,276</h3>

<p>
Communities strengthened through disaster resilience programmes.
</p>

</div>


<div className="impact-card education">

<FaGraduationCap className="impact-icon"/>

<h3>86,737</h3>

<p>
Children reached through education and digital learning programmes.
</p>

</div>


<div className="impact-card health">

<FaHeartbeat className="impact-icon"/>

<h3>58,904</h3>

<p>
Individuals benefited through healthcare and nutrition initiatives.
</p>

</div>

</div>

</section>

)

}