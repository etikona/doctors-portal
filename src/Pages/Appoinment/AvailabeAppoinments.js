import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import Services from '../Appoinment/Services';
import BookingModal from './BookingModal';
const AvailabeAppoinments = ({date}) => {
    const [services, setServices] = useState([]);
    const [treatment , setTreatment] = useState(null);
  
    useEffect( () => {
     fetch('http://localhost:5000/slots')
     .then(res => res.json())
     .then(data => setServices(data))
    }, [])
    return (
        <div>
          <h4 className='text-xl text-secondary text-center'> Available Appionments on  {format(date, 'PP')}</h4>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 '>
             {
               services.map(service => <Services
                 key={service._id}
                  service={service}
                  setTreatment={setTreatment}
                  ></Services>)
             }
          </div>
          {treatment && <BookingModal
           date={date}
           treatment={treatment}
           setTreatment={setTreatment}
           ></BookingModal>}
        </div>
    );
};

export default AvailabeAppoinments;