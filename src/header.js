function Header () {


  return (
    <>
    <div className="w-378 h-80 overflow-hidden relative">
    <img src ="picture.jpg" className ="w-full h-full object-cover object-[50%_25%] relative "></img>
   </div>
   <div className=" w-120 absolute top-49 bg-gray-100">
    <h1 className ="text-6xl text-center italic mt-5 text-shadow-lg"> Jane Lehtola</h1>

    <h2 className ="text-2xl text-center mt-3 italic ">Junior Frontend utvecklare</h2>
   </div>
    
   </>
  )
}

export default Header