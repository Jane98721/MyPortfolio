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
  
  <div className ="h-150 mt-5 bg-neutral-100 border-b">
    <div>
      <h1 className ="text-3xl text-center mt-12 mb-3 pt-5">Contact me</h1>
      <form ref = {form} onSubmit={sendEmail} className ="flex flex-col items-center">
        
        <input 
        type ="text"
        placeholder="Name"
        name ="name"
        required
        className ="border-2 w-94 h-10 mb-3 mt-10 pl-2 bg-white" 
        />
        
        <input 
        type ="email"
        placeholder ="E-mail"
        name ="email"
        required
        className ="border-2 w-94 h-10 mb-3 mt-3 pl-2 bg-white" 
        />

        <input 
        type ="text"
        placeholder ="Subject"
        name ="title"
        required
        className ="border-2 w-94 h-10 mb-3 mt-3 pl-2 bg-white" 
        />
        
        <textarea 
        type ="text"
        placeholder ="Message"
        name ="message"
        required
        className ="border-2 w-94 h-50 mb-3 mt-3 pl-2 pt-2 bg-white" 
        />
        
        <button
        className ="border-4 hover:cursor-pointer hover:bg-gray-100 
        mb-10 mt-3 w-40 h-10 text-xl bg-white">
          Send
          </button>
        </form>
      </div>
    </div>
  )
}

export default ContactForm