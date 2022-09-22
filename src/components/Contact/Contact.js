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
        <section>
            <div className='wave-contact'>
                <form
                    ref={modalRef}
                    className='form-contact'
                    name='contact'
                    method='POST'
                    data-netlify='true'
                >
                    <label>Contactez-moi !</label>
                    <input type="hidden" name="form-name" value='contact' />
                    <input type="text" name="firstname" id="firstname" placeholder='Prénom' required />
                    <input type="text" name="lastname" id="lastname" placeholder='Nom' required />
                    <input type="email" name="email" id="email" placeholder='Email' required />
                    <input type="tel" name="tel" id="tel" pattern="[0-9]{2}[0-9]{2}[0-9]{2}[0-9]{2}[0-9]{2}" placeholder='Tel : 0000000000' required />
                    <textarea name="message" id="message" cols="30" rows="10" placeholder='Message' required></textarea>
                    <button>Envoyer</button>
                </form>
            </div>
        </section>
    );
};

export default Contact;