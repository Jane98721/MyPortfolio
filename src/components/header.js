import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Header = ({goToNext}) => {

const arrow = <FontAwesomeIcon icon={faArrowRight} />

return (
  <>
  
  <div className ="relative">
    <img className="w-full h-screen object-cover object-[53%]
    lg:h-screen lg:object-cover lg:object-[20%_99%]
    xl:h-screen xl:object-cover xl:object-[20%_84%]
    2xl:h-screen 2xl:object-cover 2xl:object-[20%_86%]" 
    src="book.jpg" alt="bild på bok"/>
    
    <div>
      <p className ="absolute top-120 left-18 font-bold rotate-5
      md:left-75 md:top-110 md:text-lg
      lg:left-104 lg:top-110 lg:text-2xl
      xl:left-158 xl:top-60 xl:text-3xl 
      2xl:left-200 2xl:top-80 2xl:text-4xl">
        Welcome to my portfolio
        </p>
        
        <p className ="text-xs top-130 left-10 font-bold rotate-5 overflow-hidden absolute 
        animate-typing animate-blink-caret tracking-wider whitespace-nowrap
        md:left-68 md:top-125
        lg:left-101 lg:top-125 lg:text-sm
        xl:left-147 xl:top-85 xl:text-xl 
        2xl:left-185 2xl:top-110 2xl:text-2xl"> 
        Jane Lehtola - Junior Frontend Developer 
        </p> 
        
        <button onClick = {goToNext}
        className ="hover:cursor-pointer animate-bounce absolute text-4xl
        top-140 left-35
        md:left-92 md:top-140
        lg:left-130 lg:top-140
        xl:left-190 xl:top-110 xl:text-5xl
        2xl:left-240 2xl:top-140 2xl:text-6xl">
          {arrow}
        </button>
        </div>
      </div>
    </>
  )
}
 
export default Header;