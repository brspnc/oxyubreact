import React from 'react';
import { Breadcrumb, BreadcrumbItem, Card, CardBody } from 'reactstrap';
import { Link } from 'react-router-dom';

const Directory = (props) => {
       
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Directory</BreadcrumbItem>
                    </Breadcrumb>
                    <h2>Directory</h2>
                </div>
            </div>
        </div>

            
    
    )
}

export default Directory;