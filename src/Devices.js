import React, {useState} from 'react'


export async function fetchDevices(newItem) {
  const res = await fetch("http://localhost:5000/par3",{ 
      method: "post",
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