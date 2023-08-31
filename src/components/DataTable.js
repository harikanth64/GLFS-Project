import React, { useEffect, useState } from 'react';

function DataTable(props) {

  const [ column, setColumn ] = useState([]);
  const [ records, setRecords ] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`http://localhost:5001/${props.device}`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      });
      return await response.json();
    }
    fetchData()
      .then(data => {
        console.log(data);
        setColumn(Object.keys(data[0]))
        setRecords(data)
      }
      )
  },[]);







  return (
    <div className='box'>
      <h3>{props.device} device list here</h3>
      <table class="table">
        <thead>
          <tr>
            {column.map((col, index) => (
              <th scope="col" key={index}>{col.toUpperCase()}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {
            records.map((record, index) => (
                <tr scope="row" key={index}>
                  <td>{record.id}</td>
                  <td>{record.type}</td>
                  <td>{record.ip}</td>
                  <td>{record.user}</td>
                  <td>{record.pwd}</td>
                  <td>{record.model}</td>
                  <td>{record.serial}</td>
                </tr>
            ))
          }
        </tbody>
      </table>

    </div>
  )
}

export default DataTable
