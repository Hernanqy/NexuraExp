import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Box, ExternalLink, Mail, Sparkles } from 'lucide-react';

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
      id: "01",
      tag: "Línea Detectives",
      titulo: "LA HABITACIÓN DE ROSA",
      descripcion: "Resolución de casos mediante evidencias físicas y digitales. Fomenta el pensamiento crítico y la deducción en el aula.",
      formato: "Kit Físico + App",
      precio: "$45.000",
      linkTienda: "https://TUTIENDANUBE.com/productos/habitacion-rosa",
      esAmedida: false
    },
    {
      id: "02",
      tag: "Línea Expedición",
      titulo: "EL MAPA DE EXPLORADORES",
      descripcion: "Aventura inmersiva para recorrer escuelas y museos utilizando brújulas, mapas y marcadores impresos en 3D.",
      formato: "Kit Físico + App",
      precio: "$48.000",
      linkTienda: "https://TUTIENDANUBE.com/productos/exploradores",
      esAmedida: false
    },
    {
      id: "03",
      tag: "Línea Patrimonio",
      titulo: "SECRETOS DEL TERRITORIO",
      descripcion: "Búsqueda de objetos históricos y arqueológicos diseñados específicamente para museos e instituciones culturales.",
      formato: "Kit Físico + App",
      precio: "$50.000",
      linkTienda: "https://TUTIENDANUBE.com/productos/patrimonio",
      esAmedida: false
    },
    {
      id: "04",
      tag: "Desarrollo Institucional",
      titulo: "MUSEO Y ESCUELA A MEDIDA",
      descripcion: "Diseño 100% personalizado. Guion científico, historia local, identidad institucional y digitalización a medida.",
      formato: "Proyecto Llave en Mano",
      precio: "Consultar",
      linkTienda: "mailto:tu-correo@email.com?subject=Consulta Desarrollo a Medida",
      esAmedida: true
    }
  ];

  return (
    <div className="min-h-screen bg-[#161513] text-[#EBE8E2] font-sans overflow-x-hidden cursor-none selection:bg-[#C28E59] selection:text-white pb-24">
      
      {/* Cursor Dinámico */}
      <motion.div 
        className="fixed top-0 left-0 w-6 h-6 rounded-full pointer-events-none z-[100] flex items-center justify-center shadow-[0_0_20px_rgba(194,142,89,0.3)]"
        style={{ backgroundColor: "#C28E59" }}
        animate={{
          x: mousePosition.x - 12,
          y: mousePosition.y - 12,
          scale: cursorState === "hover" ? 4 : cursorState === "btn" ? 0.5 : 1,
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.15 }}
      >
        {cursorState === "hover" && <span className="text-[5px] text-white font-black uppercase tracking-widest">VER</span>}
      </motion.div>

      {/* Navbar Minimalista */}
      <nav className="fixed w-full top-0 p-8 flex justify-between items-center z-50 mix-blend-difference bg-[#161513]/80 backdrop-blur-md">
        <div className="font-bold text-xl tracking-tighter uppercase">Nexura</div>
        <div className="text-xs md:text-sm font-medium tracking-widest uppercase hidden sm:block">Experiencias Educativas Híbridas</div>
      </nav>

      {/* HERO SECTION */}
      <section className="min-h-screen w-full flex flex-col justify-center px-8 md:px-16 relative">
        <div className="overflow-hidden mb-4">
          <motion.p initial="hidden" animate="visible" variants={titleVariants} className="text-xs md:text-sm tracking-widest uppercase text-[#C28E59] font-bold">
            Soluciones lúdicas para escuelas, museos y municipios
          </motion.p>
        </div>
        
        <div className="flex flex-col uppercase tracking-tighter leading-[0.85] w-full">
          <div className="overflow-hidden"><motion.h1 initial="hidden" animate="visible" variants={titleVariants} className="text-[12vw] font-black">EXPERIENCIAS</motion.h1></div>
          <div className="overflow-hidden flex items-center gap-4 md:gap-12">
            <motion.h1 initial="hidden" animate="visible" variants={titleVariants} transition={{ delay: 0.1, duration: 1, ease: [0.16, 1, 0.3, 1] }} className="text-[12vw] font-black text-transparent" style={{ WebkitTextStroke: "2px #EBE8E2" }}>QUE</motion.h1>
            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.5, duration: 0.8, ease: "backOut" }} className="hidden md:flex w-16 h-16 md:w-24 md:h-24 rounded-full border-2 border-[#C28E59] items-center justify-center">
              <Box className="w-6 h-6 md:w-8 md:h-8 text-[#C28E59]" />
            </motion.div>
          </div>
          <div className="overflow-hidden"><motion.h1 initial="hidden" animate="visible" variants={titleVariants} transition={{ delay: 0.2, duration: 1, ease: [0.16, 1, 0.3, 1] }} className="text-[12vw] font-black">CONECTAN.</motion.h1></div>
        </div>
      </section>

      {/* METODOLOGÍA */}
      <section className="px-8 md:px-16 py-24">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={sectionVariants} className="mb-16">
          <h2 className="text-xl md:text-2xl font-medium tracking-tighter uppercase mb-4">Para tu Institución</h2>
          <p className="max-w-2xl text-stone-400 text-lg md:text-xl font-light">Una plataforma modular que garantiza la consistencia pedagógica y la inmersión narrativa sin fricción técnica.</p>
        </motion.div>

        <div className="border-t border-stone-800">
          {[
            { num: "01", title: "MUNDO FÍSICO", desc: "Tableros, evidencias y piezas impresas en 3D (fósiles, llaves, monedas) listas para usar en el aula o sala de museo." },
            { num: "02", title: "APP DIGITAL", desc: "Potencia la inmersión sin reemplazar al docente o guía. Maneja audios, escáner QR y pistas progresivas." },
            { num: "03", title: "GUÍA DOCENTE", desc: "Planificación lista para implementar, con adaptaciones por edad, fundamentos curriculares y rúbricas." }
          ].map((item, idx) => (
            <motion.div 
              key={idx}
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants}
              className="flex flex-col md:flex-row justify-between items-start md:items-center py-12 border-b border-stone-800 group"
              onMouseEnter={() => setCursorState("hover")}
              onMouseLeave={() => setCursorState("default")}
            >
              <div className="flex items-center gap-8 mb-4 md:mb-0">
                <span className="text-[#C28E59] font-mono text-xl font-bold">{item.num}</span>
                <h3 className="text-4xl md:text-6xl font-black tracking-tighter uppercase text-transparent group-hover:text-[#C28E59] transition-colors duration-500" style={{ WebkitTextStroke: "1px #EBE8E2" }}>
                  {item.title}
                </h3>
              </div>
              <p className="max-w-sm text-stone-400 text-sm md:text-base group-hover:text-white transition-colors duration-500">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CATÁLOGO ESTILO PLINK (Filas limpias y presentadas a ancho completo) */}
      <section className="px-8 md:px-16 py-24">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants} className="mb-16 flex flex-col md:flex-row justify-between items-start md:items-end">
          <div>
            <span className="text-xs uppercase font-mono tracking-widest text-[#C28E59] font-bold block mb-2">Portfolio / Soluciones</span>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase">CATÁLOGO</h2>
          </div>
          <p className="text-stone-400 text-sm max-w-xs mt-4 md:mt-0 font-light">
            Explorá las propuestas pedagógicas listas para implementar o consultá por un desarrollo institucional a medida.
          </p>
        </motion.div>

        {/* Lista de productos en formato de filas limpias (Estilo Plink) */}
        <div className="border-t border-stone-800">
          {productos.map((prod, idx) => (
            <motion.div 
              key={idx}
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants}
              transition={{ delay: idx * 0.1 }}
              onMouseEnter={() => setCursorState("btn")}
              onMouseLeave={() => setCursorState("default")}
              className="group flex flex-col lg:flex-row justify-between items-start lg:items-center py-12 border-b border-stone-800 hover:bg-[#C28E59]/5 px-4 transition-colors duration-500"
            >
              <div className="flex items-start md:items-center gap-6 md:gap-10 mb-6 lg:mb-0">
                <span className="text-stone-600 font-mono text-lg font-bold pt-1 md:pt-0">{prod.id}</span>
                <div>
                  <span className="text-xs font-mono uppercase tracking-widest text-[#C28E59] block mb-1">
                    {prod.tag}
                  </span>
                  <h3 className="text-3xl md:text-5xl font-black tracking-tighter uppercase group-hover:text-[#C28E59] transition-colors duration-300">
                    {prod.titulo}
                  </h3>
                </div>
              </div>

              <div className="max-w-md text-stone-400 text-sm font-light mb-6 lg:mb-0 lg:px-8">
                <p className="mb-2">{prod.descripcion}</p>
                <span className="text-xs font-mono text-stone-500 uppercase">{prod.formato}</span>
              </div>

              <div className="flex items-center justify-between w-full lg:w-auto gap-8 pt-4 lg:pt-0 border-t lg:border-t-0 border-stone-800">
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase tracking-widest font-bold text-stone-500">Inversión</span>
                  <span className="text-xl font-bold text-white">{prod.precio}</span>
                </div>
                <a 
                  href={prod.linkTienda} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-full border border-stone-700 text-xs font-bold uppercase tracking-wider flex items-center gap-2 group-hover:bg-[#C28E59] group-hover:border-[#C28E59] group-hover:text-white transition-all duration-300"
                >
                  {prod.esAmedida ? 'Consultar' : 'Ver Kit'}
                  {prod.esAmedida ? <Mail className="w-3 h-3" /> : <ExternalLink className="w-3 h-3" />}
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="px-8 md:px-16 pt-24 pb-8 flex flex-col md:flex-row justify-between items-end border-t border-stone-900">
        <div className="mb-8 md:mb-0">
          <h2 className="text-4xl font-black tracking-tighter uppercase mb-2">NEXURA</h2>
          <p className="text-[#C28E59] text-sm tracking-widest uppercase font-bold">Experiencias Educativas Híbridas</p>
        </div>
        <div className="text-stone-600 text-xs font-mono">
          © 2026. ALL RIGHTS RESERVED.
        </div>
      </footer>

    </div>
  );
}
