import { useState } from "react"
import School from "./education"
import Popup from './popup'
import Work from "./workExperience"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons/faGraduationCap"
import { faBriefcase } from "@fortawesome/free-solid-svg-icons/faBriefcase"
import { faLanguage } from "@fortawesome/free-solid-svg-icons/faLanguage"
import Other from "./languageAndReference"

function Buttons () {

  const school = <FontAwesomeIcon icon={faGraduationCap} />
  const work = <FontAwesomeIcon icon={faBriefcase} />
  const rest = <FontAwesomeIcon icon={faLanguage} />

  const [popup, setPopup] = useState(null) 

    return (
      <> 
      <div className ="bg-neutral-50 mt-10 border-b">

      <p className ="text-2xl text-center pt-4"> 
        Klicka på knapparna för att läsa mer om mina utbildningar, arbetslivserfarenhet och annat
      </p>

      <div className ="grid grid-cols-3 w-378 h-40 mt-5">

      <button className ="text-2xl border-2 w-43 h-10 ml-60 mt-12 rounded-2xl hover:cursor-pointer" 
       onClick = {() =>setPopup("school")}> Utbildning {school} 
      </button> 

      <button className ="text-2xl border-2 w-66 h-10 ml-50 mt-12 rounded-2xl hover:cursor-pointer" 
      onClick = {() => setPopup ('work')}> Arbetslivserfarenhet {work} 
      </button>

      <button className ="text-2xl border-2 w-35 h-10 ml-63 mt-12 rounded-2xl hover:cursor-pointer" 
      onClick = {() => setPopup ('other')}> Övrigt {rest} 
      </button>
  </div>

    <Popup show = {popup ==="school"} onClose={() => setPopup(null)}>
      <School/>
    </Popup>

    <Popup show = {popup === "work"} onClose = {() => setPopup(null)}>
      <Work/>
    </Popup>

    <Popup show = {popup === "other"} onClose = {() => setPopup(null)}>
      <Other/>
    </Popup>
    </div>
    </>
  )
}

export default Buttons