// import { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import { Github, Linkedin, Mail, Download } from "lucide-react";

// export default function PortfolioWebsite() {
//   const [darkMode, setDarkMode] = useState(true);

//   useEffect(() => {
//     if (darkMode) {
//       document.documentElement.classList.add("dark");
//     } else {
//       document.documentElement.classList.remove("dark");
//     }
//   }, [darkMode]);

//   const personalInfo = {
//     name: "Ippty Khan",
//     title: "UI/UX Designer & Frontend Developer",
//     image: "/profile.jpg",
//     resume: "/resume.pdf",
//     email: "yourmail@gmail.com",
//     linkedin: "https://linkedin.com/in/yourprofile",
//     behance: "https://behance.net/yourprofile",
//     dribbble: "https://dribbble.com/yourprofile",
//     github: "https://github.com/yourprofile",
//   };

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
//       tools: ["Figma", "Wireframe", "Prototype"],
//     },
//     {
//       title: "Krishi Card",
//       category: "UI/UX Case Study",
//       description:
//         "A Krishi Card (Farmer Card) UI design should focus on clarity, accessibility, and utility for farmers, prioritizing quick access to information.",
//       tools: ["Figma", "User Research", "Design System"],
//     },
//   ];

//   const skills = [
//     "UI/UX Design",
//     "Figma",
//     "Wireframe",
//     "Prototyping",
//     "Design Systems",
//     "ReactJS",
//     "Tailwind CSS",
//     "Frontend Development",
//     "Responsive Design",
//     "User Research",
//   ];

//   return (
//     <div
//       className={`min-h-screen font-sans transition-colors duration-500 ${
//         darkMode ? "bg-black text-white" : "bg-white text-black"
//       }`}
//     >
//       {/* Navbar */}
//       <header
//         className={`sticky top-0 z-50 backdrop-blur-lg border-b transition-colors duration-500 ${
//           darkMode ? "border-white/10 bg-black/60" : "border-black/10 bg-white/60"
//         }`}
//       >
//         <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
//           <div className="flex items-center gap-4">
//             <h1 className="text-2xl font-bold">
//               Ippty<span className="text-gray-400">Khan</span>
//             </h1>

//             <button
//               onClick={() => setDarkMode(!darkMode)}
//               className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 hover:scale-105 ${
//                 darkMode ? "bg-white text-black" : "bg-black text-white"
//               }`}
//             >
//               {darkMode ? "☀ Light" : "🌙 Dark"}
//             </button>
//           </div>

//           <nav
//             className={`hidden md:flex gap-8 text-sm transition-colors duration-500 ${
//               darkMode ? "text-gray-300" : "text-gray-700"
//             }`}
//           >
//             <a href="#about">About</a>
//             <a href="#projects">Projects</a>
//             <a href="#skills">Skills</a>
//             <a href="#contact">Contact</a>
//           </nav>
//         </div>
//       </header>

//       {/* Hero */}
//       <motion.section
//         initial={{ opacity: 0, y: 40 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         className="max-w-7xl mx-auto px-6 pt-24 pb-20 grid lg:grid-cols-2 gap-14 items-center"
//       >
//         <div>
//           <p
//             className={`text-sm uppercase tracking-[4px] mb-4 transition-colors duration-500 ${
//               darkMode ? "text-gray-400" : "text-gray-600"
//             }`}
//           >
//             UI/UX Designer 
//           </p>

//           <h2 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
//             Designing
//             <span className="block text-gray-400">Digital Experiences</span>
//           </h2>

//           <p
//             className={`text-lg leading-8 max-w-xl mb-8 transition-colors duration-500 ${
//               darkMode ? "text-gray-300" : "text-gray-700"
//             }`}
//           >
//             Passionate UI/UX designer & frontend developer creating modern,
//             user-friendly digital products.
//           </p>

//           <div className="flex flex-wrap gap-4">
//             <a
//               href="#projects"
//               className="px-7 py-3 rounded-2xl bg-white text-black font-semibold hover:scale-105 transition"
//             >
//               View Projects
//             </a>

//             <a
//               href={personalInfo.resume}
//               download
//               className="px-7 py-3 rounded-2xl border border-white/20 hover:bg-white/10 transition flex items-center gap-2"
//             >
//               <Download size={18} /> Resume
//             </a>
//           </div>
//         </div>

//         <motion.div
//           initial={{ opacity: 0, scale: 0.8 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ delay: 0.3 }}
//           className="flex justify-center"
//         >
//           <div className="text-center">
//             <img
//               src={personalInfo.image}
//               alt="profile"
//               className="w-32 h-32 rounded-full object-cover mx-auto mb-6 border border-white/20"
//             />
//             <h3 className="text-2xl font-semibold">{personalInfo.name}</h3>
//             <p className="text-gray-400 mb-6">{personalInfo.title}</p>
//           </div>
//         </motion.div>
//       </motion.section>

//       {/* Projects */}
//       <section id="projects" className="max-w-7xl mx-auto px-6 py-24">
//         <h3 className="text-4xl font-bold mb-12">Projects</h3>

//         <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
//           {projects.map((p, i) => (
//             <motion.div
//               key={i}
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: i * 0.1 }}
//               whileHover={{ scale: 1.03 }}
//               className={`p-6 rounded-2xl border transition ${
//                 darkMode
//                   ? "bg-white/5 border-white/10"
//                   : "bg-black/5 border-black/10"
//               }`}
//             >
//               <h4 className="text-xl font-semibold mb-2">{p.title}</h4>
//               <p className="text-sm text-gray-400 mb-3">{p.category}</p>
//               <p className="mb-4 text-sm leading-6">{p.description}</p>
//               <div className="flex flex-wrap gap-2">
//                 {p.tools.map((t, idx) => (
//                   <span
//                     key={idx}
//                     className="text-xs px-3 py-1 rounded-full bg-white/10"
//                   >
//                     {t}
//                   </span>
//                 ))}
//               </div>
//             </motion.div>
//           ))}
//           {/* edit */}

//            <a href={`mailto:${personalInfo.email}`}>
//             <Mail />
//           </a>

//           <a href={personalInfo.linkedin} target="_blank">
//             <Linkedin />
//           </a>

//           <a href={personalInfo.github} target="_blank">
//             <Github />
//           </a>
//         {/* edit */}
//         </div>
//       </section>

//       {/* Skills */}
//       <section id="skills" className="max-w-7xl mx-auto px-6 py-24">
//         <h3 className="text-4xl font-bold mb-12">Skills</h3>

//         <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-5">
//           {skills.map((s, i) => (
//             <motion.div
//               key={i}
//               whileHover={{ scale: 1.05 }}
//               className={`p-5 rounded-2xl text-center border transition ${
//                 darkMode
//                   ? "bg-white/5 border-white/10"
//                   : "bg-black/5 border-black/10"
//               }`}
//             >
//               {s}
//             </motion.div>
//           ))}
//         </div>
//       </section>

//       {/* Contact */}
//       <section id="contact" className="max-w-5xl mx-auto px-6 py-24 text-center">
//         <h3 className="text-5xl font-bold mb-6">Let’s Work Together</h3>
//         <p className="mb-10 text-gray-400">Open for opportunities</p>

//         <div className="flex justify-center gap-5 flex-wrap">
//           <a href={`mailto:${personalInfo.email}`}>
//             <Mail />
//           </a>
//           <a href={personalInfo.linkedin} target="_blank">
//             <Linkedin />
//           </a>
//           <a href={personalInfo.github} target="_blank">
//             <Github />
//           </a>
//         </div>
//       </section>

//       Footer
//       <footer
//         className={`py-8 text-center text-sm border-t transition-colors duration-500 ${
//           darkMode ? "border-white/10 text-gray-500" : "border-black/10 text-gray-600"
//         }`}
//       >
//         © 2026 {personalInfo.name}
//       </footer>


//     </div>
    
//   );
// }
