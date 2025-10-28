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
import MyProjects from './myProjects'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'

const HTML = <FontAwesomeIcon icon={faHtml5} />
const CSS = <FontAwesomeIcon icon={faCss} />
const REACT = <FontAwesomeIcon icon={faReact} />
const JS = <FontAwesomeIcon icon={faJs} />
const NODE = <FontAwesomeIcon icon={faNodeJs} />
const B = <FontAwesomeIcon icon={faB} />
const A = <FontAwesomeIcon icon={faA} />
const Database = <FontAwesomeIcon icon={faDatabase} />
const Github = <FontAwesomeIcon icon={faGithub} />
const arrowRight = <FontAwesomeIcon icon={faArrowRight} />
const arrowLeft = <FontAwesomeIcon icon={faArrowLeft} />


function MainInfo ({goBack, goToNext}) {
  
  return (
  <>
  
  <div className ="relative">
    <div className ="flex absolute h-screen w-full">
      <img className="w-[500px] h-[800px] object-cover object-[20%_43%]
      absolute scale-90 transform transition-transform duration-700 
      md:w-[100%] md:h-[900px] md:object-cover md:object-[52%_9%] md:scale-86
      xl:w-[1280px] xl:h-[100%] xl:scale-90 xl:left-30 xl:object-cover xl:object-[50%_40%]
      2xl:h-[900px] 2xl:w-[80%] 2xl:left-45 2xl:top-7"
      src="Book pages.jpg" alt="bild på dator"/>
      </div>
      
      <div className ="flex flex-col bg-gray-200 absolute w-72 h-73
       mt-32 ml-4 border-2
       md:w-75 md:h-113 md:left-11 md:mt-44
       lg:w-88 lg:h-125 lg:left-33 lg:mt-40
       xl:w-95 xl:h-140 xl:left-87 xl:mt-20
       2xl:w-115 2xl:h-160 2xl:mt-34 2xl:left-115" >
        
        <div className ="flex flex-col items-center">
           <img src ="Bild.jpg" alt="Bild på mig" 
           className ="w-12 mt-2 rounded-2xl
           md:w-22
           lg:w-26 
           xl:w-[130px] 
           2xl:w-[170px]"
           />
           
           <div className ="text-center">
            <p className='text-xs font-bold mt-2  
            md:text-base
            xl:text-lg'>
              Junior Frontend Developer and ready for my first assignment!
              </p>
              
              <p className ="text-xs mt-2 
              md:text-sm md:mt-5
              lg:mt-4 
              xl:text-base">
                To maintain and further develop my skills. I build my own projects in my spare time.
                I am now eager to apply my knowledge and contribute to real-world projects
                </p>
                
                <p className ="font-bold text-xs mt-1
                md:text-sm md:mt-4
                xl:text-lg">
                  I have knowledge in
                  </p>
                  
                  <ul className ="grid grid-cols-3 text-xs mt-2 
                  md:text-sm md:mt-3
                  xl:mt-5 xl:text-base">
                    
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
                
                <div className ="absolute mt-72
                md:ml-87 md:mt-0
                lg:ml-96 lg:mt-0
                xl:ml-108 xl:mt-0
                2xl:ml-123 2xl:mt-0">
                  <MyProjects/>
                </div>
              </div>
              
              <button className ="hover:cursor-pointer animate-bounce absolute top-[720px] 
              left-[230px] text-xl
              md:left-[540px] md:top-[670px] md:text-3xl
              lg:left-[700px] lg:top-[680px] 
              xl:left-[960px] xl:top-[660px]
              2xl:left-[1170px] 2xl:top-[805px] 2xl:text-5xl" 
              onClick ={goToNext}>
                {arrowRight}
                </button>
                
                <button onClick ={goBack} className ="text-xl animate-bounce hover:cursor-pointer 
                absolute top-[720px] left-[70px]
                md:left-[170px] md:top-[670px] md:text-3xl
                lg:left-[290px] lg:top-[680px] 
                xl:left-[540px] xl:top-[660px]
                2xl:left-[690px] 2xl:top-[805px] 2xl:text-5xl">
                  {arrowLeft}
                </button>
              </div> 
             </>
            )
          }

export default MainInfo