import React, { Component } from 'react';
import { Nav, Navbar, Jumbotron, NavbarToggler, Collapse, NavItem,
         Button, Modal, ModalHeader, ModalBody, Label } from 'reactstrap'
import { Control, LocalForm, Errors } from 'react-redux-form';
import { NavLink } from 'react-router-dom';

class Header extends Component {
    constructor(props) {
        super(props);

        this.state={
            isNavOpen:false,
            isModalOpen:false
        };

        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
    }
        toggleNav() {
            this.setState({
                isNavOpen: !this.state.isNavOpen
            });
        }

        toggleModal() {
            this.setState({
                isModalOpen: !this.state.isModalOpen
            });
        }

    render() {
        return (
            <React.Fragment>
                <Jumbotron fluid>
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <h1>OXY</h1>
                                <h2>Upward Bound</h2>
                            </div>
                        </div>
                    </div>
                </Jumbotron>

                <Navbar dark fixed expand="md">
                    <div className="container">
                        <NavbarToggler onClick={this.toggleNav} />  
                        <Collapse isOpen={this.state.isNavOpen} navbar >
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className="nav-link" to="/home">
                                        <i className="fa fa-home fa-lg" /> Home
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/messages">
                                        <i className="fa fa-comment fa-lg" /> Messages
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/calendar">
                                        <i className="fa fa-calendar fa-lg" /> Calendar
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/directory">
                                        <i className="fa fa-address-card fa-lg" /> Directory
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/resources">
                                        <i className="fa fa-globe fa-lg" /> Resources
                                    </NavLink>
                                </NavItem>
                            </Nav>
                            <span className="navbar-text ml-auto">
                                <Button outline onClick={this.toggleModal}>
                                    <i className="fa fa-sgin-in fa-lg" />Login
                                </Button>
                            </span>
                        </Collapse>
                    </div>
                </Navbar>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
                    <ModalBody>
                        <LocalForm onSubmit={this.handleLogin}>
                            <div className="form-group">
                                <Label htmlFor="username">Username: </Label>
                                <Control.text id="username" name="username" 
                                    model=".username"  />
                            </div>
                            <div className="form-group">
                                <Label htmlFor="password">Password: </Label>
                                <Control.text type="password" id="password" name="password" 
                                    model=".password"/>
                            </div>
                            <div className="form-group">
                                <Label check>
                                 Remember me:  
                                <Control.checkbox name="remember" model=".remember"/>
                                </Label>
                            </div>
                            <Button type="submit" value="submit" color="dark">Login</Button>
                        </LocalForm>
                    </ModalBody>
                </Modal>
            </React.Fragment>
        );
    }
}

export default Header;