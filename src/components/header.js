function Header () {
  
  return (
  <>
  <header>
    <div className="h-[25vh] relative ">
      <img className ="w-full h-full object-cover object-top-left" src ="vit blomma.jpg" alt ="vit blomma"></img>
        </div>

        <p className ="text-lg 
        animate-typing animate-blink-caret tracking-wider whitespace-nowrap
        overflow-hidden absolute mt-3
        sm:ml-28 sm:text-2xl
        md:text-3xl md:ml-50
        lg:text-3xl lg:ml-75
        xl:text-4xl 
        2xl:text-5xl 2xl:ml-105"> 
        Jane Lehtola - Junior Frontend Developer</p>
        </header>
      </>
    )
  }

export default Header