import "./FieldsOfWork.css";
import { Link } from "react-router-dom";
import {
 FaGraduationCap,
 FaHeartbeat,
 FaBolt,
 FaLeaf,
 FaShieldAlt,
 FaHandsHelping
} from "react-icons/fa";
const fields = [

{
title:"Education",
icon:<FaGraduationCap />,
color:"#12b6cf"
},

{
title:"Health",
icon:<FaHeartbeat />,
color:"#f39ab5"
},

{
title:"Resilience",
icon:<FaBolt />,
color:"#f2b335"
},

{
title:"Livelihood",
icon:<FaLeaf />,
color:"#58c77f"
},

{
title:"Protection",
icon:<FaShieldAlt />,
color:"#d97a33"
},

{
title:"Humanitarian",
icon:<FaHandsHelping />,
color:"#a681d8"
}

];
export default function FieldsOfWork(){

return(
<>
<section className="fields-section">

<h2>
OUR FIELDS OF WORK
</h2>

<div className="fields-grid">

{

fields.map((item,index)=>(

<div className="field-card" key={index}>

<div
className="field-icon"
style={{color:item.color}}
>

{item.icon}

</div>

<h4
style={{color:item.color}}
>

{item.title}

</h4>

</div>

))

}

</div>

</section>


<section className="home-education-highlight">

    <div className="education-left">

        <img
            src="/images/GalleryPageImage84.png"
            alt="AFLISH Education"
        />

    </div>

    <div className="education-right">

        <h2>
            EDUCATION FOR EVERY CHILD,
            <br />
            BUILDING A BRIGHTER TOMORROW!
        </h2>

        <p>
            AFLISH Group believes that quality education is the strongest
            foundation for sustainable social transformation. Through inclusive
            learning programmes, digital education initiatives, skill
            development, scholarships, teacher capacity building, and
            community-based educational support, we ensure that every child,
            regardless of background, receives equal opportunities to learn,
            grow, and succeed.
        </p>

        <p>
            Our education initiatives focus on empowering children, youth,
            girls, and underserved communities by creating safe learning
            environments, promoting innovation, improving literacy, and
            strengthening future-ready skills that enable lifelong success.
        </p>

        <Link to="/education" className="education-btn">
            Know More
        </Link>

    </div>

</section>
</>
)

}