const MyProjects = () => {
  
  return ( 
  <>
  <div className="flex flex-col items-center">
  <div className='absolute bg-gray-200 w-[90%] border-1 mt-83
  sm:w-70 sm:h-120 sm:border-1 sm:mt-40 sm:ml-83                
  md:w-75 md:h-120 md:ml-281 md:mt-43
  lg:w-85 lg:h-120 lg:ml-350 lg:mt-43
  xl:w-95 xl:h-139 xl:ml-490 xl:mt-21
  2xl:w-115 2xl:h-160 2xl:ml-605 2xl:mt-34'>
    
  <h1 className ="font-bold text-center mt-2 mb-3
    md:mt-4 md:text-lg 
    xl:pt-5 xl:text-2xl">
      My projects
      </h1>
      
      <div className ="flex flex-col items-center justify-center gap-5">
        <img src ="portal-projekt.png" alt="bild på portal projekt" 
         className="w-38
          sm:w-60 sm:h-35
          md:w-60 md:h-35 
          lg:w-65 lg:h-40
          xl:w-80 xl:h-50"/>
        
        <div className ="flex flex-col text-center gap-2">
          <p className ="font-bold text-xs
          sm:text-sm
          md:text-base
          xl:text-lg
          2xl:text-xl">
            Portal 
            </p>
            
            <p className ="text-xs m-1
            sm:text-sm
            md:m-1 
            xl:text-base
            2xl:text-lg">
              The frontend is developed with React and styled using Tailwind CSS, while
              the backend is implemented with Express - Node.js
              </p>
              
              <p className ="font-bold text-xs
              sm:text-sm
              md:text-base
              xl:text-lg
              2xl:text-xl">Links to Github</p>
              
              <p className ="text-xs hover:cursor-pointer hover:text-lg
              sm:text-sm
              lg:text-base
              2xl:text-lg 2xl:hover:text-2xl">
                You can view the frontend code 
                <a href ="https://github.com/Jane98721/Portal-frontend.git">
                <span className ="underline"> here</span></a>
                </p>
                
                <p className ="text-xs hover:cursor-pointer hover:text-lg mb-3
                sm:text-sm
                lg:text-base
                2xl:text-lg 2xl:hover:text-2xl">
                  You can view the backend code 
                  <a href ="https://github.com/Jane98721/Portal-backend.git">
                  <span className ="underline" > here</span></a>
                  </p>
          </div>
        </div>
      </div>
    </div>
      </>
    )
  }
 
export default MyProjects;