import React from 'react';
import doctor from '../../assets/images/doctor.png';
import appoinment from '../../assets/images/appointment.png'
const MakeAppoinment = () => {
    return (
        <section style={{
            background: `url(${appoinment})`

        }} className='flex  justify-center items-center mt-20 
        '>
            <div className='flex-1 hidden lg:block'>
                <img className='mt-[-100px]' src={doctor} alt="" />
            </div>
            <div className='flex-1'>
                <h3 className='text-xl text-primary'>Appoinment</h3>
                <h2 className='text-4xl mt-5 text-white'>Make an Appoinment</h2>
                <p className='text-white mt-5'>He played an important role in establishing the Doctorate of Medicine (DM) in Medical Oncology at TMH (Mumbai University). He has trained many successful oncologists. Dr Advani is recognized as a pioneer in the establishment of bone marrow transplantation in India.</p>
                <button className="btn btn-primary uppercase mt-5 text-white font-bold font-sans bg-gradient-to-r from-secondary to-primary ...">Get Started</button><font></font>
            </div>
        </section>
    );
};

export default MakeAppoinment;