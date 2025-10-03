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
import Buttons from './buttons'

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

    <div className='relative '>

      <Buttons/>

      <div className ="h-100 w-187 relative bg-gray-100">

         <img src ="Bild.jpg" className ="w-50 mt-12 ml-4 border-3 absolute"></img>

        <p className ="w-120 mt-3 ml-60 pt-12">Junior Frontend Developer som letar efter sitt första uppdrag!
          </p>

        <p className ="w-120 mt-3 ml-60">För att hålla mina kunskaper skarpa samt för att fortsätta växa, bygger jag egna
        projekt på fritiden. Nu är jag intresserad att få använda mina kunskaper i riktiga projekt.</p>
                 
       <p className ="w-120 mt-10 text-center font-bold ml-60">Jag har kunskaper inom 
        </p>
       
       <div className ="grid grid-cols-3 mt-6 w-120 ml-60 text-xl">
        <span> HTML{HTML} </span>
        <span>CSS{CSS}</span> 
        <span>React{REACT}</span>
        <span>Javascript{JS}</span>
        <span>Node.js{NODE}</span>
        <span>{A}/{B}-testing</span>
        <span>Tailwind CSS</span>
        <span>MongoDB{Database}</span>
        <span>Github{Github}</span>
        </div>
        
        </div>
     

    </div>


  )
}

export default MainInfo