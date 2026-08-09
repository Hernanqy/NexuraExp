import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Box, ExternalLink, Mail } from 'lucide-react';

export default function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorState, setCursorState] = useState("default");

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);

  const titleVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } }
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const productos = [
    {
      id: 1,
      tag: "Línea Detectives",
      titulo: "LA HABITACIÓN DE ROSA",
      descripcion: "Resolución de casos mediante evidencias físicas y digitales. Fomenta la deducción en el aula.",
      precio: "$45.000 (Kit Físico)",
      linkTienda: "https://TUTIENDANUBE.com/productos/habitacion-rosa",
      esAmedida: false
    },
    {
      id: 2,
      tag: "Línea Expedición",
      titulo: "EL MAPA DE EXPLORADORES",
      descripcion: "Aventura inmersiva para recorrer escuelas y museos con brújulas, mapas y marcadores 3D.",
      precio: "$48.000 (Kit Físico)",
      linkTienda: "https://TUTIENDANUBE.com/productos/exploradores",
      esAmedida: false
    },
    {
      id: 3,
      tag: "Línea Patrimonio",
      titulo: "SECRETOS DEL TERRITORIO",
      descripcion: "Búsqueda de objetos históricos y arqueológicos diseñados específicamente para museos.",
      precio: "$50.000 (Kit Físico)",
      linkTienda: "https://TUTIENDANUBE.com/productos/patrimonio",
      esAmedida: false
    },
    {
      id: 4,
      tag: "Desarrollo Institucional",
      titulo: "MUSEO Y ESCUELA A MEDIDA",
      descripcion: "Diseño 100% personalizado. Guion científico, historia local, identidad y digitalización.",
      precio: "Proyecto llave en mano",
      linkTienda: "mailto:tu-correo@email.com?subject=Consulta Desarrollo a Medida",
      esAmedida: true
    }
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-[#f5f5f5] font-sans overflow-x-hidden cursor-none selection:bg-[#CCFF00] selection:text-black pb-24">
      
      {/* Cursor Dinámico */}
      <motion.div 
        className="fixed top-0 left-0 w-6 h-6 rounded-full pointer-events-none z-[100] flex items-center justify-center shadow-[0_0_20px_rgba(204,255,0,0.4)]"
        style={{ backgroundColor: "#CCFF00" }}
        animate={{
          x: mousePosition.x - 12,
          y: mousePosition.y - 12,
          scale: cursorState === "hover" ? 4 : cursorState === "btn" ? 0.5 : 1,
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.15 }}
      >
        {cursorState === "hover" && <span className="text-[5px] text-black font-black uppercase tracking-widest">VER</span>}
      </motion.div>

      {/* Navbar Minimalista */}
      <nav className="fixed w-full top-0 p-8 flex justify-between items-center z-50 mix-blend-difference">
        <div className="font-bold text-xl tracking-tighter uppercase">Nexura</div>
        <div className="text-xs md:text-sm font-medium tracking-widest uppercase hidden sm:block">Experiencias Educativas Híbridas</div>
      </nav>

      {/* HERO SECTION */}
      <section className="min-h-screen w-full flex flex-col justify-center px-8 md:px-16 relative">
        <div className="overflow-hidden mb-4">
          <motion.p initial="hidden" animate="visible" variants={titleVariants} className="text-xs md:text-sm tracking-widest uppercase text-[#CCFF00] font-bold">
            Soluciones lúdicas para escuelas, museos y municipios
          </motion.p>
        </div>
        
        {/* NUEVA FRASE */}
        <div className="flex flex-col uppercase tracking-tighter leading-[0.85] w-full">
          <div className="overflow-hidden"><motion.h1 initial="hidden" animate="visible" variants={titleVariants} className="text-[12vw] font-black">EXPERIENCIAS</motion.h1></div>
          <div className="overflow-hidden flex items-center gap-4 md:gap-12">
            <motion.h1 initial="hidden" animate="visible" variants={titleVariants} transition={{ delay: 0.1, duration: 1, ease: [0.16, 1, 0.3, 1] }} className="text-[12vw] font-black text-transparent" style={{ WebkitTextStroke: "2px #f5f5f5" }}>QUE</motion.h1>
            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.5, duration: 0.8, ease: "backOut" }} className="hidden md:flex w-16 h-16 md:w-24 md:h-24 rounded-full border-2 border-[#CCFF00] items-center justify-center">
              <Box className="w-6 h-6 md:w-8 md:h-8 text-[#CCFF00]" />
            </motion.div>
          </div>
          <div className="overflow-hidden"><motion.h1 initial="hidden" animate="visible" variants={titleVariants} transition={{ delay: 0.2, duration: 1, ease: [0.16, 1, 0.3, 1] }} className="text-[12vw] font-black">CONECTAN.</motion.h1></div>
        </div>
      </section>

      {/* METODOLOGÍA */}
      <section className="px-8 md:px-16 py-24">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={sectionVariants} className="mb-16">
          <h2 className="text-xl md:text-2xl font-medium tracking-tighter uppercase mb-4">Para tu Institución</h2>
          <p className="max-w-2xl text-gray-400 text-lg md:text-xl font-light">Una plataforma modular que garantiza la consistencia pedagógica y la inmersión narrativa sin fricción técnica.</p>
        </motion.div>

        <div className="border-t border-gray-800">
          {[
            { num: "01", title: "MUNDO FÍSICO", desc: "Tableros, evidencias y piezas impresas en 3D (fósiles, llaves, monedas) listas para usar en el aula o sala de museo." },
            { num: "02", title: "APP DIGITAL", desc: "Potencia la inmersión sin reemplazar al docente o guía. Maneja audios, escáner QR y pistas progresivas." },
            { num: "03", title: "GUÍA DOCENTE", desc: "Planificación lista para implementar, con adaptaciones por edad, fundamentos curriculares y rúbricas." }
          ].map((item, idx) => (
            <motion.div 
              key={idx}
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants}
              className="flex flex-col md:flex-row justify-between items-start md:items-center py-12 border-b border-gray-800 group"
              onMouseEnter={() => setCursorState("hover")}
              onMouseLeave={() => setCursorState("default")}
            >
              <div className="flex items-center gap-8 mb-4 md:mb-0">
                <span className="text-[#CCFF00] font-mono text-xl font-bold">{item.num}</span>
                <h3 className="text-4xl md:text-6xl font-black tracking-tighter uppercase text-transparent group-hover:text-[#CCFF00] transition-colors duration-500" style={{ WebkitTextStroke: "1px #f5f5f5" }}>
                  {item.title}
                </h3>
              </div>
              <p className="max-w-sm text-gray-400 text-sm md:text-base group-hover:text-white transition-colors duration-500">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CATÁLOGO DE PRODUCTOS */}
      <section className="px-8 md:px-16 py-24">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants} className="mb-16">
          <h2 className="text-[8vw] leading-none font-black tracking-tighter uppercase mb-4 text-transparent" style={{ WebkitTextStroke: "2px #333" }}>CATÁLOGO</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {productos.map((prod, idx) => (
            <motion.div 
              key={idx}
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants}
              transition={{ delay: idx * 0.1 }}
              onMouseEnter={() => setCursorState("btn")}
              onMouseLeave={() => setCursorState("default")}
              className="group border border-gray-800 p-8 flex flex-col justify-between min-h-[400px] hover:border-[#CCFF00] hover:bg-[#CCFF00]/5 transition-colors duration-500 relative overflow-hidden"
            >
              <div className="relative z-10">
                <span className="text-xs font-mono uppercase tracking-widest border border-[#CCFF00] text-[#CCFF00] px-3 py-1 rounded-full mb-8 inline-block">
                  {prod.tag}
                </span>
                <h3 className="text-4xl font-black tracking-tighter uppercase leading-[0.9] mb-6 group-hover:text-[#CCFF00] transition-colors duration-500">{prod.titulo}</h3>
                <p className="text-sm font-light opacity-70 mb-8 group-hover:opacity-100 transition-opacity">{prod.descripcion}</p>
              </div>
              
              <div className="flex justify-between items-end border-t border-gray-800 pt-6 relative z-10">
                <div className="flex flex-col">
                  <span className="text-xs uppercase tracking-widest font-bold text-gray-500 mb-1">Inversión</span>
                  <span className="text-lg font-bold text-white group-hover:text-[#CCFF00] transition-colors">{prod.precio}</span>
                </div>
                <a 
                  href={prod.linkTienda} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full border border-gray-600 flex items-center justify-center group-hover:bg-[#CCFF00] group-hover:border-[#CCFF00] group-hover:text-black transition-all duration-300"
                >
                  {prod.esAmedida ? <Mail className="w-4 h-4" /> : <ExternalLink className="w-4 h-4" />}
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="px-8 md:px-16 pt-24 pb-8 flex flex-col md:flex-row justify-between items-end border-t border-gray-900">
        <div className="mb-8 md:mb-0">
          <h2 className="text-4xl font-black tracking-tighter uppercase mb-2">NEXURA</h2>
          <p className="text-[#CCFF00] text-sm tracking-widest uppercase font-bold">Experiencias Educativas Híbridas</p>
        </div>
        <div className="text-gray-600 text-xs font-mono">
          © 2026. ALL RIGHTS RESERVED.
        </div>
      </footer>

    </div>
  );
}
