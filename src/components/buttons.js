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

function Buttons () {
  const school = <FontAwesomeIcon icon={faGraduationCap} />
  const work = <FontAwesomeIcon icon={faBriefcase} />
  const rest = <FontAwesomeIcon icon={faLanguage} />
  const me = <FontAwesomeIcon icon = {faPersonDress}/>
  const arrow = <FontAwesomeIcon icon={faArrowDown} />
  
  const [popup, setPopup] = useState(null) 
  
  return (
  <> 
  <div className ="bg-neutral-100 mt-10 h-100">
    <div>
      <p className ="text-2xl text-center pt-4 font-bold"> 
        Click on the buttons below to get to know me better
        </p>
        
        <p className ="animate-bounce text-center mt-9">{arrow}</p>
        
        <div className ="flex flex-col items-center text-2xl mt-10">
          
          <button 
          className ="border-2 w-75 h-10 mb-4 hover:cursor-pointer hover:bg-gray-200" 
          onClick = {() =>setPopup("school")}> Education {school} 
          </button> 
          
          <button 
          className ="border-2 w-75 h-10 mb-4 hover:cursor-pointer hover:bg-gray-200" 
           onClick = {() => setPopup ('work')}> Work Experience {work} 
           </button>
           
           <button 
           className ="border-2 w-75 h-10 mb-4 hover:cursor-pointer hover:bg-gray-200" 
            onClick = {() => setPopup ('aboutMe')}> About me {me} 
            </button>
            
            <button 
            className ="border-2 w-75 h-10 hover:cursor-pointer hover:bg-gray-200" 
            onClick = {() => setPopup ('other')}> Language & reference {rest} 
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
                </div>
              </>
            )
        }

export default Buttons