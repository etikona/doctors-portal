import React, { useState } from 'react';
import Footer from '../Home/Footer';
import AppoinmentBanner from './AppoinmentBanner';
import AvailabeAppoinments from './AvailabeAppoinments';

const Appoinment = () => {
    const [date, setDate] = useState(new Date());
    return (
        <div>
            <AppoinmentBanner date={date} setDate={setDate}></AppoinmentBanner>
            <AvailabeAppoinments date={date}></AvailabeAppoinments>
            <Footer></Footer>
        </div>
    );
};

export default Appoinment;