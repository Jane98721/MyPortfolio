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
  <div className ="bg-neutral-100 w-full h-140 mt-20 "> 
    
    <div className ="flex flex-col items-center justify-center
    xl:grid xl:grid-rows-1">
      
      <div>
        <img src ="Bild.jpg" alt="Bild på mig" 
        className ="border-3 w-30 mt-2
        lg:w-36 lg:mr-10 lg:mt-3
        xl:ml-40"
        />
        </div>

      <div className ="flex flex-col items-center justify-center">
        
        <div className ="pt-1
          lg:w-120">
          <p className='text-center text-lg w-80 ml-1'>
          Junior Frontend Developer and ready for my first assignment!
          </p>
          
          <p className ="text-center mt-5 text-sm w-80 ml-1">
            To maintain and further develop my skills. I build my own projects in my spare time.
             I am now eager to apply my knowledge and contribute to real-world projects
             </p>
             
             <p className ="text-center font-bold mt-5 text-lg">
              I have knowledge in
              </p>
              </div>

              <ul className ="grid grid-cols-3 mt-5 ml-4 text-lg w-85">
                
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
            </div> 
          </div>
        </>
      )
    }

export default MainInfo