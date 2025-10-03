function Popup ({ show, onClose, children}) { //show är en boolean, true eller false. Om popupen ska synas

  if(!show) return null

  return (

    <div className ="fixed inset-0 bg-black bg-opacity-90 text-center flex justify-center z-50 ">
      <div className ="relative w-200 h-180 border-2 z-10 bg-white overflow-auto ">

        {children}

       <button className ="border-2 text-lg w-20 mt-10 mb-5 hover:cursor-pointer" onClick= {onClose} > Stäng </button>

       </div>
     </div>

  )
}

export default Popup