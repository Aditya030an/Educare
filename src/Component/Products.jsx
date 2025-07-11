


// import React from "react";
// import {
//   FaChartBar,
//   FaClipboardList,
//   FaCheckSquare,
//   FaBrain,
//   FaSun,
// } from "react-icons/fa";
// import { MdInsertChart } from "react-icons/md";
// import { HiOutlineDocumentReport } from "react-icons/hi";
// import bgShape from "./photos/bg55.png";
// export default function FeaturedProducts() {
//   return (
//     <section className="relative py-16 px-4 md:px-20 font-sans overflow-hidden">
   
//       <div
//   className="absolute top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat z-[-1]"
//   style={{ backgroundImage: `url(${bgShape})` }}
// />
//       {/* Content Wrapper */}
//       <div className="relative z-10">
//         {/* Section Heading */}
//         <div className="text-center mb-14">
//           <p className="uppercase text-blue-400 text-xs tracking-widest mb-2">
//             Products
//           </p>
//           <h2 className="text-3xl md:text-5xl font-semibold">
//             Our <span className="text-blue-600">Featured</span> Products
//           </h2>
//           <p className="text-gray-500 mt-4 max-w-xl mx-auto text-sm md:text-base">
//             Connect, expose and visualize over 150 SaaS tools without
//             engineering method
//           </p>

//           {/* Toggle Buttons */}
//           <div className="mt-6 flex justify-center gap-4">
//             <button className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm shadow-md hover:bg-blue-700">
//               For Business
//             </button>
//             <button className="border border-blue-600 text-blue-600 px-4 py-2 rounded-full text-sm hover:bg-blue-50">
//               For School
//             </button>
//           </div>
//         </div>

//         {/* Feature Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-center text-gray-700">
//           <FeatureCard
//             icon={
//               <FaChartBar className="text-3xl text-blue-500 mx-auto mb-4" />
//             }
//             title="Rich Analytics"
//           />
//           <FeatureCard
//             icon={
//               <HiOutlineDocumentReport className="text-3xl text-blue-500 mx-auto mb-4" />
//             }
//             title="Report"
//           />
//           <FeatureCard
//             icon={
//               <MdInsertChart className="text-3xl text-blue-500 mx-auto mb-4" />
//             }
//             title="Exams"
//           />
//           <FeatureCard
//             icon={
//               <FaCheckSquare className="text-3xl text-blue-500 mx-auto mb-4" />
//             }
//             title="E Classroom"
//           />
//           <FeatureCard
//             icon={
//               <FaBrain className="text-3xl text-blue-500 mx-auto mb-4" />
//             }
//             title="Activities"
//           />
//           <FeatureCard
//             icon={
//               <FaSun className="text-3xl text-blue-500 mx-auto mb-4" />
//             }
//             title="Effective"
//           />
//         </div>

//         {/* Stats Box */}
//         <div className="mt-20 bg-gradient-to-r from-blue-500 to-blue-400 text-white rounded-2xl shadow-xl p-8 md:p-12 flex flex-col md:flex-row justify-around items-center text-center gap-6">
//           <div>
//             <h3 className="text-3xl md:text-4xl font-bold">110+</h3>
//             <p className="text-sm mt-1">
//               Automation Templates For Creating Your Campaigns Quickly
//             </p>
//           </div>
//           <div>
//             <h3 className="text-3xl md:text-4xl font-bold">4M</h3>
//             <p className="text-sm mt-1">
//               Automation Templates For Creating Your Campaigns Quickly
//             </p>
//           </div>
//           <div>
//             <h3 className="text-3xl md:text-4xl font-bold">99.99%</h3>
//             <p className="text-sm mt-1">
//               Automation Templates For Creating Your Campaigns Quickly
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// const FeatureCard = ({ icon, title }) => (
//   <div className="p-4">
//     {icon}
//     <h4 className="text-lg font-semibold mb-2">{title}</h4>
//     <p className="text-sm text-gray-500">
//       Easy data management with a dedicated admin panel and a developer
//       platform to extend what Polio CRM can do.
//     </p>
//   </div>
// );


// import React, { useEffect, useRef } from "react";
// import {
//   FaChartBar,
//   FaCheckSquare,
//   FaBrain,
//   FaSun,
// } from "react-icons/fa";
// import { MdInsertChart } from "react-icons/md";
// import { HiOutlineDocumentReport } from "react-icons/hi";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";

// import bgShape from "./photos/bg55.png";

// gsap.registerPlugin(ScrollTrigger, MorphSVGPlugin);

// export default function FeaturedProducts() {
//   const sectionRef = useRef();
//   const cardsRef = useRef([]);
//   const statsRef = useRef();

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       // Heading scroll animation
//       gsap.from(".heading", {
//         y: 50,
//         opacity: 0,
//         duration: 1,
//         ease: "power3.out",
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: "top 80%",
//         },
//       });

//       // Magnetic buttons
//       const magneticBtns = document.querySelectorAll(".magnetic-wrapper");
//       magneticBtns.forEach((wrapper) => {
//         const btn = wrapper.querySelector(".magnetic");
//         wrapper.addEventListener("mousemove", (e) => {
//           const { left, top, width, height } = wrapper.getBoundingClientRect();
//           const x = e.clientX - left - width / 2;
//           const y = e.clientY - top - height / 2;
//           gsap.to(btn, {
//             x: x * 0.3,
//             y: y * 0.3,
//             duration: 0.4,
//             ease: "power3.out",
//           });
//         });
//         wrapper.addEventListener("mouseleave", () => {
//           gsap.to(btn, { x: 0, y: 0, duration: 0.4 });
//         });
//       });

//       // Feature card animation
//       gsap.from(cardsRef.current, {
//         y: 100,
//         opacity: 0,
//         duration: 1,
//         stagger: 0.2,
//         ease: "power3.out",
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: "top 60%",
//         },
//       });

//       // Stats box
//       gsap.from(statsRef.current, {
//         y: 100,
//         opacity: 0,
//         duration: 1,
//         ease: "power3.out",
//         scrollTrigger: {
//           trigger: statsRef.current,
//           start: "top 85%",
//         },
//       });

//       // Morphing blob animation
//       gsap.to("#morph", {
//         duration: 8,
//         repeat: -1,
//         yoyo: true,
//         ease: "power1.inOut",
//         morphSVG:
//           "M458.5,340Q408,420,327,414Q246,408,181,382.5Q116,357,109.5,289.5Q103,222,155.5,174Q208,126,275.5,132Q343,138,395.5,184Q448,230,458.5,290Q469,350,458.5,340Z",
//       });
//     }, sectionRef);

//     return () => ctx.revert();
//   }, []);

//   const features = [
//     {
//       icon: <FaChartBar className="text-3xl text-blue-500 mx-auto mb-4" />,
//       title: "Rich Analytics",
//     },
//     {
//       icon: (
//         <HiOutlineDocumentReport className="text-3xl text-blue-500 mx-auto mb-4" />
//       ),
//       title: "Report",
//     },
//     {
//       icon: <MdInsertChart className="text-3xl text-blue-500 mx-auto mb-4" />,
//       title: "Exams",
//     },
//     {
//       icon: <FaCheckSquare className="text-3xl text-blue-500 mx-auto mb-4" />,
//       title: "E Classroom",
//     },
//     {
//       icon: <FaBrain className="text-3xl text-blue-500 mx-auto mb-4" />,
//       title: "Activities",
//     },
//     {
//       icon: <FaSun className="text-3xl text-blue-500 mx-auto mb-4" />,
//       title: "Effective",
//     },
//   ];

//   return (
//     <section
//       ref={sectionRef}
//       className="relative py-16 px-4 md:px-20 font-sans overflow-hidden"
//     >
//       {/* Morphing SVG blob */}
//       <div className="absolute top-[-100px] right-[-100px] z-0 opacity-30">
//         <svg width="400" height="400" viewBox="0 0 600 600" fill="none">
//           <path
//             id="morph"
//             d="M438.5,309.5Q434,379,366.5,397Q299,415,246,391Q193,367,138.5,328.5Q84,290,123.5,231.5Q163,173,228,144.5Q293,116,347.5,159Q402,202,438.5,255Q475,308,438.5,309.5Z"
//             fill="#3b82f6"
//           />
//         </svg>
//       </div>

//       {/* Background image */}
//       <div
//         className="absolute top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat z-[-1]"
//         style={{ backgroundImage: `url(${bgShape})` }}
//       />

//       <div className="relative z-10">
//         {/* Heading */}
//         <div className="text-center mb-14 heading">
//           <p className="uppercase text-blue-400 text-xs tracking-widest mb-2">
//             Products
//           </p>
//           <h2 className="text-3xl md:text-5xl font-semibold">
//             Our <span className="text-blue-600">Featured</span> Products
//           </h2>
//           <p className="text-gray-500 mt-4 max-w-xl mx-auto text-sm md:text-base">
//             Connect, expose and visualize over 150 SaaS tools without
//             engineering method
//           </p>

//           {/* Buttons with magnetic effect */}
//           <div className="mt-6 flex justify-center gap-4">
//             <div className="magnetic-wrapper">
//               <button className="magnetic bg-blue-600 text-white px-4 py-2 rounded-full text-sm shadow-md hover:bg-blue-700">
//                 For Business
//               </button>
//             </div>
//             <div className="magnetic-wrapper">
//               <button className="magnetic border border-blue-600 text-blue-600 px-4 py-2 rounded-full text-sm hover:bg-blue-50">
//                 For School
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Feature Cards */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-center text-gray-700">
//           {features.map((feature, i) => (
//             <FeatureCard
//               key={i}
//               ref={(el) => (cardsRef.current[i] = el)}
//               icon={feature.icon}
//               title={feature.title}
//             />
//           ))}
//         </div>

//         {/* Stats Box */}
//         <div
//           ref={statsRef}
//           className="mt-20 bg-gradient-to-r from-blue-500 to-blue-400 text-white rounded-2xl shadow-xl p-8 md:p-12 flex flex-col md:flex-row justify-around items-center text-center gap-6"
//         >
//           <Stat number="110+" />
//           <Stat number="4M" />
//           <Stat number="99.99%" />
//         </div>
//       </div>
//     </section>
//   );
// }

// const FeatureCard = React.forwardRef(({ icon, title }, ref) => {
//   const cardRef = useRef();

//   useEffect(() => {
//     const card = cardRef.current;

//     const handleMouseMove = (e) => {
//       const { left, top, width, height } = card.getBoundingClientRect();
//       const x = e.clientX - left;
//       const y = e.clientY - top;
//       const rotateX = -(y - height / 2) / 15;
//       const rotateY = (x - width / 2) / 15;

//       gsap.to(card, {
//         rotationX: rotateX,
//         rotationY: rotateY,
//         transformPerspective: 800,
//         transformOrigin: "center",
//         duration: 0.4,
//       });
//     };

//     const reset = () => {
//       gsap.to(card, {
//         rotationX: 0,
//         rotationY: 0,
//         duration: 0.4,
//       });
//     };

//     card.addEventListener("mousemove", handleMouseMove);
//     card.addEventListener("mouseleave", reset);
//     return () => {
//       card.removeEventListener("mousemove", handleMouseMove);
//       card.removeEventListener("mouseleave", reset);
//     };
//   }, []);

//   return (
//     <div
//       ref={(el) => {
//         cardRef.current = el;
//         if (ref) ref.current = el;
//       }}
//       className="p-4 bg-white rounded-xl shadow-lg transition-all hover:shadow-2xl"
//     >
//       {icon}
//       <h4 className="text-lg font-semibold mb-2">{title}</h4>
//       <p className="text-sm text-gray-500">
//         Easy data management with a dedicated admin panel and a developer
//         platform to extend what Polio CRM can do.
//       </p>
//     </div>
//   );
// });

// const Stat = ({ number }) => (
//   <div>
//     <h3 className="text-3xl md:text-4xl font-bold">{number}</h3>
//     <p className="text-sm mt-1">
//       Automation Templates For Creating Your Campaigns Quickly
//     </p>
//   </div>
// );


// FeaturedProducts.jsx
import React, { useEffect, useRef } from "react";
import {
  FaChartBar,
  FaClipboardList,
  FaCheckSquare,
  FaBrain,
  FaSun,
} from "react-icons/fa";
import { MdInsertChart } from "react-icons/md";
import { HiOutlineDocumentReport } from "react-icons/hi";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";
import bgShape from "./photos/bg55.png";

gsap.registerPlugin(ScrollTrigger, MorphSVGPlugin);

export default function FeaturedProducts() {
  const sectionRef = useRef();
  const cardsRef = useRef([]);
  const statsRef = useRef();

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading animation
      gsap.from(".heading", {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      // Button animation
      gsap.from(".toggle-btn", {
        scale: 0.8,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      // Feature Cards Stagger
      gsap.from(cardsRef.current, {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 60%",
        },
      });

      // Stats Box
      gsap.from(statsRef.current, {
        y: 100,
        opacity: 0,
        scale:0.5,
        // duration: 3000,
        // delay: 10,

        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: statsRef.current,
          start: "top -20%",
          scrub: 2 ,
          markers:true
        },
      });

      // Magnetic Buttons
      const magneticBtns = document.querySelectorAll(".magnetic-wrapper");
      magneticBtns.forEach((wrapper) => {
        const btn = wrapper.querySelector(".magnetic");
        wrapper.addEventListener("mousemove", (e) => {
          const { left, top, width, height } = wrapper.getBoundingClientRect();
          const x = e.clientX - left - width / 2;
          const y = e.clientY - top - height / 2;
          gsap.to(btn, {
            x: x * 0.3,
            y: y * 0.3,
            duration: 0.4,
            ease: "power3.out",
          });
        });
        wrapper.addEventListener("mouseleave", () => {
          gsap.to(btn, { x: 0, y: 0, duration: 0.4, ease: "power3.out" });
        });
      });

      // Blob Morph
      gsap.to("#morph", {
        duration: 8,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        morphSVG:
          "M458.5,340Q408,420,327,414Q246,408,181,382.5Q116,357,109.5,289.5Q103,222,155.5,174Q208,126,275.5,132Q343,138,395.5,184Q448,230,458.5,290Q469,350,458.5,340Z",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-[100vw] py-16 px-4 h-full md:px-20 font-sans overflow-hidden"
    >
      {/* Morphing Blob */}
      <div className="absolute top-[-100px] right-[-100px] z-0 opacity-30">
        <svg width="400" height="400" viewBox="0 0 600 600" fill="none">
          <path
            id="morph"
            d="M438.5,309.5Q434,379,366.5,397Q299,415,246,391Q193,367,138.5,328.5Q84,290,123.5,231.5Q163,173,228,144.5Q293,116,347.5,159Q402,202,438.5,255Q475,308,438.5,309.5Z"
            fill="#3b82f6"
          />
        </svg>
      </div>

      {/* Background */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat z-[-1]"
        style={{ backgroundImage: `url(${bgShape})` }}
      />

      {/* Content Wrapper */}
      <div className="relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-14 heading">
          <p className="uppercase text-blue-400 text-xs tracking-widest mb-2">
            Products
          </p>
          <h2 className="text-3xl md:text-5xl font-semibold">
            Our <span className="text-blue-600">Featured</span> Products
          </h2>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto text-sm md:text-base">
            Connect, expose and visualize over 150 SaaS tools without
            engineering method
          </p>

          {/* Toggle Buttons */}
          <div className="mt-6 flex justify-center gap-4">
            <div className="magnetic-wrapper">
              <button className="toggle-btn magnetic bg-blue-600 text-white px-4 py-2 rounded-full text-sm shadow-md hover:bg-blue-700">
                For Business
              </button>
            </div>
            <div className="magnetic-wrapper">
              <button className="toggle-btn magnetic border border-blue-600 text-blue-600 px-4 py-2 rounded-full text-sm hover:bg-blue-50">
                For School
              </button>
            </div>
          </div>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-center text-gray-700">
          {features.map((feature, i) => (
            <FeatureCard
              key={i}
              ref={(el) => (cardsRef.current[i] = el)}
              icon={feature.icon}
              title={feature.title}
            />
          ))}
        </div>

        {/* Stats Box */}
        <div
          ref={statsRef}
          className="mt-20 bg-gradient-to-r from-blue-500 to-blue-400 text-white rounded-2xl shadow-xl p-8 md:p-12 flex flex-col md:flex-row justify-around items-center text-center gap-6"
        >
          <StatBlock number="110+" />
          <StatBlock number="4M" />
          <StatBlock number="99.99%" />
        </div>
      </div>
    </section>
  );
}

const features = [
  {
    icon: <FaChartBar className="text-3xl text-blue-500 mx-auto mb-4" />,
    title: "Rich Analytics",
  },
  {
    icon: <HiOutlineDocumentReport className="text-3xl text-blue-500 mx-auto mb-4" />,
    title: "Report",
  },
  {
    icon: <MdInsertChart className="text-3xl text-blue-500 mx-auto mb-4" />,
    title: "Exams",
  },
  {
    icon: <FaCheckSquare className="text-3xl text-blue-500 mx-auto mb-4" />,
    title: "E Classroom",
  },
  {
    icon: <FaBrain className="text-3xl text-blue-500 mx-auto mb-4" />,
    title: "Activities",
  },
  {
    icon: <FaSun className="text-3xl text-blue-500 mx-auto mb-4" />,
    title: "Effective",
  },
];

const FeatureCard = React.forwardRef(({ icon, title }, ref) => {
  const cardRef = useRef();

  useEffect(() => {
    const card = cardRef.current;
    const handleMouseMove = (e) => {
      const { left, top, width, height } = card.getBoundingClientRect();
      const x = e.clientX - left;
      const y = e.clientY - top;
      const rotateX = -(y - height / 2) / 15;
      const rotateY = (x - width / 2) / 15;

      gsap.to(card, {
        rotationX: rotateX,
        rotationY: rotateY,
        transformPerspective: 800,
        transformOrigin: "center",
        duration: 0.4,
      });
    };

    const reset = () => {
      gsap.to(card, {
        rotationX: 0,
        rotationY: 0,
        duration: 0.4,
      });
    };

    card.addEventListener("mousemove", handleMouseMove);
    card.addEventListener("mouseleave", reset);

    return () => {
      card.removeEventListener("mousemove", handleMouseMove);
      card.removeEventListener("mouseleave", reset);
    };
  }, []);

  return (
    <div
      ref={(el) => {
        cardRef.current = el;
        if (ref) ref.current = el;
      }}
      className="p-4 bg-white rounded-xl shadow-lg transition-all hover:shadow-2xl"
    >
      {icon}
      <h4 className="text-lg font-semibold mb-2">{title}</h4>
      <p className="text-sm text-gray-500">
        Easy data management with a dedicated admin panel and a developer
        platform to extend what Polio CRM can do.
      </p>
    </div>
  );
});

const StatBlock = ({ number }) => (
  <div>
    <h3 className="text-3xl md:text-4xl font-bold">{number}</h3>
    <p className="text-sm mt-1">
      Automation Templates For Creating Your Campaigns Quickly
    </p>
  </div>
);
