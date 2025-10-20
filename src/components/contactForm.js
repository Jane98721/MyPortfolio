function ContactForm () {
  
  return (
  
  <div className ="w-full h-140 mt-5 bg-neutral-100 border-b">
    <div>
      <h1 className ="text-3xl text-center mt-12 mb-3 pt-5">Contact me</h1>
      <form className ="grid grid-cols-1 
      2xl:w-200  2xl:ml-135
      xl:w-200 xl:ml-90
      lg:w-200 lg:ml-40">
        
        <input 
        type ="text"
        placeholder="Name"
        required
        className ="border-2 rounded-2xl h-10 mb-3 mt-10 pl-2 bg-white" 
        />
        
        <input 
        type ="text"
        placeholder="E-mail"
        required
        className ="border-2 rounded-2xl h-10 mb-3 mt-3 pl-2 bg-white" 
        />
        
        <textarea 
        type ="text"
        placeholder="Message"
        required
        className ="border-2 rounded-2xl h-50 mb-3 mt-3 pl-2 bg-white" 
        />
        
        <button
        className ="border-4 rounded-2xl hover:cursor-pointer hover:bg-gray-100 
        mb-10 mt-3 w-40 h-10 text-xl bg-white">
          Send
          </button>
        </form>
      </div>
    </div>
  )
}

export default ContactForm