import React from 'react'

const Buttons = (props) => {
  return (
    <div className='flex justify-center gap-6 items-center p-4'>
        <button style={{ opacity: props.index === 1 ? 0.5 : 1 }} className=
          'bg-amber-400 text-black text-sm cursor-pointer active:scale-95 font-semibold px-4 py-2 rounded-xl'
           onClick={() => {
            if(props.index > 1)
              props.setIndex(props.index - 1)
              props.setUserData([])

            }}
            > Prev</button>
            <h4>Page {props.index}
            </h4>
          <button className='bg-amber-400 text-black text-sm
           cursor-pointer active:scale-95 font-semibold px-4 py-2 rounded-xl'
           onClick={() =>{
             props.setIndex(props.index + 1)
             props.setUserData([]) }}
          
           > Next</button>
    </div>
  )
}

export default Buttons