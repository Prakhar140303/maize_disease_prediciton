import React, { useEffect, useState } from 'react';
import { loadingTips } from './utils/index';  
import { AnimatePresence, motion } from 'framer-motion';
import {useNavigate} from 'react-router-dom'
import Loader from './utils/Loader.jsx';
export default function Home() {
    const navigate = useNavigate();
    const [isLoading,setIsLoading] = useState(true);
    useEffect(() => {
      const timer  = setTimeout(() => {
        setIsLoading(false);
      },1500);
      return () => clearTimeout(timer);
    },[]);
  return (
    isLoading ? <Loader /> :
    <div className="h-screen flex-col gap-20 flex p-4 justify-center items-center bg-no-repeat bg-cover bg-center bg-[url('https://png.pngtree.com/thumb_back/fw800/background/20230308/pngtree-cartoon-drawing-green-plant-leaves-illustration-background-image_1746581.jpg')]">
      <div className="flex  rounded-lg shadow-lg  flex-col justify-center items-center h-[250px]  w-full  min-w-2xl  bg-[#c9df8a]/80 drop-shadow-2xl text-[#36802d] font-bold border-2 border-white border-opacity-50">
        <h1 className='text-3xl md:text-5xl font-bold text-[#234d20]' >Tips </h1>
        <FramerTipScroller tips={loadingTips} />
      </div>
      <motion.div className='flex bg-[#77ab59] text-white text-3xl font-montserrat p-2 rounded-xl shadow-2xl border-2 border-white border-opacity-35'
        initial ={{scale :1}} whileTap={{scale :0.9}} whileHover={{scale :1.1}}
      >
        <button onClick={() => navigate('/predict')}
        >Get Started</button>

      </motion.div>
    </div>
  );
}

function FramerTipScroller({
  tips = loadingTips,
  displayMs = 5000,
  transitionMs = 500,
  pauseMs = 1000
}) {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const total = displayMs + transitionMs + pauseMs;
    const id = setInterval(() => {
      setIdx(i => (i + 1) % tips.length);
    }, total);
    return () => clearInterval(id);
  }, [tips.length, displayMs, transitionMs, pauseMs]);

  const variants = {
    enter: { y: '100%',  opacity: 0 },
    center:{ y: '0%',    opacity: 1 },
    exit:  { y: '-100%', opacity: 0 }
  };

  return (
    <div className="relative h-full w-full overflow-hidden flex gap-4 justify-center">
      <AnimatePresence mode="wait">
        <motion.div
          key={idx}
          className="absolute  left-0 w-full p-4 text-center md:text-3xl text-xl leading-snug"
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: transitionMs / 1000, ease: 'easeInOut' }}
        >
          {tips[idx]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
