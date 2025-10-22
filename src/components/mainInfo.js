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
  <div className ="bg-neutral-100 w-full h-120 mt-20 "> 
    
    <div className ="flex flex-row items-center justify-center">
      
      <div className ="h-80 w-130 mt-10 pt-12">
        
        <p className='text-center text-lg'>
          Junior Frontend Developer and ready for my first assignment!
          </p>
          
          <p className ="text-center mt-5 text-md">
            To maintain and further develop my skills. I build my own projects in my spare time.
             I am now eager to apply my knowledge and contribute to real-world projects
             </p>
             
             <p className ="text-center font-bold mt-4">
              I have knowledge in
              </p>
              
              <ul className ="grid grid-cols-3 mt-6 ml-10">
                
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
                
          </div>

              <div>
                 <img src ="Bild.jpg" alt="Bild på mig" 
                 className ="border-3 w-40 mt-7 ml-15"
                ></img>
                </div>
            </div> 
          </div>
        </>
      )
    }

export default MainInfo