import React from 'react';
import { Navbar } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVideo } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    return ( 
        <Navbar className="d-flex justify-content-center pl-3 rounded">
            <Navbar.Brand className="my-3" href="#home">
                <FontAwesomeIcon icon={faVideo} className="mr-5" style={{fontSize: "50px" }} />
            <img
                alt=""
                src="https://fontmeme.com/permalink/200401/a19d5a6ea4c46098371144876bb5ebe6.png"
                width="90"
                height="50"
                className="d-inline-block align-top"
            />{' '} 
                <FontAwesomeIcon icon={faVideo} className="ml-5" style={{fontSize: "50px", color:"black", transform:"scaleX(-1)" }} />
            </Navbar.Brand>
        </Navbar>
    );
}
 
export default Header;