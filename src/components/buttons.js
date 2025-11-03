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
      md:w-[100%] md:h-[900px] md:object-cover md:scale-75
      xl:w-[1280px] xl:h-[790px] xl:scale-85 xl:left-30 xl:object-cover xl:object-[50%_40%]
      2xl:h-[925px] 2xl:w-[80%] 2xl:left-45 2xl:top-6"
      src="Book pages.jpg" alt="bild på dator"/>
      </div>
  
      <div className ="flex flex-col items-center sm:items-start">
        <div className ="bg-gray-200 absolute w-[90%] h-62 border-2 mt-25
        sm:w-65 sm:h-95 sm:ml-14 sm:mt-28 
        md:w-70 md:h-110 md:mt-50 md:ml-25
        lg:w-70 lg:h-110 lg:mt-54 lg:ml-53
        xl:w-90 xl:h-130 xl:mt-28 xl:ml-98
        2xl:w-100 2xl:h-145 2xl:mt-40 2xl:ml-129 ">
          
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
         sm:mt-125 sm:ml-76 
         md:mt-165 md:ml-92
         lg:mt-165 lg:ml-124
         xl:mt-165 xl:ml-186
         2xl:mt-190 2xl:ml-230 2xl:text-5xl
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