function Popup ({ show, onClose, children}) { 
  
  if(!show) return null
  
  return (
  
  <div className ="fixed inset-0 bg-black text-center flex justify-center z-50 h-200
  xl:h-235">
    <div className ="relative w-150 max-h-[80vh] border-2 z-10 bg-white overflow-y-auto ">
      {children}
      <button className ="border-2 text-lg w-25 mb-3 mt-10 hover:cursor-pointer" 
      onClick= {onClose} > Stäng </button>
      </div>
    </div>
  )
}

export default Popup