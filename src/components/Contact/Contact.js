import React, { useEffect, useRef } from 'react';
import scrollReveal from 'scrollreveal';


const Contact = () => {

    const modalRef = useRef(null);

        useEffect(() => {
          if (modalRef.current)
            scrollReveal().reveal(modalRef.current, {
              reset: true,
              delay: 100,
              origin: 'right',
              distance: '50px',
            });
        }, [])

    return (
        <div>
            <div className='wave-contact'>
            <form ref={modalRef} className='form-contact'>
                <p>Contactez-moi !</p>
                <input type="text" name="firstname" id="firstname" placeholder='Prénom' required/>
                <input type="text" name="lastname" id="lastname" placeholder='Nom' required/>
                <input type="email" name="email" id="email" placeholder='Email' required/>
                <input type="tel" name="tel" id="tel" pattern="[0-9]{2} [0-9]{2} [0-9]{2} [0-9]{2} [0-9]{2}" placeholder='Tel.' required/>
                <textarea name="message" id="message" cols="30" rows="10" placeholder='Message' required></textarea>
                <button>Envoyer</button>
            </form>

            </div>
            
        </div>
    );
};

export default Contact;