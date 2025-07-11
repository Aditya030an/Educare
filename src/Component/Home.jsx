
// import React, { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { motion } from "framer-motion";
// import bgShape from "./photos/bg55.png";
// import dashboardImg from "./photos/banner.svg";
// import Products from "./Products";
// import About from "./About";
// import { FaPaperPlane, FaEye } from "react-icons/fa";
// import Testimonial from "./Testimonial";
// // import Clients from "./Clients";
// import Hero from "./Herosection";
// import Footer from "./Footer";
// import Boost from "./Boost";
// gsap.registerPlugin(ScrollTrigger);

// export default function OverlapPages() {
//   const containerRef = useRef();

//   useEffect(() => {
//     const sections = gsap.utils.toArray(".overlap-section", containerRef.current);

//     sections.forEach((section) => {
//       ScrollTrigger.create({
//         trigger: section,
//         start: "top top",
//         pin: true,
//         pinSpacing: false,
//         scrub: true,
//       });
//     });

//     return () => ScrollTrigger.getAll().forEach((st) => st.kill());
//   }, []);

//   return (
//     <div ref={containerRef} className="overflow-hidden">
//       {/* SECTION 1 */}
//       <div className="overlap-section relative w-full h-screen bg-gray-50">
//         <Hero />
//       </div>

//       {/* SECTION 2 */}
//       <div className="overlap-section relative w-full h-screen bg-gray-50">
//         <Products />
//       </div>

//       {/* SECTION 3 */}
//       <div className="relative w-full min-h-screen bg-white overflow-hidden font-sans">
//       {/* Abstract Floating Blobs */}
//       <div className="absolute w-[45rem] h-[45rem] bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 top-[-12rem] left-[-18rem] animate-pulse z-0" />
//       <div className="absolute w-[35rem] h-[35rem] bg-purple-200 rounded-full mix-blend-multiply filter blur-2xl opacity-30 bottom-[-12rem] right-[-12rem] animate-pulse z-0" />
//       <div className="absolute w-[30rem] h-[30rem] bg-pink-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 top-[40%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 z-0" />

//       {/* Main Section */}
//       <section className="relative z-10 py-28 px-6 md:px-24 text-center">
//         <motion.div
//           initial={{ opacity: 0, y: 60 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="mb-14"
//         >
//           <span className="inline-block text-xs uppercase tracking-wider text-blue-600 bg-blue-100 px-4 py-1 rounded-full font-semibold shadow-md">
//             About Us
//           </span>
//           <h2 className="text-4xl md:text-6xl font-extrabold mt-5 leading-tight text-gray-900 tracking-tight">
//             Unleash The <span className="text-blue-500">Power</span> Of Data With{" "}
//             <span className="bg-gradient-to-r from-pink-500 via-blue-500 to-purple-500 text-transparent bg-clip-text">
//               Educare
//             </span>
//           </h2>
//           <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-base md:text-lg">
//             Discover how Educare is revolutionizing education management through advanced analytics,
//             AI-driven decision making, and seamless data orchestration.
//           </p>
//         </motion.div>

//         {/* Mission & Vision Cards */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
//           {[
//             {
//               icon: <FaPaperPlane className="text-yellow-600" />,
//               title: "Mission",
//               badgeColor: "bg-yellow-100 text-yellow-700",
//               heading: "Envisioning a Future Where Data Drives Success",
//             },
//             {
//               icon: <FaEye className="text-purple-600" />,
//               title: "Vision",
//               badgeColor: "bg-purple-100 text-purple-700",
//               heading: "Creating Global Impact with Smart Education Systems",
//             },
//           ].map((item, i) => (
//             <motion.div
//               key={i}
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.9, delay: i * 0.3 }}
//               viewport={{ once: true }}
//               className="relative group bg-gradient-to-br from-white/60 via-white/30 to-white/10 backdrop-blur-lg rounded-3xl p-[2px] hover:shadow-2xl hover:scale-[1.02] transition-all duration-700"
//             >
//               <div className="bg-white bg-opacity-80 rounded-3xl p-6 md:p-8 transition-all duration-700 shadow-inner group-hover:shadow-xl">
//                 <div
//                   className={`inline-flex items-center gap-2 px-4 py-1 mb-5 text-sm font-semibold rounded-full shadow-sm ${item.badgeColor}`}
//                 >
//                   {item.icon}
//                   {item.title}
//                 </div>
//                 <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
//                   {item.heading}
//                 </h3>
//                 <p className="text-gray-500 text-sm md:text-base leading-relaxed">
//                   We aim to empower institutions with the tools to turn data into actionable insight—
//                   leading to smarter education experiences globally.
//                 </p>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </section>
//     </div>

//       {/* SECTION 4 */}
//       <div className="overlap-section relative w-full h-screen bg-white">
//         <About />
//       </div>
//         {/* SECTION 5 */}
//         <div className="overlap-section relative w-full h-screen bg-white">
//         <Testimonial />
//       </div>
//        {/* SECTION 6 */}
//        <div className="overlap-section relative w-full h-screen bg-white">
//         <Boost />
//       </div>
//          {/* SECTION 7*/}
//          <div className="overlap-section relative w-full h-screen bg-white">
//         <Footer />
//       </div>

//     </div>
//   );
// }





import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import bgShape from "./photos/bg55.png";
import dashboardImg from "./photos/banner.svg";
import Products from "./Products";
import About from "./About";
import { FaPaperPlane, FaEye } from "react-icons/fa";
import Testimonial from "./Testimonial";
// import Clients from "./Clients";
import Hero from "./Herosection";
import Footer from "./Footer";
import Boost from "./Boost";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger);

export default function OverlapPages() {
  const containerRef = useRef();

  useEffect(() => {
    const sections = gsap.utils.toArray(".overlap-section", containerRef.current);

    sections.forEach((section) => {
      ScrollTrigger.create({
        trigger: section,
        start: "top top",
        pin: true,
        pinSpacing: false,
        scrub: true,
      });
    });

    return () => ScrollTrigger.getAll().forEach((st) => st.kill());
  }, []);

  useGSAP(()=>{
    gsap.to('.slide',{
      x:"-100vw",
      scrollTrigger: {
        trigger : ".slider",
        pin : true,
        scrub : 1,
      }
    })
  },[])
  return (
    <div ref={containerRef} className="overflow-hidden">
      {/* SECTION 1 */}
<div className="slider flex   ">

        <div className="slide relative w-full h-screen bg-gray-50">
        <Hero />
      </div>
       <div className="slide relative w-full bg-gray-50">
        <Products />
      </div>
</div>

      {/* SECTION 2 */}
     

      {/* SECTION 3 */}
      <div className="relative w-full min-h-screen bg-white overflow-hidden font-sans">
      {/* Abstract Floating Blobs */}
      <div className="absolute w-[45rem] h-[45rem] bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 top-[-12rem] left-[-18rem] animate-pulse z-0" />
      <div className="absolute w-[35rem] h-[35rem] bg-purple-200 rounded-full mix-blend-multiply filter blur-2xl opacity-30 bottom-[-12rem] right-[-12rem] animate-pulse z-0" />
      <div className="absolute w-[30rem] h-[30rem] bg-pink-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 top-[40%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 z-0" />

      {/* Main Section */}
      <section className="relative z-10 py-28 px-6 md:px-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <span className="inline-block text-xs uppercase tracking-wider text-blue-600 bg-blue-100 px-4 py-1 rounded-full font-semibold shadow-md">
            About Us
          </span>
          <h2 className="text-4xl md:text-6xl font-extrabold mt-5 leading-tight text-gray-900 tracking-tight">
            Unleash The <span className="text-blue-500">Power</span> Of Data With{" "}
            <span className="bg-gradient-to-r from-pink-500 via-blue-500 to-purple-500 text-transparent bg-clip-text">
              Educare
            </span>
          </h2>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-base md:text-lg">
            Discover how Educare is revolutionizing education management through advanced analytics,
            AI-driven decision making, and seamless data orchestration.
          </p>
        </motion.div>

        {/* Mission & Vision Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {[
            {
              icon: <FaPaperPlane className="text-yellow-600" />,
              title: "Mission",
              badgeColor: "bg-yellow-100 text-yellow-700",
              heading: "Envisioning a Future Where Data Drives Success",
            },
            {
              icon: <FaEye className="text-purple-600" />,
              title: "Vision",
              badgeColor: "bg-purple-100 text-purple-700",
              heading: "Creating Global Impact with Smart Education Systems",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: i * 0.3 }}
              viewport={{ once: true }}
              className="relative group bg-gradient-to-br from-white/60 via-white/30 to-white/10 backdrop-blur-lg rounded-3xl p-[2px] hover:shadow-2xl hover:scale-[1.02] transition-all duration-700"
            >
              <div className="bg-white bg-opacity-80 rounded-3xl p-6 md:p-8 transition-all duration-700 shadow-inner group-hover:shadow-xl">
                <div
                  className={`inline-flex items-center gap-2 px-4 py-1 mb-5 text-sm font-semibold rounded-full shadow-sm ${item.badgeColor}`}
                >
                  {item.icon}
                  {item.title}
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                  {item.heading}
                </h3>
                <p className="text-gray-500 text-sm md:text-base leading-relaxed">
                  We aim to empower institutions with the tools to turn data into actionable insight—
                  leading to smarter education experiences globally.
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>

      {/* SECTION 4 */}
      <div className="overlap-section relative w-full h-screen bg-white">
        <About />
      </div>
        {/* SECTION 5 */}
        <div className="overlap-section relative w-full h-screen bg-white">
        <Testimonial />
      </div>
       {/* SECTION 6 */}
       <div className="overlap-section relative w-full h-screen bg-white">
        <Boost />
      </div>
         {/* SECTION 7*/}
         <div className="overlap-section relative w-full h-screen bg-white">
        <Footer />
      </div>

    </div>
  );
}
