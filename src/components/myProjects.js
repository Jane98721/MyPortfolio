const MyProjects = () => {

  return ( 
    <>
    <div className='bg-neutral-50 h-130 mt-10 border-b'>
        
        <h1 className ="font-bold text-2xl text-center mt-2 mb-2 pt-5">
          Mina projekt
        </h1>

        <div className ="w-149 h-70 ml-115">
          <img src ="portal-projekt.png" alt="bild på portal projekt" className="w-full h-70">
          </img>

          <p className ="font-bold"> Portal </p>

          <p>
            Kodat frontend med React. Stylat med tailwind CSS samt kodat backend med Node Express.
          </p>

          <p className ="font-bold mt-3">Länkar till Github</p>

          <p><a href ="https://github.com/Jane98721/Portal-frontend.git">Klicka här för att se Frontend koden</a></p>

          <p><a href ="https://github.com/Jane98721/Portal-backend.git">Klicka här för att se Backend koden</a></p>
         </div>
        </div>
      </>
   );
}
 
export default MyProjects;