import React from 'react';
import './Contact.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMars, faVenus} from '@fortawesome/free-solid-svg-icons';

function Contact(contact) {
  const {firstName, lastName, phone, gender} = contact.contact;

  return (
      <div className="info-about-contact">
          <div className="name-and-gender">
          <span className="name"><b>{firstName} {lastName}</b></span>
          <span>
            {gender === "male" ? <FontAwesomeIcon icon={faMars} /> : null}
            {gender === "female" ? <FontAwesomeIcon icon={faVenus} /> : null}
          </span>
        </div>
        <span className="phone">{phone}</span>
      </div>
  ); 
}

export default Contact;