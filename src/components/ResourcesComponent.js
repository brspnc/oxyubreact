import React, { useState } from 'react';
import { Breadcrumb, BreadcrumbItem, Card, CardBody, TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import classnames from 'classnames';

const Resources = (props) => {
    const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
        if(activeTab !== tab) setActiveTab(tab);
    }
    
    return (
        <div className="container">
            <div className="rox">
                <div className="col">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Resources</BreadcrumbItem>
                    </Breadcrumb>
                    <h2>Resources</h2>
                </div>
            </div>

            <div className="row row-content">
                <div className=" col-sm-4">
                    <Nav tabs>
                        <NavItem>
                            <NavLink onClick={() => {toggle('1');}} className={classnames({active: activeTab === '1'})}>
                            Financial Aid
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink onClick={() => {toggle('2');}} className={classnames({active: activeTab === '2'})}>
                            College Application
                            </NavLink>
                        </NavItem>
                    </Nav>
                    <TabContent activeTab={activeTab}>
                        <TabPane tabId="1"> 
                            <Card>
                                <CardBody>
                                    <a target="_blank" href="https://studentaid.gov/h/apply-for-aid/fafsa">Federal Student Aid (FAFSA) Home page</a><br />
                                    <a traget="_blnak" href="https://fafsa.ed.gov/spa/fafsa/#/LOGIN?locale=en_US">FAFSA Login</a>
                                </CardBody>
                            </Card>
                        </TabPane>
                        <TabPane tabId="2">
                        <Card>
                            <CardBody>
                                <a target="_blank" href="https://www.commonapp.org/">Common Application</a><br/>
                                <p>The Common Application is accepted by more than 900 schools.</p>
                            </CardBody>
                        </Card>
                        </TabPane>
                    </TabContent>
                </div>
            </div>
        </div>
    
    )
}

export default Resources;