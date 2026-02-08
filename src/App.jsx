import React, { useState } from 'react'
import SearchBar from './Component/SearchBar'
import ResultCard from './Component/ResultCard'
import img from './assets/grid.jpg'
import character from './assets/Statue.png'
import {motion} from 'framer-motion'

const App = () => {
  const [data, setData] = useState(null)

  const HandleData = (data) => {
    setData(data)
  }

  return (
    <div
      className="min-h-screen md:h-screen w-full bg-center bg-cover bg-no-repeat overflow-auto md:overflow-hidden"
      style={{ backgroundImage: `url(${img})` }}
    >
      
      <div className="h-screen grid grid-cols-1 md:grid-cols-2 px-3 sm:px-6 py-4 sm:py-0 bg-black/40 text-white md:overflow-hidden gap-4">
        <div className="flex flex-col items-center justify-center relative">
          <div className="flex flex-col items-center justify-center relative">
            <motion.h1 className="text-5xl sm:text-6xl md:text-7xl text-slate-50 font-Melon mb-4 sm:mb-6 text-center  md:absolute right-4 top-10 z-10"
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              Dictionary
            </motion.h1>
            <motion.img
              src={character}
              alt="Statue"
              className="hidden md:block w-56 sm:w-72 md:w-96 object-contain z-20"
              initial={{ opacity: 0, y: 300 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            />
          </div>
        </div>
        <motion.div className="flex items-center justify-center w-full opacity-0.9"
          initial={{ opacity: 0.8, y: 100 }}
          animate={{ opacity: 0.97, y: 0 }}
          transition={{ duration: 1 }}
        >
          <div 
            className="clip-paper bg-white/10 backdrop-blur-lg border border-white/20 shadow-xl p-4 sm:p-6 w-full max-w-md relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm md:hidden opacity-0.8"></div>
            <div className="absolute inset-0 bg-white/10 backdrop-blur-lg md:hidden opacity-0.8"></div>
            <div className="relative z-10 max-h-[90vh] overflow-y-auto ">
              <motion.h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2 }}>INQUIRE THE ARCHIVES</motion.h1>
              <SearchBar onSearch={HandleData} />
              <ResultCard data={data} />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default App
