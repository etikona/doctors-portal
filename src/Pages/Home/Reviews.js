import React from 'react';

const Reviews = ({review}) => {
    const{img, name, location} = review ;
    return (
        <div className="card w-96 bg-base-100 shadow-xl"><font></font>
        <div className="card-body"><font></font>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos saepe est natus cumque, hic dicta.</p>
          <p>If a dog chews shoes whose shoes does he choose?</p><font></font>
     <div className='flex items-center'>
     <div className="avatar">
  <div className="w-16 rounded-full ring ring-accent mr-5">
    <img src={img}  alt="" />
  </div>
</div>
<div>
    <h4 className='text-xl'>{name}</h4>
    <p>{location}</p>
</div>
     </div>
        </div><font></font>
      </div>
    );
};

export default Reviews;