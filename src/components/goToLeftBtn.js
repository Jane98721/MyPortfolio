import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft} from '@fortawesome/free-solid-svg-icons'
 
const GotoLeftBtn = ({goBack}) => {

const arrowLeft = <FontAwesomeIcon icon={faArrowLeft} />


  return ( 

     <button onClick ={goBack} className ="text-xl animate-bounce hover:cursor-pointer 
                absolute top-[595px] left-[120px]
                sm:left-[170px] sm:top-[505px] 
                md:left-[210px] md:top-[650px] md:text-3xl
                lg:left-[330px] lg:top-[660px] 
                xl:left-[540px] xl:top-[660px]
                2xl:left-[690px] 2xl:top-[800px] 2xl:text-5xl">
                  {arrowLeft}
                </button>
   );
 }
  
 export default GotoLeftBtn;
               