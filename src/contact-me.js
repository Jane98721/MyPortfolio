function ContactMe () {

  return (
    <div className ="border-t-4 w-378 h-140 mt-5 bg-gray-100">

      <div>

        <h1 className ="text-3xl text-center mt-12 mb-3">Kontakta mig</h1>
        <form className ="grid grid-cols-1">

          <input type ="text"
          placeholder="Namn"
          required
          className ="border-2 rounded-2xl h-10 mb-3 mt-10 pl-2 bg-white" />

          <input type ="text"
          placeholder="E-mail"
          required
          className ="border-2 rounded-2xl h-10 mb-3 mt-3 pl-2 bg-white" />

          <textarea type ="text"
          placeholder="Skriv ditt meddelande"
          required
          className ="border-2 rounded-2xl w-378 h-50 mb-3 mt-3 pl-2 bg-white" />

          <button
          className ="border-4 rounded-2xl hover:cursor-pointer mb-10 mt-3 w-40 h-10 text-xl ml-170 bg-white"
          >Skicka</button>


      </form>
      </div>
    </div>
  )
}

export default ContactMe