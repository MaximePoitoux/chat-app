import React from 'react';
import './Contact.css';
import PropTypes from 'prop-types';
import { render } from '@testing-library/react';


class Contact extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        online: props.connect,
      }
   }

  render() {
    return (
      <div className="Contact">
          <img className="avatar" src={this.props.picture} alt="logo"></img>
          <div>
              <h4 className="name">{this.props.pseudo}</h4>
              <div className="status"
                onClick={event => {
                  const newOnline = !this.state.online;
                  this.setState({ online: newOnline });
                }}
              >     
                  <div className={this.state.online ? "status-online" : "status-offline"}></div>
                  <div className="status-text">{this.state.online ? 'online' : 'offline'}</div>
              </div>
          </div>
      </div>
      );
  }
}



Contact.propTypes = {
    picture: PropTypes.string,
    pseudo: PropTypes.string,
    connect: PropTypes.bool,
  };
  
export default Contact;