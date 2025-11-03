import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const GoToRightBtn = ({goToNext}) => {  
  
const arrowRight = <FontAwesomeIcon icon={faArrowRight} />

return ( 

<button className ="hover:cursor-pointer animate-bounce absolute top-[655px] 
left-[260px] text-xl
sm:left-[460px] sm:top-[670px] 
md:left-[540px] md:top-[670px] md:text-3xl
lg:left-[700px] lg:top-[680px] 
xl:left-[960px] xl:top-[660px]
2xl:left-[1170px] 2xl:top-[805px] 2xl:text-5xl"  
onClick ={goToNext}>
  {arrowRight}
  </button>
  
);
}
   
  export default GoToRightBtn;

  
 