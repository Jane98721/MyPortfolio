import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft} from '@fortawesome/free-solid-svg-icons'
 
const GotoLeftBtn = ({goBack}) => {

const arrowLeft = <FontAwesomeIcon icon={faArrowLeft} />


  return ( 

     <button onClick ={goBack} className ="text-xl animate-bounce hover:cursor-pointer 
                absolute top-[655px] left-[90px]
                sm:left-[140px] sm:top-[670px] 
                md:left-[170px] md:top-[670px] md:text-3xl
                lg:left-[290px] lg:top-[680px] 
                xl:left-[540px] xl:top-[660px]
                2xl:left-[690px] 2xl:top-[805px] 2xl:text-5xl">
                  {arrowLeft}
                </button>
   );
 }
  
 export default GotoLeftBtn;
               