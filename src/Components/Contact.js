import React from 'react';
import './Contact.css';

const pseudo = "Maxime Poitoux";
const picture = "https://avatars2.githubusercontent.com/u/61582576?s=460&u=4dbadc02b499ca80a63c446557fdf0fb92043922&v=4";
const connect = true;

function Contact() {
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


export default Contact;