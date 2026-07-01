import "./FieldsOfWork.css";
import { Link } from "react-router-dom";
import {useState }  from "react";
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
color:"#12b6cf",
bg:"#EAFBFD",
image:"/images/GalleryPageImage84.png",
heading:"EDUCATION FOR EVERY CHILD, BUILDING A BRIGHTER TOMORROW!",
desc:"AFLISH Group believes that quality education is the strongest foundation for sustainable social transformation. Through inclusive learning programmes, digital education initiatives, skill development, scholarships, teacher capacity building, and community-based educational support, we ensure that every child, regardless of background, receives equal opportunities to learn, grow, and succeed.",
link:"/education"
},

{
title:"Health",
icon:<FaHeartbeat />,
color:"#f39ab5",
bg:"#FFF0F5",
image:"/images/GalleryPageImage85.png",
heading:"HEALTHCARE FOR EVERY COMMUNITY",
desc:"AFLISH Group works to improve community health through awareness, preventive care, nutrition programmes and accessible healthcare services.AFLISH Group also promotes preventive healthcare, mental well-being, maternal and child health, sanitation awareness, mobile health outreach, and community health capacity building to ensure healthier, safer, and more resilient communities for future generations.",
link:"/health-nutrition"
},

{
title:"Resilience",
icon:<FaBolt />,
color:"#f2b335",
bg:"#FFF8E5",
image:"/images/GalleryPageImage86.png",
heading:"BUILDING COMMUNITY RESILIENCE",
desc:"Strengthening disaster preparedness, climate adaptation and sustainable recovery for vulnerable communities while promoting community awareness, resilient infrastructure, early warning systems, and long-term climate-smart development for a safer and more sustainable future.Through capacity building, disaster risk reduction training, and collaborative partnerships with local institutions, AFLISH Group empowers communities to respond effectively to emergencies while strengthening resilience, protecting livelihoods.",
link:"/resilience"
},

{
title:"Livelihood",
icon:<FaLeaf />,
color:"#58c77f",
bg:"#EEFCEF",
image:"/images/GalleryPageImage87.png",
heading:"SUSTAINABLE LIVELIHOODS",
desc:"Creating employment opportunities, entrepreneurship support and skill development programmes while empowering youth, women, and marginalized communities with industry-relevant skills, financial literacy, business mentorship, and sustainable livelihood opportunities for long-term economic self-reliance.By fostering innovation, digital inclusion, vocational excellence, and market-linked opportunities, AFLISH Group helps individuals transform their skills into sustainable careers, strengthen local economies.",
link:"/livelihood"
},

{
title:"Protection",
icon:<FaShieldAlt />,
color:"#d97a33",
bg:"#FFF4EA",
image:"/images/GalleryPageImage88.png",
heading:"PROTECTING CHILDREN & WOMEN",
desc:"Ensuring safety, dignity, and equal opportunities through child protection, women empowerment, gender equality, legal awareness, psychosocial support, and community-led safeguarding initiatives that foster inclusive, secure, and resilient societies.Through awareness campaigns, capacity building, survivor-centered support, and strong community partnerships, AFLISH Group strengthens protective environments where every child, woman, and vulnerable individual can live with dignity, confidence, and equal access to opportunities.",
link:"/protection"
},

{
title:"Humanitarian",
icon:<FaHandsHelping />,
color:"#a681d8",
bg:"#F5EEFD",
image:"/images/GalleryPageImage89.png",
heading:"HUMANITARIAN RESPONSE",
desc:"Rapid emergency response, relief distribution and rehabilitation during disasters and crises, ensuring timely humanitarian assistance, community recovery, and long-term resilience for affected families and vulnerable populations.By coordinating with government agencies, humanitarian partners, volunteers, and local communities, AFLISH Group delivers life-saving support, accelerates recovery efforts, and strengthens disaster resilience to help communities rebuild safer and stronger.",
link:"/humanitarian"
}
];
export default function FieldsOfWork(){
const [activeIndex, setActiveIndex] = useState(0);

const activeField = fields[activeIndex];
return(
<>
<section className="fields-section">

<h2>
OUR FIELDS OF WORK
</h2>

<div className="fields-grid">

{

fields.map((item,index)=>(

<div
className={`field-card ${activeIndex===index ? "active-field" : ""}`}
key={index}
onClick={()=>setActiveIndex(index)}
style={
activeIndex===index
?{"--triangle-color":item.bg}
:{}
}
>
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

<section className="fields-highlight">
<div
className="home-education-highlight"
style={{
background:activeField.bg
}}
>
    <div className="education-left">

        <img
src={activeField.image}
alt={activeField.title}
/>

    </div>

    <div className="education-right">

       <h2
style={{color:activeField.color}}
>
{activeField.heading}
</h2>
<p>
{activeField.desc}
</p>
        {/* <p>
            AFLISH Group believes that quality education is the strongest
            foundation for sustainable social transformation. Through inclusive
            learning programmes, digital education initiatives, skill
            development, scholarships, teacher capacity building, and
            community-based educational support, we ensure that every child,
            regardless of background, receives equal opportunities to learn,
            grow, and succeed.
        </p> */}

        {/* <p>
            Our education initiatives focus on empowering children, youth,
            girls, and underserved communities by creating safe learning
            environments, promoting innovation, improving literacy, and
            strengthening future-ready skills that enable lifelong success.
        </p> */}

        <Link
to={activeField.link}
className="education-btn"
style={{background:activeField.color}}
>
Know More
</Link>

    </div>

</div>
</section>
</>
)

}