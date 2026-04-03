import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from './components/Card'
import Buttons from './components/Buttons';
const App = () => {
  const [userData, setUserData] = useState([]);
  const getData =  async() => {
    const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=21`);
    setUserData(response.data);
  }
  const [index, setIndex] = useState(1)

  useEffect(function(){
  getData();
  },[index])

 let printData = <h3 className='text-gray-400 font-semibold 
 text-xs absolute top-1/2 left-1/2 
 -translate-x-1/2 -translate-y-1/2'>Loading...</h3>;

 if(userData.length > 0){
  printData = userData.map(function(elem,idx){
    return (
    <div key={idx}>
     <Card elem={elem} />
    </div>);
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
        <div >
          <Buttons index={index} setIndex={setIndex} setUserData={setUserData} />
        </div>
    </div>
    

  )
}

export default App