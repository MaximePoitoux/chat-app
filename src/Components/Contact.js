import React from 'react';
import './Contact.css';
import PropTypes from 'prop-types';


function Contact(props) {
  return (
    <div className="Contact">
        <img class="avatar" src={picture} alt="logo"/>
        <div>
            <div class="nom_status">
                <h4 class="name">{pseudo}</h4>
                    <div class="status">
                        <div class="status-online"></div>
                        <div class="status-text">{connect ? "Online" : "Offline"}</div>
                    </div>
            </div>
        </div>
    </div>
    );
}


QuoteCard.propTypes = {
    characterFirstName: PropTypes.string.isRequired,
    characterLastName: PropTypes.string.isRequired,
  };
export default Contact;