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
      <p className ="text-2xl text-center pt-4"> 
        Click on the buttons below to get to know me better
        </p>
        
        <p className ="animate-bounce text-center mt-9">{arrow}</p>
        
        <div className ="grid text-2xl mt-10">
          
          <button 
          className ="border-2 w-43 h-10 rounded-2xl hover:cursor-pointer hover:bg-gray-200
          2xl:ml-215
          xl:ml-167
          lg:ml-108
          md:ml-76
          sm:ml-59
          ml-33 mb-2" 
          onClick = {() =>setPopup("school")}> Education {school} 
          </button> 
          
          <button 
          className ="border-2 w-66 h-10 rounded-2xl hover:cursor-pointer hover:bg-gray-200
          2xl:ml-203
          xl:ml-155
          lg:ml-96
          md:ml-64
          sm:ml-47
          ml-20 mb-2" 
           onClick = {() => setPopup ('work')}> Work Experience {work} 
           </button>
           
           <button 
           className ="border-2 w-60 h-10 rounded-2xl hover:cursor-pointer hover:bg-gray-200
           2xl:ml-206
           xl:ml-159
           lg:ml-100
           md:ml-67
           sm:ml-50
           ml-23 mb-2" 
            onClick = {() => setPopup ('aboutMe')}> About me {me} 
            </button>
            
            <button 
            className ="border-2 w-75 h-10 rounded-2xl hover:cursor-pointer hover:bg-gray-200
            2xl:ml-197
            xl:ml-150
            lg:ml-91
            md:ml-59
            sm:ml-42
            ml-15" 
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