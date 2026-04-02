import React from 'react'

const App = () => {
  const getData = () => {
    console.log('Data is being fetched');
  }

  return (
    <div className='bg-black h-screen p-4 text-white'>
      <button onClick={getData}
       className='bg-green-500 active:scale-95 
       mb-4 px-5 py-2 rounded text-white'>
        Get Data</button>
    </div>
  )
}

export default App