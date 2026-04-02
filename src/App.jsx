import React, { useState } from 'react'
import axios from 'axios'
const App = () => {
  const [userData, setUserData] = useState([]);
  const getData =  async() => {
    const response = await axios.get
    ('https://picsum.photos/v2/list?page=2&limit=15');
    setUserData(response.data);
  }
 let printData = "No User Available";
 if(userData.length > 0){
  printData = userData.map(function(elem,idx){
    return <div>
      <img src={elem.download_url} alt={elem.author} />
    </div>
  })}
  return (
    <div className='overflow-y-auto bg-black h-screen p-4 text-white'>
      <button onClick={getData}
       className='bg-green-500 active:scale-95 
       mb-4 px-5 py-2 rounded text-white'>
        Get Data</button>
        <div>
          {printData}
        </div>
    </div>
    
  )
}

export default App