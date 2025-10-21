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
    <div className ="h-133 bg-neutral-100 mt-10">
      <div 
      className ="2xl:ml-140 2xl:w-120 
      xl:ml-100 xl:w-120 
      lg:ml-50 lg:w-120
      md:ml-9 md:w-120
      sm:w-120
      w-90 ml-5 pt-23">
        
        <p>
          Junior Frontend Developer and ready for my first assignment!
          </p>
          
          <p 
          className ="mt-5">
            To maintain and further develop my skills. I build my own projects in my spare time.
             I am now eager to apply my knowledge and contribute to real-world projects
             </p>
             
             <p className ="mt-10 text-center font-bold">
              I have knowledge in
              </p>
              
              <ul className ="grid grid-cols-5 
              2xl:grid-cols-3 2xl:text-xl
              xl:grid-cols-3 xl:text-xl
              lg:grid-cols-3 lg:text-xl
              md:grid-cols-3 md:text-xl
              sm:grid-cols-3 sm:text-xl
              mt-6">
                
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
                
                <img src ="Bild.jpg" alt="Bild på mig" className ="border-3 absolute 
                2xl:w-60 2xl:top-147 2xl:left-275
                xl:w-60 xl:top-150 xl:left-225
                lg:w-60 lg:top-148 lg:left-174
                md:w-60 md:top-146 md:left-130
                sm:w-19 sm:top-230 sm:left-55
                w-15 top-133 left-78"
                >

                </img>
              </div>
            </div> 
          </div>
        </>
      )
    }

export default MainInfo