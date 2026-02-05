// E:\woneview\app\component\Home2.tsx

"use client";
import React, { useState, useEffect } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  AnimatePresence,
} from "framer-motion";

// --- Types ---
interface Project {
  id: number;
  title: string;
  category: string;
  video: string;
  image: string;
}

interface CustomCursorProps {
  cursorText: string;
  isHovering: boolean;
}

interface ProjectCardProps {
  project: Project;
  index: number;
  setCursorText: (text: string) => void;
  setIsHovering: (hover: boolean) => void;
  hoveredIndex: number | null;
  setHoveredIndex: (index: number | null) => void;
}

// --- Data ---
const projects: Project[] = [
  {
    id: 1,
    title: "Design Club",
    category: "webdesign + webflow",
    video:
      "https://eliotbesson.b-cdn.net/Design%20Club/DESIGN%20CLUB%20-%20Hero.mp4",
    image:
      "https://cdn.prod.website-files.com/677fb4d34764579513f06e12/67bc4479c1b144bb36f21895_home-card-ds%20(2).webp",
  },
  {
    id: 2,
    title: "Joyeux Repas",
    category: "webdesign + webflow",
    video: "https://eliotbesson.b-cdn.net/Joyeux%20Repas/JR%20-%20Hero.mp4",
    image:
      "https://cdn.prod.website-files.com/677fb4d34764579513f06e12/67bc4483c38bb541e485f8e8_home-card-jr%20(4).webp",
  },
  {
    id: 3,
    title: "Studio Fugu",
    category: "Webdesign + Webflow",
    video:
      "https://eliotbesson.b-cdn.net/Studio%20Fugu%20-%20MP4%20OPTI/FUGU%20-%20Hero.mp4",
    image:
      "https://cdn.prod.website-files.com/677fb4d34764579513f06e12/68336ab5fdbaa709e057e4d1_home-card-fugu%402x.webp",
  },
  {
    id: 4,
    title: "Handshaik",
    category: "Webdesign + Webflow",
    video: "https://eliotbesson.b-cdn.net/Handshaik/HS%20-%20Main.mp4",
    image:
      "https://cdn.prod.website-files.com/677fb4d34764579513f06e12/68c194e49d0d6659bc435b50_home-card-handshaik%20(1).jpg",
  },
  {
    id: 5,
    title: "Factor E",
    category: "Webflow development",
    video: "https://eliotbesson.b-cdn.net/Factor%20E/FACTORE%20-%20MAIN.mp4",
    image:
      "https://cdn.prod.website-files.com/677fb4d34764579513f06e12/68303430d50ca3d2d680ec4a_factore-thumbnail%20(1).webp",
  },
  {
    id: 6,
    title: "Drop",
    category: "Webflow development",
    video: "https://eliotbesson.b-cdn.net/Drop/DROP%20-%20Hero.mp4",
    image:
      "https://cdn.prod.website-files.com/677fb4d34764579513f06e12/67bc4452071f02f1e626afc3_home-card-drop%20(3).webp",
  },
];

// --- Components ---

const CustomCursor: React.FC<CustomCursorProps> = ({
  cursorText,
  isHovering,
}) => {
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = { damping: 20, stiffness: 300 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[100] flex items-center justify-center bg-white text-black font-bold text-[10px] tracking-wider uppercase rounded-full mix-blend-difference will-change-transform"
      style={{
        x: cursorX,
        y: cursorY,
        translateX: "-50%",
        translateY: "-50%",
      }}
      animate={{
        width: isHovering ? 100 : 12,
        height: isHovering ? 100 : 12,
        opacity: 1,
        scale: 1,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
    >
      <AnimatePresence>
        {isHovering && (
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="text-center leading-none text-black font-extrabold px-2 font-inter"
          >
            {cursorText}
          </motion.span>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  index,
  setCursorText,
  setIsHovering,
  hoveredIndex,
  setHoveredIndex,
}) => {
  const isHovered = hoveredIndex === index;

  const distanceFromHovered =
    hoveredIndex !== null ? Math.abs(hoveredIndex - index) : null;

  let targetWidth = 150;
  let targetHeight = 160;

  let targetFilter = "grayscale(0%) blur(0px)";

  if (hoveredIndex !== null) {
    if (distanceFromHovered === 0) {
      // The Hovered Card
      targetWidth = 190;
      targetHeight = 210;
    } else if (distanceFromHovered === 1) {
      targetWidth = 160;
      targetHeight = 170;
    } else if (distanceFromHovered === 2) {
      targetWidth = 150;
      targetHeight = 160;
    } else {
      targetWidth = 140;
      targetHeight = 150;
    }
  }

  return (
    <motion.div
      layout
      className="relative flex-shrink-0 cursor-none group flex flex-col justify-end"
      animate={{
        width: targetWidth,
        height: targetHeight,
        opacity: 1,
        filter: targetFilter,
      }}
      transition={{
        type: "spring",
        stiffness: 120,
        damping: 15,
        mass: 1,
      }}
      onMouseEnter={() => {
        setIsHovering(true);
        setCursorText("OPEN PROJECT");
        setHoveredIndex(index);
      }}
      onMouseLeave={() => {
        setIsHovering(false);
        setCursorText("");
        setHoveredIndex(null);
      }}
    >
      <div className="w-full h-full relative overflow-hidden bg-zinc-900 border border-white/5">
        <motion.div
          className="absolute inset-0 w-full h-full"
          layoutId={`media-${project.id}`}
        >
          <video
            src={project.video}
            className="absolute inset-0 w-full h-full object-cover z-10 opacity-0 group-hover:opacity-90 transition-opacity duration-700 ease-out"
            loop
            muted
            playsInline
            autoPlay
          />

          <img
            src={project.image}
            alt={project.title}
            className="absolute inset-0 w-full h-full object-cover z-0 duration-700 ease-out"
          />
          <div className="absolute inset-0 bg-black/5 pointer-events-none transition-colors duration-500 group-hover:bg-transparent" />
        </motion.div>
      </div>

      <AnimatePresence>
        {isHovered && (
          <motion.div
            className="absolute bottom-6 left-6 z-20 pointer-events-none overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
          >
            <h3 className="text-white text-xl font-bold uppercase tracking-tighter font-inter mix-blend-difference leading-none">
              {project.title}
            </h3>
            <p className="text-white/80 text-sm uppercase tracking-widest font-inter mix-blend-difference mt-2">
              {project.category}
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        className="absolute -bottom-8 left-0 w-full text-left pl-1"
        animate={{
          opacity: isHovered ? 0 : hoveredIndex !== null ? 0 : 1, // Hide when any hover happens to clean up
          y: isHovered ? -20 : 0,
        }}
      >
        <h3 className="text-white/40 text-xs font-bold uppercase tracking-widest font-inter truncate">
          {project.title}
        </h3>
      </motion.div>
    </motion.div>
  );
};

export default function Home2() {
  const [cursorText, setCursorText] = useState("");
  const [isHovering, setIsHovering] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="bg-[#0a0a0a] min-h-screen w-full overflow-hidden selection:bg-white selection:text-black">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Anton&family=Inter:wght@400;500;600;700;800&display=swap');
        .font-anton { font-family: 'Anton', sans-serif; }
        .font-inter { font-family: 'Inter', sans-serif; }
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      <CustomCursor cursorText={cursorText} isHovering={isHovering} />

      <main className="relative h-screen w-full flex flex-col items-center justify-center">
        <div className="absolute top-0 left-0 w-full  flex  flex-col items-center justify-center pt-[15vh] z-0 pointer-events-none">
          <motion.div
            initial={{ scale: 2.5, y: "20vh" }}
            animate={{ scale: 1, y: 0 }}
            transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
            className="flex flex-col items-center text-center px-4"
          >
            <h1 className="font-anton text-white text-[4vw] leading-[0.8] uppercase tracking-tighter mix-blend-exclusion opacity-90">
              <span className="block overflow-hidden pb-2">
                <motion.span
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1, delay: 0.2 }}
                  className="block"
                >
                  Crafting Bold &
                </motion.span>
              </span>
              <span className="block overflow-hidden pb-2">
                <motion.span
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1, delay: 0.3 }}
                  className="block text-transparent text-stroke-white"
                  style={{
                    WebkitTextStroke: "1px rgba(255,255,255,0.7)",
                    color: "transparent",
                  }}
                >
                  Memorable
                </motion.span>
              </span>
              <span className="block overflow-hidden pb-4">
                <motion.span
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1, delay: 0.4 }}
                  className="block"
                >
                  Websites
                </motion.span>
              </span>
            </h1>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2, duration: 1 }}
              className="mt-8 text-white/50 text-xs md:text-sm font-medium tracking-wider max-w-md mx-auto uppercase font-inter"
            >
              <p>
                I'm Eliot, Freelance Webdesigner & Webflow Developer since 2018.
                Based in Lyon, France
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* feature  */}
        <motion.div
          initial={{ y: "100%" }}
          animate={{ y: "0%" }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 1.5 }}
          className="absolute bottom-0  w-full flex flex-col items-center justify-end z-20"
        >
          <div className="mb-4 flex items-center gap-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 2.2 }}
              className="flex items-center gap-4"
            >
              <div className="h-1px w-8 bg-white/20"></div>
              <span className="text-white/40 text-[10px] font-bold uppercase tracking-[0.2em] font-inter">
                Featured Works
              </span>
            </motion.div>
          </div>

          <div className="no-scrollbar pr-12 pb-8 h-full flex-col   w-full overflow-x-auto no-scrollbar flex justify-start md:justify-center">
            <div className="flex items-end gap-4 w-max mx-auto pb-4 px-2">
              {projects.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={index}
                  setCursorText={setCursorText}
                  setIsHovering={setIsHovering}
                  hoveredIndex={hoveredIndex}
                  setHoveredIndex={setHoveredIndex}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* <div className="absolute bottom-0 left-0 w-full h-[40vh] bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/60 to-transparent pointer-events-none z-10" /> */}
      </main>
    </div>
  );
}
