import React from 'react';
import chair from '../../../assets/images/chair.png';
import bg from '../../../assets/images/bg.png';

const Banner = () => {
    return (
  <section style={{
    background: `url(${bg})`
  }}>
          <div className="hero min-h-screen "><font></font>
  <div className="hero-content flex-col lg:flex-row-reverse mr-5"><font></font>
    <img src={chair} className="max-w-sm rounded-lg shadow-2xl ml-5" alt=""/><font></font>
    <div><font></font>
      <h1 className="text-5xl font-bold">Your new smile is here.</h1><font></font>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p><font></font>
      <button className="btn btn-primary uppercase text-white font-bold font-sans bg-gradient-to-r from-secondary to-primary ...">Get Started</button><font></font>
    </div><font></font>
  </div><font></font>
</div>
  </section>
    );
};

export default Banner;