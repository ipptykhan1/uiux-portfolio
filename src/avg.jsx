// import { useState } from 'react'
// import { motion } from "framer-motion";

// export default function PortfolioWebsite() {
//   const projects = [
//     {
//       title: "Smart Finance Dashboard",
//       category: "UI/UX Case Study",
//       description:
//         "A finance management dashboard helping users track spending, analyze patterns, and manage future budgets.",
//       tools: ["Figma", "User Research", "Design System"],
//     },
//     {
//       title: "E-Learning Progress Tracker",
//       category: "Dashboard Design",
//       description:
//         "Designed a clean student dashboard with progress tracking, course analytics, and personalized learning flow.",
//       tools: ["Figma", "Wireframing", "Prototype"],
//     },
//     {
//       title: "Portfolio Landing Page",
//       category: "Frontend Development",
//       description:
//         "Responsive portfolio website built using ReactJS and Tailwind CSS with smooth animations.",
//       tools: ["ReactJS", "Tailwind CSS", "Framer Motion"],
//     },
//   ];

//   const skills = [
//     "UI/UX Design",
//     "Figma",
//     "Wireframing",
//     "Prototyping",
//     "Design Systems",
//     "ReactJS",
//     "Tailwind CSS",
//     "Frontend Development",
//     "Responsive Design",
//     "User Research",
//   ];

//   return (
//     <div className="min-h-screen bg-black text-white font-sans">
//       {/* Navbar */}
//       <header className="sticky top-0 z-50 backdrop-blur-lg border-b border-white/10 bg-black/60">
//         <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
//           <h1 className="text-2xl font-bold tracking-wide">
//             Ippty<span className="text-gray-400">Khan</span>
//           </h1>

//           <nav className="hidden md:flex gap-8 text-sm text-gray-300">
//             <a href="#about" className="hover:text-white transition">
//               About
//             </a>
//             <a href="#projects" className="hover:text-white transition">
//               Projects
//             </a>
//             <a href="#skills" className="hover:text-white transition">
//               Skills
//             </a>
//             <a href="#contact" className="hover:text-white transition">
//               Contact
//             </a>
//           </nav>
//         </div>
//       </header>

//       {/* Hero Section */}
//       <motion.section
//         initial={{ opacity: 0, y: 40 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         className="max-w-7xl mx-auto px-6 pt-24 pb-20 grid lg:grid-cols-2 gap-14 items-center"
//       >
//         <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ delay: 0.2, duration: 0.8 }}
//           >
//             <p className="text-gray-400 text-sm uppercase tracking-[4px] mb-4">
//             UI/UX Designer & Frontend Developer
//           </p>

//           <h2 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
//             Designing
//             <span className="block text-gray-400">Digital Experiences</span>
//           </h2>

//           <p className="text-gray-300 text-lg leading-8 max-w-xl mb-8">
//             Passionate UI/UX designer with frontend development experience.
//             I create clean, modern, and user-focused digital products that
//             solve real problems and help businesses grow.
//           </p>

//           <div className="flex flex-wrap gap-4">
//             <button className="px-7 py-3 rounded-2xl bg-white text-black font-semibold hover:scale-105 transition">
//               View Projects
//             </button>

//             <button className="px-7 py-3 rounded-2xl border border-white/20 hover:bg-white/10 transition">
//               Download Resume
//             </button>
//           </div>
//         </motion.div>

//         <motion.div
//           initial={{ opacity: 0, scale: 0.8 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ delay: 0.4, duration: 0.8 }}
//           className="relative flex justify-center"
//         >
//           <div className="w-[320px] h-[420px] rounded-[40px] bg-gradient-to-br from-white/10 to-white/5 border border-white/10 backdrop-blur-xl shadow-2xl flex items-center justify-center overflow-hidden">
//             <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.12),transparent_40%)]" />

//             <div className="text-center z-10 px-8">
//               <div className="w-28 h-28 rounded-full bg-white/10 mx-auto mb-6 border border-white/10 flex items-center justify-center text-3xl font-bold">
//                 IK
//               </div>

//               <h3 className="text-2xl font-semibold mb-2">Ippty Khan</h3>
//               <p className="text-gray-400 mb-6">
//                 Product Designer & Frontend Developer
//               </p>

//               <div className="flex justify-center gap-3 flex-wrap">
//                 <span className="px-4 py-2 rounded-full bg-white/10 text-sm">
//                   Figma
//                 </span>
//                 <span className="px-4 py-2 rounded-full bg-white/10 text-sm">
//                   ReactJS
//                 </span>
//                 <span className="px-4 py-2 rounded-full bg-white/10 text-sm">
//                   UX Research
//                 </span>
//               </div>
//             </div>
//           </div>
//         </motion.div>
//       </motion.section>

//       {/* About */}
//       <section id="about" className="max-w-7xl mx-auto px-6 py-24">
//         <div className="grid lg:grid-cols-2 gap-12 items-start">
//           <div>
//             <p className="text-gray-500 uppercase tracking-[3px] text-sm mb-4">
//               About Me
//             </p>

//             <h3 className="text-4xl font-bold mb-6 leading-tight">
//               Creating meaningful and visually engaging digital products.
//             </h3>
//           </div>

//           <div>
//             <p className="text-gray-300 leading-8 text-lg">
//               I focus on creating intuitive user experiences with modern UI
//               design principles. My background in frontend development helps me
//               bridge the gap between design and implementation, making products
//               both beautiful and functional.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Projects */}
//       <section id="projects" className="max-w-7xl mx-auto px-6 py-24">
//         <div className="flex items-center justify-between mb-12 flex-wrap gap-4">
//           <div>
//             <p className="text-gray-500 uppercase tracking-[3px] text-sm mb-3">
//               Featured Work
//             </p>
//             <h3 className="text-4xl font-bold">Selected Projects</h3>
//           </div>

//           <button className="px-6 py-3 rounded-2xl border border-white/10 hover:bg-white/10 transition">
//             View All
//           </button>
//         </div>

//         <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
//           {projects.map((project, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: index * 0.15, duration: 0.6 }}
//               whileHover={{ y: -10, scale: 1.02 }}
//               className="group rounded-[30px] border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden transition duration-300"
//             >
//               <div className="h-52 bg-gradient-to-br from-white/10 to-transparent flex items-center justify-center text-2xl font-bold text-gray-500">
//                 Project Preview
//               </div>

//               <div className="p-7">
//                 <p className="text-sm text-gray-400 mb-3">
//                   {project.category}
//                 </p>

//                 <h4 className="text-2xl font-semibold mb-4">
//                   {project.title}
//                 </h4>

//                 <p className="text-gray-300 leading-7 mb-6">
//                   {project.description}
//                 </p>

//                 <div className="flex flex-wrap gap-2">
//                   {project.tools.map((tool, i) => (
//                     <span
//                       key={i}
//                       className="px-3 py-2 rounded-full text-xs bg-white/10 border border-white/10"
//                     >
//                       {tool}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </section>

//       {/* Skills */}
//       <section id="skills" className="max-w-7xl mx-auto px-6 py-24">
//         <div className="mb-12">
//           <p className="text-gray-500 uppercase tracking-[3px] text-sm mb-3">
//             Skills
//           </p>
//           <h3 className="text-4xl font-bold">Tools & Expertise</h3>
//         </div>

//         <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
//           {skills.map((skill, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, scale: 0.8 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               viewport={{ once: true }}
//               transition={{ delay: index * 0.05, duration: 0.4 }}
//               whileHover={{ scale: 1.05 }}
//               className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center hover:bg-white/10 transition"
//             >
//               <p className="font-medium">{skill}</p>
//             </motion.div>
//           ))}
//         </div>
//       </section>

//       {/* Contact */}
//       <motion.section
//         id="contact"
//         initial={{ opacity: 0, y: 60 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.7 }}
//         className="max-w-5xl mx-auto px-6 py-24 text-center"
//       >
//         <p className="text-gray-500 uppercase tracking-[3px] text-sm mb-4">
//           Contact
//         </p>

//         <h3 className="text-5xl font-bold leading-tight mb-6">
//           Let’s build something amazing together.
//         </h3>

//         <p className="text-gray-300 text-lg leading-8 mb-10 max-w-2xl mx-auto">
//           Open for internships, freelance work, and full-time opportunities in
//           UI/UX design and frontend development.
//         </p>

//         <div className="flex flex-wrap justify-center gap-5">
//           <button className="px-8 py-4 rounded-2xl bg-white text-black font-semibold hover:scale-105 transition">
//             Hire Me
//           </button>

//           <button className="px-8 py-4 rounded-2xl border border-white/10 hover:bg-white/10 transition">
//             Email Me
//           </button>
//         </div>
//       </motion.section>

//       {/* Footer */}
//       <footer className="border-t border-white/10 py-8 text-center text-gray-500 text-sm">
//         © 2026 Ippty Khan — UI/UX Designer & Frontend Developer
//       </footer>
//     </div>
//   );
// }
