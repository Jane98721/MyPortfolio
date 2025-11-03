import { useState } from "react"
import School from "./education"
import Popup from './popup'
import Work from "./workExperience"
import AboutMe from "./aboutMe"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons/faGraduationCap"
import { faBriefcase } from "@fortawesome/free-solid-svg-icons/faBriefcase"
import { faLanguage } from "@fortawesome/free-solid-svg-icons/faLanguage"
import { faPersonDress } from "@fortawesome/free-solid-svg-icons/faPersonDress"
import { faArrowDown } from "@fortawesome/free-solid-svg-icons/faArrowDown"
import Other from "./languageAndReference"
import { faArrowLeft} from "@fortawesome/free-solid-svg-icons"
import ContactForm from "./contactForm"

function Buttons ({goBack}) {
  const school = <FontAwesomeIcon icon={faGraduationCap} />
  const work = <FontAwesomeIcon icon={faBriefcase} />
  const rest = <FontAwesomeIcon icon={faLanguage} />
  const me = <FontAwesomeIcon icon = {faPersonDress}/>
  const arrow = <FontAwesomeIcon icon={faArrowDown} />
  const arrowLeft = <FontAwesomeIcon icon={faArrowLeft} />
  
  const [popup, setPopup] = useState(null) 
  
  return (
  <> 
  
  <div className ="relative">
    <div className ="flex absolute h-screen w-full">
      <img className="w-[100%] h-screen object-cover object-[50%]
      absolute scale-90 transform transition-transform duration-700 
      md:w-[100%] md:h-[900px] md:object-cover md:object-[52%_9%] md:scale-86
      xl:w-[1280px] xl:h-[100%] xl:scale-90 xl:left-30 xl:object-cover xl:object-[50%_40%]
      2xl:h-[900px] 2xl:w-[80%] 2xl:left-45 2xl:top-7"
      src="Book pages.jpg" alt="bild på dator"/>
      </div>
      
      <div className ="flex flex-col items-center sm:items-start">
        <div className ="bg-gray-200 absolute w-[90%] h-62 border-2 mt-25
        sm:w-70 sm:h-120 sm:ml-8 
        md:w-75 md:h-120 md:mt-44 md:ml-15
        lg:w-80 lg:h-130 lg:mt-42 lg:ml-42
        xl:w-90 xl:h-140 xl:mt-20 xl:ml-94
        2xl:w-110 2xl:h-155 2xl:mt-30 2xl:ml-120 ">
          
          <div className ="flex flex-col text-center mt-2 gap-4">
          <p className ="font-bold text-xs m-1
          sm:text-base
          md:text-lg 
          xl:text-xl"> 
          Click on the buttons below to get to know me better
          </p>
           
           <p className ="animate-bounce text-center
           sm:text-xl 
           md:text-3xl">
            {arrow}
            </p>
            
            <div className ="flex flex-col items-center justify-center gap-2
            sm:gap-3
            xl:gap-4 xl:text-xl
            2xl:gap-5">
              
              <button 
              className ="border-2 w-40 text-xs p-1 bg-white hover:cursor-pointer hover:bg-gray-300
              sm:w-50 sm:h-10 sm:text-sm
              md:w-50 md:text-base md:h-15
              lg:text-xl lg:w-60
              xl:w-75 xl:h-15 
              2xl:w-80 2xl:text-2xl" 
              onClick = {() =>setPopup("school")}> Education {school} 
              </button> 
              
              <button 
              className ="border-2 w-40 text-xs p-1 bg-white hover:cursor-pointer hover:bg-gray-300
              sm:w-50 sm:h-10 sm:text-sm 
              md:w-50 md:text-base md:h-15
              lg:text-xl lg:w-60
              xl:w-75 xl:h-15 
              2xl:w-80 2xl:text-2xl" 
              onClick = {() => setPopup ('work')}> Work Experience {work} 
              </button>
              
              <button 
              className ="border-2 w-40 text-xs p-1 bg-white hover:cursor-pointer hover:bg-gray-300
              sm:w-50 sm:h-10 sm:text-sm
              md:w-50 md:text-base md:h-15
              lg:text-xl lg:w-60
              xl:w-75 xl:h-15
              2xl:w-80 2xl:text-2xl" 
               onClick = {() => setPopup ('aboutMe')}> About me {me} 
              </button>
               
              <button 
              className ="border-2 w-40 text-xs p-1 bg-white hover:cursor-pointer hover:bg-gray-300
              sm:w-50 sm:h-10 sm:text-sm
              md:w-50 md:text-base md:h-15
              lg:text-xl lg:w-60
              xl:w-75 xl:h-15
              2xl:w-80 2xl:text-2xl" 
               onClick = {() => setPopup ('other')}> Language & reference {rest} 
               </button>
            </div>
          </div>
          </div>
        
        <div> 
         <ContactForm/>
         </div>
       </div>

         <div className ="text-3xl absolute mt-155 ml-41
         sm:mt-165 sm:ml-76 
         md:mt-170 md:ml-90
         lg:mt-173 lg:ml-123
         xl:mt-165 xl:ml-186
         2xl:mt-200 2xl:ml-230 2xl:text-5xl
         ">
          <button onClick ={goBack} className ="animate-bounce hover:cursor-pointer">
            {arrowLeft}
          </button>
        </div>
        
        <Popup show = {popup ==="school"} onClose={() => setPopup(null)}>
          <School/>
          </Popup>
          
          <Popup show = {popup === "work"} onClose = {() => setPopup(null)}>
            <Work/>
            </Popup>
            
            <Popup show = {popup === "aboutMe"} onClose = {() => setPopup(null)}>
              <AboutMe/>
              </Popup>
              
              <Popup show = {popup === "other"} onClose = {() => setPopup(null)}>
                <Other/>
                </Popup>
                </div>
              </>
            )
          }

export default Buttons