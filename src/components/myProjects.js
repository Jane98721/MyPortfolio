const MyProjects = () => {
  
  return ( 
  <>
  <div className='bg-gray-200 w-72 h-72 border-2
  md:w-75 md:h-113
  lg:w-88 lg:h-125
  xl:w-95 xl:h-139
  2xl:w-115 2xl:h-160'>
    
    <h1 className ="font-bold text-center mt-2 mb-3
    md:mt-4 md:text-lg 
    xl:pt-5 xl:text-2xl">
      My projects
      </h1>
      
      <div className ="flex flex-col items-center justify-center">
        <img src ="portal-projekt.png" alt="bild på portal projekt" 
         className=" w-43 h-20
          md:w-60 md:h-35 
          lg:w-65 lg:h-40
          xl:w-80 xl:h-50"/>
          
          <p className ="font-bold text-center mt-2 text-xs
          md:text-base
          lg:mt-5
          xl:text-lg
          2xl:text-xl 2xl:mt-10">
            Portal 
            </p>
            
            <p className ="text-xs ml-2 mr-2
            md:text-sm md:ml-3
            xl:text-base xl:text-center
            2xl:text-lg">
              The frontend is developed with React and styled using Tailwind CSS, while
              the backend is implemented with Express - Node.js
              </p>
              
              <p className ="font-bold mt-3 mb-3 text-xs
              md:text-base
              xl:text-lg
              2xl:text-xl">Links to Github</p>
              
              <p className ="text-xs hover:cursor-pointer hover:text-lg mb-2
              md:text-sm
              lg:text-base
              2xl:text-lg 2xl:hover:text-2xl">
                You can view the frontend code 
                <a href ="https://github.com/Jane98721/Portal-frontend.git">
                <span className ="underline"> here</span></a>
                </p>
                
                <p className ="text-xs hover:cursor-pointer hover:text-lg
                md:text-sm
                xl:text-base
                2xl:text-lg 2xl:hover:text-2xl">
                  You can view the backend code 
                  <a href ="https://github.com/Jane98721/Portal-backend.git">
                  <span className ="underline" > here</span></a>
                  </p>
          </div>
        </div>
      </>
    )
  }
 
export default MyProjects;