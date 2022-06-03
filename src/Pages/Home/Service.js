import React from 'react';

const Service = ({service}) => {
    const {img, name, description} = service;
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl"><font></font>
            <figure className="px-10 pt-10"><font></font>
                <img src={img} alt="Shoes" className="rounded-xl" /><font></font>
            </figure><font></font>
            <div className="card-body items-center text-center"><font></font>
                <h2 className="card-title">{name}</h2><font></font>
                <p>If a dog chews shoes whose shoes does he choose?</p><font></font>
             
            </div><font></font>
        </div>
    );
};

export default Service;