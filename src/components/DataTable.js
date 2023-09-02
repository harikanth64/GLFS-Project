import { getValue } from '@testing-library/user-event/dist/utils';
import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { Cell } from '../routes/Par3/Cell';

function DataTable(props) {

  const [column, setColumn] = useState([]);
  const [records, setRecords] = useState([]);
  const [isHovering, setIsHovering] = useState(false);
  const [editRow, setEditRow] = useState({ ...records, isActive: false });
  const [value, setValue] = useState('');
  const [values, setValues] = useState([{ type: "PAR3", ip: "", user: "", pwd: "", model: "", serial: "" }]);

  const handleMouseOver = () => { setIsHovering(true) };
  const handleMouseOut = () => { setIsHovering(false) };

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
  }, []);





  const getValue = () => {
    return records();
  }

  const handleOnClickEdit = (record, index) => {
    console.log(record, index);

  }



  return (
    <div className='box' onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
      <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{ height: '50px', background: '#f8f8fa' }} >
        <div class="container-fluid">
          <h5>{props.device} device list</h5>
          {isHovering && (
            <span className="navbar-text">
              <Link className="nav-link" to="#">Edit | Select</Link>
            </span>)
          }
        </div>
      </nav>
      <table class="table table-hover">
        <thead>
          <tr>
            {column.map((col, index) => (
              <th scope="col" key={index}>{col.toUpperCase()}</th>
            ))}
            <th>Action</th>
          </tr>
        </thead>
        <tbody className='table-group-divider'>
          {records.map((record, index) => (
            <tr scope="row" key={record.id}  >
            <td>{record.id}</td>
              <td>{record.type}</td>
              <td>{record.ip}</td>
              <td>{record.user}</td>
              <td>{record.pwd}</td>
              <td>{record.model}</td>
              <td>{record.serial}</td>
              <td><Link className="nav-link" to="#" onClick={() => handleOnClickEdit(record, index)}>Edit</Link></td>
                </tr>
              )
          )}

        </tbody>
      </table>

    </div>
  )
}

export default DataTable
