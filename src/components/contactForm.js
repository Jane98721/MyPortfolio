import { useRef } from 'react'
import emailjs from "emailjs-com"

function ContactForm () {
  const form = useRef()
  
  const sendEmail = (e) => {
    e.preventDefault()
    
    emailjs.sendForm (
      process.env.REACT_APP_EMAILJS_SERVICE_ID,
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      form.current,
      process.env.REACT_APP_EMAILJS_PUBLIC_KEY
    )

    .then(
      () => {
        alert ("Thank you for your message")
        form.current.reset()
      },
      (error) => {
        alert ("Something went wrong")
        console.log(error)
      }
    )
  }

  return (
    
    <div className ="bg-gray-200 h-66 w-71
    md:w-75 md:h-120
    lg:w-80 lg:h-130
    xl:w-90 xl:h-140
    2xl:w-110 2xl:h-155">
      
      <div className ="text-center font-bold">
        <h1 className ="mb-2 pt-2 text-xs
        md:text-lg
        lg:text-xl lg:pt-4
        xl:text-2xl">
          Contact me
          </h1>
          
          <h2 className ="text-xs
          md:text-lg
          xl:mb-3
          2xl:text-xl">
            To contact me please fill out this form 
            </h2>
            
            <form ref = {form} onSubmit={sendEmail} className ="flex flex-col items-center gap-2
            md:gap-3
            lg:gap-4
            xl:gap-5
            2xl:gap-6">
              <input 
              type ="text"
              placeholder="Name"
              name ="name"
              required
              className ="border-2 w-65 h-6 mt-2 pl-2 bg-white
              md:w-68 md:h-10
              lg:w-70 
              xl:w-75 xl:h-10
              2xl:w-105"
              />
              
              <input 
              type ="email"
              placeholder ="E-mail"
              name ="email"
              required
              className ="border-2 w-65 h-6 pl-2 bg-white
              md:w-68 md:h-10
              lg:w-70 
              xl:w-75 xl:h-10
              2xl:w-105" 
              />
              
              <input 
              type ="text"
              placeholder ="Subject"
              name ="title"
              required
              className ="border-2 w-65 h-6 pl-2 bg-white
              md:w-68 md:h-10
              lg:w-70 
              xl:w-75 xl:h-10
              2xl:w-105"
              />
              
              <textarea 
              type ="text"
              placeholder ="Message"
              name ="message"
              required
              className ="border-2 w-65 h-10 pl-2 pt-2 bg-white
              md:w-68 md:h-28
              lg:w-70 lg:h-25 
              xl:h-40 xl:w-75
              2xl:w-105 2xl:h-50" 
              />
              
              <button
              className ="border-2 text-xs hover:cursor-pointer mt-2 hover:bg-gray-300 h-8 w-15 bg-white
              md:w-25 md:h-10 md:text-base md:mt-3
              lg:w-25 lg:text-lg   
              xl:text-xl xl:w-38 xl:mt-2 xl:h-9
              2xl:text-2xl 2xl:w-41 2xl:h-12 2xl:mt-2">
                Send
                </button>
              </form>
            </div>
          </div>
      )
    }

export default ContactForm