import React from 'react';
import './Contact.css';
import PropTypes from 'prop-types';


function Contact(props) {
  return (
    <div className="Contact">
        <img className="avatar" src={props.picture} alt="logo"></img>
        <div>
            <h4 className="name">{props.pseudo}</h4>
            <div className="status">
                    <div className={props.connect ? "status-online" : "status-offline"}></div>
                    <div className="status-text">{props.connect ? 'online' : 'offline'}</div>
            </div>
        </div>
    </div>
    );
}



Contact.propTypes = {
    picture: PropTypes.string,
    pseudo: PropTypes.string,
    connect: PropTypes.bool,
  };
  
export default Contact;