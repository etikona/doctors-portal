import React from 'react';

const InfoCard = ({img, cardTitle, bg}) => {
    return (
        <div>
            <div className={`card lg:card-side bg-base-100 shadow-xl pt-5 ${bg}`}><font></font>
  <figure className='pl-5'><img src={img} alt="Album"/></figure><font></font>
  <div className="card-body text-white"><font></font>
    <h2 className="card-title ">{cardTitle}</h2><font></font>
    <p>Click the button to listen on Spotiwhy app.</p><font></font>
   
  </div><font></font>
</div>
        </div>
    );
};

export default InfoCard;