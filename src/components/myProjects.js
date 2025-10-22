const MyProjects = () => {
  
  return ( 
  <>
  <div className='bg-neutral-100 h-150 mt-10'>
    <h1 className ="font-bold text-2xl text-center mt-2 mb-3 pt-5">
      My projects
      </h1>
      
      <div className ="flex flex-col items-center justify-center">
        
        <img src ="portal-projekt.png" alt="bild på portal projekt" 
        className="w-160 h-80">
        </img>
        
        <p className ="font-bold text-center mt-2"> Portal </p>
        
        <p className ="w-80">
          The frontend is developed with React and styled using Tailwind CSS, while
          the backend is implemented with Express - Node.js
          </p>
          
          <p className ="font-bold mt-3 mb-3">Links to Github</p>
          <p className ="hover:cursor-pointer hover:text-lg mb-2"><a 
          href ="https://github.com/Jane98721/Portal-frontend.git">
          </a>You can view the 
          frontend code here</p>
          <p className ="hover:cursor-pointer hover:text-lg"><a 
          href ="https://github.com/Jane98721/Portal-backend.git">
          </a>You can view the backend 
          code here.</p>
          </div>
        </div>
      </>
    )
  }
 
export default MyProjects;