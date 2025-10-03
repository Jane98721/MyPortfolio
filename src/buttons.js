import School from "./school"
import { useState } from "react"
import Popup from './popup'
import Work from "./work"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons/faGraduationCap"
import { faBriefcase } from "@fortawesome/free-solid-svg-icons/faBriefcase"
import { faLanguage } from "@fortawesome/free-solid-svg-icons/faLanguage"
import Other from "./other"



function Buttons () {

  const school = <FontAwesomeIcon icon={faGraduationCap} />
  const work = <FontAwesomeIcon icon={faBriefcase} />
  const rest = <FontAwesomeIcon icon={faLanguage} />

  const [popup, setPopup] = useState(null) //värdet är null i början


  return (

    //När man klickar på button utbildning körs setPopup("school") då sätts state till school.
    //Popup visas bara om popup ==="school". Show blir true.

    <>
    <div className ="bg-gray-100 absolute h-100 grid w-190 ml-187 border-l">
    <button className ="text-2xl border-2 w-43 h-10 mt-10 ml-60 rounded-2xl hover:cursor-pointer" onClick = {() =>setPopup("school")}> Utbildning {school} </button> 
    <button className ="text-2xl border-2 w-66 h-10 ml-50 rounded-2xl hover:cursor-pointer" onClick = {() => setPopup ('work')}> Arbetslivserfarenhet {work} </button>
    <button className ="text-2xl border-2 w-35 h-10 ml-63 rounded-2xl hover:cursor-pointer" onClick = {() => setPopup ('other')}> Övrigt {rest} </button>
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
    
    </>
  )
}

export default Buttons