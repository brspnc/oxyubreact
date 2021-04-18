import React from 'react';
import { Link } from 'react-router-dom';

function Footer(props) {
    return (
        <footer className="site-footer">
            <div className="container">
                <div className="row">
                    <div className="col-4 col-sm-2">
                        <h5>Links</h5>
                        <ul className="list-unstyled">
                            <li><Link to='/home'>Home</Link></li>
                            <li><Link to='/messages'>Messages</Link></li>
                            <li><Link to='/calendar'>Calendar</Link></li>
                            <li><Link to='/directory'>Directory</Link></li>
                            <li><Link to='/resources'>Resources</Link></li>  
                        </ul>
                    </div>
                    <div className="col-6 col-sm-3 text-center">
                        <h5>Social</h5>
                        <a className="btn btn-social-icon btn-instagram" href="http://instagram.com/"><i className="fa fa-instagram" /></a>{' '}
                        <a className="btn btn-social-icon btn-facebook" href="http://www.facebook.com/"><i className="fa fa-facebook" /></a>{' '}
                        <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i className="fa fa-twitter" /></a>{' '}
                        <a className="btn btn-social-icon btn-google" href="https://www.youtube.com/channel/UCQ7qdC--7OB8Lyo0eX9BpiQ/videos"><i className="fa fa-youtube" /></a> 
                    </div>
                    <div className="col-sm-4 text-center">
                    <a role="button" className="btn btn-link" href="tel:+13232592744"><i className="fa fa-phone" /> 1-323-259-2744</a><br />
                    <a role="button" className="btn btn-link" href="mailto:upwardbound@oxy.edu"><i className="fa fa-envelope-o" /> upwardbound@oxy.edu</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;