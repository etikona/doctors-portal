import React from 'react';

const services = ({service, setTreatment}) => {
    const {name, slots} = service;
    return (
        <div className="card w-96 bg-base-150 shadow-md"><font></font>
        <div className="card-body items-center text-center"><font></font>
          <h2 className="card-title text-primary">{name}</h2><font></font>
          <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} Available </p>
          <p>{slots.length
                  ? 
                  <span>{slots[0]}</span>
                  :
              <span className='text-red-600'> There is no service available now.</span>
          }</p>
          {/* <button 
          className="btn btn-primary uppercase text-white font-bold font-sans bg-gradient-to-r from-secondary to-primary ...">BOOK APPIONMENT</button> */}
          <label 
          disabled={slots.lenght === 0 }
          onClick={() => setTreatment (service)}
          htmlFor="booking-modal" className="btn modal-button text-white font-bold font-sans bg-gradient-to-r from-secondary to-primary">BOOK APPIONMENT</label>
        </div><font></font>
      </div>
    );
};

export default services;