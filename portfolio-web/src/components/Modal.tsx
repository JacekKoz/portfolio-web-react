import React from 'react'

type propTypes = {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<propTypes> = ({open, onClose, children}) => {
  return (
    <div className={`fixed inset-0 flex justify-center items-center transition-colors ${open ? "visible bg-black/20" : "invisible"}`} onClick={onClose}>
      <div className={`bg-bg_color_2 rounded-lg shadow p-6 transition-all max-w-md ${open ? "scale-100 opacity-100" : "scale-110 opacity-0"}`} onClick={(e) => e.stopPropagation()}>
        <button className='absolute -top-5 right-2 bg-main_accent inline-block my-7 py-1 px-3 rounded-full text-bg_color_2 font-extrabold hover:drop-shadow-custom-glow hover:scale-110 transition-all duration-500 ease-in-out cursor-pointer text-xl shadow-custom-around shadow-main_accent' onClick={onClose}>
          X
        </button>
        {children}
      </div>
    </div>
  )
}

export default Modal