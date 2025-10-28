import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Header = ({goToNext}) => {

const arrow = <FontAwesomeIcon icon={faArrowRight} />

return (
  <>
  
  <div className ="relative">
    <img className="w-full h-screen object-cover object-[53%]
    xl:h-screen xl:object-cover xl:object-[20%_84%]
    2xl:h-screen 2xl:object-cover 2xl:object-[20%_86%]" 
    src="book.jpg" alt="bild på bok"/>
    
    <div>
      <p className ="absolute top-120 left-18 font-bold rotate-5
      md:left-66 md:top-115 md:text-2xl
      lg:left-100
      xl:left-148 xl:top-100 xl:text-3xl 
      2xl:left-183 2xl:top-80 2xl:text-5xl">
        Welcome to my portfolio
        </p>
        
        <p className ="text-xs top-130 left-10 font-bold rotate-5 overflow-hidden absolute 
        animate-typing animate-blink-caret tracking-wider whitespace-nowrap
        md:left-64 md:text-sm
        lg:left-97
        xl:left-137 xl:top-120 xl:text-xl 
        2xl:left-188 2xl:top-110 2xl:text-2xl"> 
        Jane Lehtola - Junior Frontend Developer 
        </p> 
        
        <button onClick = {goToNext}
        className ="hover:cursor-pointer animate-bounce absolute text-4xl
        top-140 left-35
        md:left-95 md:top-145
        lg:left-130
        xl:left-180 xl:top-140 xl:text-5xl
        2xl:left-240 2xl:top-140">
          {arrow}
        </button>
        </div>
      </div>
    </>
  )
}
 
export default Header;