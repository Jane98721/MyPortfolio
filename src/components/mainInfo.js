import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHtml5 } from '@fortawesome/free-brands-svg-icons/faHtml5'
import { faCss } from '@fortawesome/free-brands-svg-icons/faCss'
import { faReact } from '@fortawesome/free-brands-svg-icons'
import { faJs } from '@fortawesome/free-brands-svg-icons/faJs'
import { faNodeJs } from '@fortawesome/free-brands-svg-icons/faNodeJs'
import { faB } from '@fortawesome/free-solid-svg-icons/faB'
import { faA } from '@fortawesome/free-solid-svg-icons/faA'
import { faDatabase } from '@fortawesome/free-solid-svg-icons/faDatabase'
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub'

const HTML = <FontAwesomeIcon icon={faHtml5} />
const CSS = <FontAwesomeIcon icon={faCss} />
const REACT = <FontAwesomeIcon icon={faReact} />
const JS = <FontAwesomeIcon icon={faJs} />
const NODE = <FontAwesomeIcon icon={faNodeJs} />
const B = <FontAwesomeIcon icon={faB} />
const A = <FontAwesomeIcon icon={faA} />
const Database = <FontAwesomeIcon icon={faDatabase} />
const Github = <FontAwesomeIcon icon={faGithub} />


function MainInfo () {

  return (
      <>
      
      <div> 

        <div className ="h-120 bg-neutral-50  mt-10 border-b">

        <p className ="w-120 mt-3 ml-110 pt-12">
          Junior Frontend Developer som letar efter sitt första uppdrag!
        </p>

        <p className ="w-120 mt-3 ml-110">
        För att hålla mina kunskaper skarpa samt för att fortsätta växa, bygger jag egna
        projekt på fritiden. Nu är jag intresserad att få använda mina kunskaper i riktiga projekt.
        </p>
                 
       <p className ="w-120 mt-10 text-center font-bold ml-110">
        Jag har kunskaper inom 
        </p>

        <ul className ="grid grid-cols-3 mt-6 w-120 ml-110 text-xl">
          <li>HTML{HTML}</li>
          <li>CSS{CSS}</li>
          <li>React{REACT}</li>
          <li>Javascript{JS}</li>
          <li>Node.js{NODE}</li>
          <li>{A}/{B}-testing</li>
          <li>Tailwind CSS</li>
          <li>MongoDB{Database}</li>
          <li>Github{Github}</li>
        </ul>

        <img src ="Bild.jpg" alt="Bild på mig" className ="w-60 border-3 absolute top-132 left-250"></img>

      </div> 
   </div>
   </>
  )
}

export default MainInfo