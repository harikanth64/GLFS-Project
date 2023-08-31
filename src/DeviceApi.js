import { useFetcher } from 'react-router-dom';


export async function get3ParData() {
      const response = await fetch('http://localhost:5001/PAR3', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      });

      if(!response.ok) {
        throw { 
          message: "Failed to fetch 3PAR data",
          status: response.status
         }
      }
      const get3ParData = await response.json();
      return get3ParData;
}


// Fetch data from all device to list in talbe 
// export async function getData(device) {
//   const response = await fetch(`http://localhost:5001/${device}`, {
//     method: 'GET',
//     headers: { 'Content-Type': 'application/json' },
//   });

//   if(!response.ok) {
//     throw { 
//       message: "Failed to fetch 3PAR data",
//       status: response.status
//      }
//   }
//   const data = await response.json();
//   return data;
// }


export async function getStoreOnceData() {
  const response = await fetch('http://localhost:5001/StoreOnce', {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  });

  if(!response.ok) throw Error('Please reload the app');
  const getStoreOnceData = await response.json();
  return getStoreOnceData;
}

export async function getMsaData() {
  const response = await fetch('http://localhost:5001/MSA2060', {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  });

  if(!response.ok) throw Error('Please reload the app');
  const getMsaData = await response.json();
  return getMsaData
}

export async function updateDevice(deviceFields) {
  const response = await fetch('http://localhost:5001/PAR3', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', },
    body: JSON.stringify(deviceFields),
  })
  const data = await response.json();

  if(!response.ok) {
    throw { 
      message: "Failed to upload 3PAR data",
      status: response.status
     }
  }
  return data;
  
}