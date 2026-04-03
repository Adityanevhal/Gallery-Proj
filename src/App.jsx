import React, { useEffect, useState } from 'react'
import axios from 'axios'
const App = () => {
  const [userData, setUserData] = useState([]);
  const getData =  async() => {
    const response = await axios.get
    ('https://picsum.photos/v2/list?page=11&limit=35');
    setUserData(response.data);
  }
  useEffect(function(){
  getData();
  })
 let printData = <h3>No User Available</h3>;
 if(userData.length > 0){
  printData = userData.map(function(elem,idx){
    return <div key={idx}>
      <a href={elem.url} target="_blank" >
      <div className='h-40 w-44 overflow-hidden bg-white rounded-xl'>
      <img className='h-full w-full object-cover' 
      src={elem.download_url} alt=" "/>
      </div>
      <h2 className='font-bold '>{elem.author}</h2></a>
    </div>
  });
}
  return (
    <div className='overflow-y-auto bg-black h-screen p-4 text-white'>
      {/* <button onClick={getData}
       className='bg-green-500 active:scale-95 
       mb-4 px-5 py-2 rounded text-white'>
        Get Data</button> */}
        <div className='flex flex-wrap p-5 gap-4'>
          {printData}
        </div>
        <div className='flex justify-center gap-6 items-center p-4'>
          <button className='bg-amber-400 text-black text-sm cursor-pointer active:scale-95 font-semibold px-4 py-2 rounded-xl'>Prev</button>
          <button className='bg-amber-400 text-black text-sm cursor-pointer active:scale-95 font-semibold px-4 py-2 rounded-xl'>Next</button>
        </div>
    </div>
    

  )
}

export default App