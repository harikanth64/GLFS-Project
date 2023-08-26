import React, {useState} from 'react'


export async function fetchDevices(newItem) {
  const res = await fetch("http://localhost:5000/devices/1",{ 
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newItem)
    }
  )
  const data = await res.json()

  if (!res.ok) {
    throw {
      message: data.message,
      statusText: res.statusText,
      status: res.status
    }
  }

  // console.log(data.device)
  return data;
}

export async function getCount() {


  const fetchUserData = () => {
    fetch("http://localhost:5000/devices")
      .then(response => {
        return response.json()
      })
      
  }

  return getCount;

}

export async function get3ParData() {
      const response = await fetch('http://localhost:5000/PAR3', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      });

      if(!response.ok) throw Error('Please reload the app');
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