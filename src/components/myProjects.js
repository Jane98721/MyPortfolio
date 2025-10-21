const MyProjects = () => {
  
  return ( 
  <>
  <div className='bg-neutral-100 h-130 mt-10'>
    <h1 className ="font-bold text-2xl text-center mt-2 mb-3 pt-5">
      My projects
      </h1>
      
      <div className ="w-149 h-70
      2xl:ml-160 xl:ml-110
      lg:ml-55 md:ml-20">
        
        <img src ="portal-projekt.png" alt="bild på portal projekt" 
        className="2xl:w-full xl:w-full 
        lg:w-full md:w-full
        sm:w-full
        w-80 h-70">
        </img>
        
        <p className ="font-bold"> Portal </p>
        
        <p className ="2xl:w-full xl:w-full
        lg:w-full md:w-full
        sm:w-full
        w-85">
          The frontend is developed with React and styled using Tailwind CSS, while
          the backend is implemented with Express - Node.js
          </p>
          
          <p className ="font-bold mt-3">Links to Github</p>
          <p className ="hover:cursor-pointer hover:text-lg"><a 
          href ="https://github.com/Jane98721/Portal-frontend.git">You can view the 
          frontend code here
          </a></p>
          <p className ="hover:cursor-pointer hover:text-lg"><a 
          href ="https://github.com/Jane98721/Portal-backend.git">You can view the backend 
          code here.
          </a></p>
          </div>
        </div>
      </>
    )
  }
 
export default MyProjects;