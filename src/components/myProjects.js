const MyProjects = () => {
  
  return ( 
  <>
  <div className="flex flex-col items-center">
  <div className='absolute bg-gray-200 w-[90%] border-1 mt-78
  sm:w-60 sm:h-95 sm:border-1 sm:mt-28 sm:ml-235                
  md:w-70 md:h-110 md:ml-276 md:mt-49
  lg:w-75 lg:h-110 lg:ml-345 lg:mt-48
  xl:w-94 xl:h-130 xl:ml-485 xl:mt-30
  2xl:w-100 2xl:h-150 2xl:ml-595 2xl:mt-41'>
    
  <h1 className ="font-bold text-center mt-1 mb-2
    md:mt-4 md:text-lg 
    xl:pt-5 xl:text-2xl">
      My projects
      </h1>
      
      <div className ="flex flex-col items-center justify-center gap-5">
        <img src ="projekt.png" alt="bild på portal projekt" 
         className="w-38
          sm:w-53 sm:h-32
          md:w-60 md:h-35 
          lg:w-65 lg:h-40
          xl:w-80 xl:h-50"/>
        
        <div className ="flex flex-col text-center gap-1">
          <p className ="font-bold text-xs
          md:text-base
          xl:text-lg
          2xl:text-xl">
            Portal-book project 
            </p>
            
            <p className ="text-xs m-1
            md:m-1
            lg:text-sm 
            xl:text-base
            2xl:text-lg">
              The frontend is developed with Angular and styled using Bootstrap & CSS while
              the backend is implemented with .NET
              </p>
              
              <p className ="font-bold text-xs
              md:text-base
              xl:text-lg
              2xl:text-xl">Links to Github</p>
              
              <p className ="text-xs hover:cursor-pointer hover:text-lg
              lg:text-base
              2xl:text-lg 2xl:hover:text-2xl">
                You can view the frontend code 
                <a href ="https://github.com/Jane98721/books-angular.git">
                <span className ="underline"> here</span></a>
                </p>
                
                <p className ="text-xs hover:cursor-pointer hover:text-lg mb-3
                lg:text-base
                2xl:text-lg 2xl:hover:text-2xl">
                  You can view the backend code 
                  <a href ="https://github.com/Jane98721/Api-users.git">
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