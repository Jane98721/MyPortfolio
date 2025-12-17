import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHtml5 } from '@fortawesome/free-brands-svg-icons/faHtml5'
import { faCss } from '@fortawesome/free-brands-svg-icons/faCss'
import { faAngular, faReact } from '@fortawesome/free-brands-svg-icons'
import { faJs } from '@fortawesome/free-brands-svg-icons/faJs'
import { faNodeJs } from '@fortawesome/free-brands-svg-icons/faNodeJs'
import { faB } from '@fortawesome/free-solid-svg-icons/faB'
import { faA } from '@fortawesome/free-solid-svg-icons/faA'
import { faDatabase } from '@fortawesome/free-solid-svg-icons/faDatabase'
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub'
import MyProjects from './myProjects'
import GoToRightBtn from './goToRightBtn'
import GotoLeftBtn from './goToLeftBtn'

const HTML = <FontAwesomeIcon icon={faHtml5} />
const CSS = <FontAwesomeIcon icon={faCss} />
const REACT = <FontAwesomeIcon icon={faReact} />
const JS = <FontAwesomeIcon icon={faJs} />
const NODE = <FontAwesomeIcon icon={faNodeJs} />
const B = <FontAwesomeIcon icon={faB} />
const A = <FontAwesomeIcon icon={faA} />
const Database = <FontAwesomeIcon icon={faDatabase} />
const Github = <FontAwesomeIcon icon={faGithub} />
const Angular = <FontAwesomeIcon icon={faAngular} />


function MainInfo ({goToNext, goBack}) {
  
  return (
  <>
  
  <div className ="relative">
    <div className ="flex absolute h-screen w-full">
      <img className="w-[100%] h-screen object-cover object-[50%]
      absolute scale-90 transform transition-transform duration-700
      sm:w-[100%] sm:h-screen sm:object-cover sm:object-[50%]
      md:w-[100%] md:h-[900px] md:object-cover md:object-[] md:scale-80
      xl:w-[1280px] xl:h-[790px] xl:scale-83 xl:left-30 xl:object-cover xl:object-[50%_40%] 
      2xl:h-[925px] 2xl:w-[80%] 2xl:left-45 2xl:top-7"
      src="Book pages.jpg" alt="bild på dator"/>
      </div>
      
      <div className="flex flex-col items-center sm:items-start">
      <div className ="bg-gray-200 absolute w-[90%]
       mt-8 border-2
       sm:w-60 sm:h-95 sm:top-20 sm:ml-16 sm:border-1
       md:w-70 md:h-110 md:left-7 md:mt-29
       lg:w-75 lg:h-110 lg:left-35 lg:mt-28
       xl:w-90 xl:h-130 xl:left-82 xl:mt-10
       2xl:w-100 2xl:h-150 2xl:mt-21 2xl:left-113" >
        
        <div className ="flex flex-col items-center gap-3">
           <img src ="Bild.jpg" alt="Bild på mig" 
           className ="w-10 mt-2 rounded-2xl
           sm:w-17
           md:w-22
           lg:w-26 
           xl:w-29 
           2xl:w-[170px]"
           />
           
           <div className ="flex flex-col text-center gap-3">
            <p className='text-xs font-bold 
            md:text-base
            xl:text-lg xl:m-1'>
              Junior Frontend Developer and ready for my first assignment!
              </p>
              
              <p className ="text-xs m-1
              md:text-sm
              xl:text-base">
                To maintain and further develop my skills. I build my own projects in my spare time.
                I am now eager to apply my knowledge and contribute to real-world projects
                </p>
                
                <p className ="font-bold text-xs
                md:text-sm
                xl:text-lg">
                  I have knowledge in
                  </p>
                  
                  <ul className ="grid grid-cols-3 text-xs mb-2 
                  md:text-sm
                  xl:text-base">
                    
                    <li>HTML{HTML}</li>
                    <li>CSS{CSS}</li>
                    <li>React{REACT}</li>
                    <li>Javascript{JS}</li>
                    <li>Node.js{NODE}</li>
                    <li>{A}/{B}-testing</li>
                    <li>Tailwind CSS</li>
                    <li>MongoDB{Database}</li>
                    <li>Github{Github}</li>
                    <li>Angular{Angular}</li>
                    <li>.NET</li>
                    </ul>
                  </div>
                </div>
              </div>
                <div>
                  <MyProjects/>
                  </div>
             </div>

              <div>
                <GoToRightBtn goToNext={goToNext}/>
                </div>

                <div>
                  <GotoLeftBtn goBack={goBack}/>
                </div>
             
               
              </div> 
             </>
            )
          }

export default MainInfo