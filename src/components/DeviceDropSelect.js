import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import Par3 from '../routes/Devices/3Par';
import { Link } from 'react-router-dom';

function DeviceDropSelect() {

    const [optionValue, setOptionValue] = useState("");
    const handleSelect = (e) => {
        console.log(e);
        setOptionValue(e);
    };


    return (
        <div>
            <div>
                <h3>Add New Device</h3>
            </div>

            <div>
                <DropdownButton variant="success" id="dropdown-menu-align-right" onSelect={handleSelect} title="New +">
                    <Dropdown.Item eventKey="#/action-1" as={Link} to="3par">3PAR</Dropdown.Item>
                    <Dropdown.Item eventKey="#/action-2" as={Link} to="hyper-v">Hyper-V</Dropdown.Item>
                    <Dropdown.Item eventKey="#/action-3" as={Link} to="vmware">VMWare</Dropdown.Item>
                    {/* <Dropdown.Divider /> */}
                </DropdownButton>
                {/* <p>You selected {optionValue}</p> */}

            </div>

        </div>
    )
}

export default DeviceDropSelect
