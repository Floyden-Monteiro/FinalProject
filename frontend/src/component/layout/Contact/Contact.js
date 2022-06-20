import React from 'react';
import './Contact.css';
import { Button } from '@material-ui/core';

const Contact = () => {
  return (
    // <div className="contactContainer">
    //   <a className="mailBtn" href="mailto:mymailforabhi@gmail.com">
    //     <Button>Contact: mymailforabhi@gmail.com</Button>
    //   </a>
    // </div>

    <div class='background'>
      <div class='container'>
        <div class='screen'>
          <div class='screen-body'>
            <div class='screen-body-item left'>
              <div class='app-title'>
                <span>CONTACT</span>
                <span>US</span>
              </div>
              <div class='app-contact'>CONTACT INFO : +62 81 314 928 595</div>
            </div>
            <div class='screen-body-item'>
              <div class='app-form'>
                <div class='app-form-group'>
                  <input class='app-form-control' placeholder='NAME' />
                </div>
                <div class='app-form-group'>
                  <input class='app-form-control' placeholder='EMAIL' />
                </div>
                <div class='app-form-group'>
                  <input class='app-form-control' placeholder='CONTACT NO' />
                </div>
                <div class='app-form-group message'>
                  <input class='app-form-control' placeholder='MESSAGE' />
                </div>
                <div class='app-form-group buttons'>
                  <button class='app-form-button'>CANCEL</button>
                  <a
                    class='app-form-button'
                    href='mailto:mymailforabhi@gmail.com'
                    style={{
                      textDecoration: 'none',
                      fontFamily: 'Montserrat',
                      fontSize: '14px',
                    }}
                  >
                    SEND
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
