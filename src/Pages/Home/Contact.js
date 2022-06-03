import React from 'react';
import contact from '../../assets/images/appointment.png'

const Contact = () => {
    return (
        <div style={{
            background: `url(${contact})`
        }} 
        className="grid justify-items-center"
        >
            <div className=''>
                <h4 className='text-primary mt-5 ml-10'>Contact us</h4>
                <h2 className='text-white font-bold text-xl mt-2'>Stay connected to us</h2>
            </div>
            <div>
                <form>
                    <input type="text" placeholder="Email Address" className="input mt-4 w-full max-w-xs" />
                    <br />
                    <input type="text" placeholder="subject" className="input mt-3 w-full max-w-xs"  />
                    <br />
                    <input type="text" placeholder="your message" className="input mt-3 input-bordered input-lg w-full max-w-xs" />
                    <button className="btn btn-primary uppercase my-5 text-white font-bold font-sans bg-gradient-to-r from-secondary to-primary ...">submit</button>
                </form>
            </div>
        </div>
    );
};

export default Contact;