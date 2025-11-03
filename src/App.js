import MainInfo from './components/mainInfo';
import ContactForm from './components/contactForm';
import Buttons from './components/buttons'
import GoToRightBtn from './components/goToRightBtn';
import GotoLeftBtn from './components/goToLeftBtn';

import Header from './components/header'
import {useState} from 'react'
import { AnimatePresence, motion } from "framer-motion"

function App() {

  const [page, setPage] = useState("header")
 
  
  return (

    <>

     <div className="overflow-hidden h-screen w-full">
      <AnimatePresence mode="wait">
        {page === "header" ? (
          <motion.div
            key="header"
            initial={{ x: 0 }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="absolute w-full h-full"
          >
            <Header goToNext={() => setPage("mainInfo")} />
          </motion.div>
        ) : page === "mainInfo" ? (
         <motion.div
            key="mainInfo"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="absolute w-full h-full"
          > 
          <MainInfo
          goToNext={() => setPage("Buttons")} 
          goBack={() => setPage("header")}
          />
          </motion.div>
        ): page === "Buttons" ? (
          <motion.div
            key="Buttons"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="absolute w-full h-full"
          >
            <Buttons 
            goToNext={() => setPage("ContactForm")}
            goBack={() => setPage("mainInfo")} />
          </motion.div>
          ):(
          <motion.div
            key="ContactForm"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="absolute w-full h-full"
          >
            <ContactForm goBack={() => setPage("Buttons")} />
          </motion.div>


        )}
      </AnimatePresence>
    </div>

    </>
  );
}

export default App;
