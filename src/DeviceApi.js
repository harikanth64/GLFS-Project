
export async function get3ParData() {
      const response = await fetch('http://localhost:5000/PAR3', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      });

      if(!response.ok) {
        throw { 
          message: "Failed to fetch 3PAR data",
          status: response.status
         }
      }
      return get3ParData = await response.json();
}

export async function getStoreOnceData() {
  const response = await fetch('http://localhost:5000/StoreOnce', {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  });

  if(!response.ok) throw Error('Please reload the app');
  return getStoreOnceData = await response.json();
}

export async function getMsaData() {
  const response = await fetch('http://localhost:5000/MSA2060', {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  });

  if(!response.ok) throw Error('Please reload the app');
  return getMsaData = await response.json();
}

export async function updateDevice(deviceFields) {
  const response = await fetch('http://localhost:5000/PAR3', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', },
    body: JSON.stringify(deviceFields),
  })
  const data = await response.json();

  if(!response.ok) {
    throw { 
      message: "Failed to fetch 3PAR data",
      status: response.status
     }
  }
  return data;
  
}