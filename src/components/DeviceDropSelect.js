import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import Par3 from '../routes/Devices/3Par';
import { Link } from 'react-router-dom';
import { DeviceItems } from '../routes/Devices/DeviceItems';

function DeviceDropSelect() {

    const [optionValue, setOptionValue] = useState("");
    const handleSelect = (e) => {
        // console.log(e.target.value);
        setOptionValue(e);
    };


    return (
        <div className='container'>
            {/* <div className='row g-1'> */}
            <div class="row">
                <div class="col-md-3 width-20">
                <h3>Add New Device</h3>
                </div>
                <div class="col-md-8">
                <DropdownButton variant="success" id="dropdown-menu-align-right" onSelect={handleSelect} title="New (+)">
                    {DeviceItems.map((item, index) => { 
                        return (
                        <Dropdown.Item key={index} as={Link} to={item.link}>{item.title}</Dropdown.Item>
                    )})}
                </DropdownButton>
                </div>             
            </div>

        </div>
    )
}

export default DeviceDropSelect
