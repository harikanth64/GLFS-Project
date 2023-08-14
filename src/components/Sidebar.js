import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/js/dist/dropdown';
import './Sidebarmenu.css';

function Sidebar() {
    return (
        <div className='container-fluid'>
            <div className="row">
                <div className="bs-body-bg col-auto col-md-2 min-vh-100 d-flex justify-content-between flex-column">
                    <div>
                        <a href="" className="text-decoration-none text-dark d-none d-sm-inline d-flex align-itemcenter ms-3 mt-2">
                            <span className="ms-1 fs-4 d-none d-sm-inline">Brand</span>
                        </a>
                        <hr className='text-secondary d-none d-sm-block' />
                        <ul className="nav nav-pills flex-column ">
                            <li className="nav-item text-dark fs-4 my-1 py-2 py-sm-0"  >
                                <a href="#" className="nav-link text-dark activ6 fs-6" aria-current="page">
                                    <i className='bi bi-speedometer2'></i>
                                    <span className='ms-3 d-none d-sm-inline'>Dashboard</span>
                                </a>
                            </li>
                            <li className="nav-item text-dark fs-4 my-1 py-2 py-sm-0"  >
                                <a href="#" className="nav-link text-dark fs-6" aria-current="page">
                                    <i className='bi bi-hdd-rack'></i>
                                    <span className='ms-3 d-none d-sm-inline'>Devices</span>
                                </a>
                            </li>
                            <li className="nav-item text-dark fs-4 my-1 py-2 py-sm-0"  >
                                <a href="#" className="nav-link text-dark fs-6" aria-current="page">
                                    <i className='bi bi-question-square'></i>
                                    <span className='ms-3 d-none d-sm-inline'>Help</span>
                                </a>
                            </li>
                            <li className="nav-item text-dark fs-4 my-1 py-2 py-sm-0"  >
                                <a href="#" className="nav-link text-dark fs-6" aria-current="page">
                                    <i className='bi bi-tools'></i>
                                    <span className='ms-3 d-none d-sm-inline'>Test</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="dropdown open">
                        <a className="btn- btn-secondary text-decoration-none dropdown-toggle text-dark p-3" type="button" id="triggerId" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i className="bi bi-person-circle"></i>
                            <span className='ms-2 d-none d-sm-inline'>User</span>
                        </a>
                        <div className="dropdown-menu" aria-labelledby="triggerId">
                            <a className="dropdown-item" href="#">Profile</a>
                            <a className="dropdown-item" href="#">Sign Out</a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Sidebar
