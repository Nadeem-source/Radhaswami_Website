import { useState } from "react";
import "./AboutPreview.css";

export default function AboutPreview() {

  const [expanded, setExpanded] = useState(false);

  return (
    <section className="about-preview">

      <div className="about-preview-container">

        <h2>
          AFLISH GROUP — BUILDING A BETTER TOMORROW
        </h2>

        <p>
          AFLISH Group is committed to empowering communities through
          education, healthcare, humanitarian assistance, child protection,
          women empowerment, economic well-being, environmental sustainability,
          and resilient development. We work with governments, institutions,
          industry partners, and local communities to create long-term social
          impact across India.
        </p>

        <p>
          Our integrated development approach focuses on strengthening
          vulnerable communities through innovation, technology, skill
          development, disaster preparedness, and sustainable livelihood
          initiatives. Every programme is designed to create measurable impact
          while ensuring dignity, inclusion, and equal opportunities for all.
        </p>

        {expanded && (
          <>

            <p>
              AFLISH Group believes that meaningful change begins at the
              grassroots. Through partnerships with government agencies,
              educational institutions, healthcare professionals, corporate
              organizations, and civil society, we implement sustainable
              solutions that address real community challenges.
            </p>

            <p>
              From emergency humanitarian response and climate resilience to
              digital education, nutrition, child welfare, women's leadership,
              and community entrepreneurship, our initiatives are designed to
              create lasting transformation rather than short-term assistance.
            
              We continue expanding our reach by integrating innovation,
              technology, research, and community participation to build a more
              inclusive, resilient, and sustainable future for every citizen.
            </p>
            <p>At AFLISH Group, we believe sustainable development is achieved through collaboration, innovation, and community participation. By working closely with local authorities, educational institutions, healthcare providers, corporate partners, and dedicated volunteers, we create integrated solutions that address the root causes of social challenges while promoting inclusive growth and long-term community resilience.</p>

<p>Our commitment extends beyond immediate assistance. We continuously invest in capacity building, digital innovation, environmental conservation, skill enhancement, and leadership development to empower individuals and families with the knowledge, confidence, and resources needed to become self-reliant. Through strategic planning and responsible implementation, we strive to build stronger communities capable of adapting to future challenges.</p>

<p>Driven by compassion, transparency, and excellence, AFLISH Group remains dedicated to creating measurable and lasting social impact across diverse sectors. As we expand our initiatives nationwide, our vision is to build a future where every child, every family, and every community has equal access to opportunities, essential services, and the support required to lead a safe, healthy, and dignified life.</p>

          </>
        )}

        <button
          className="about-preview-btn"
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? "Read Less..." : "Read More..."}
        </button>

      </div>

    </section>
  );
}