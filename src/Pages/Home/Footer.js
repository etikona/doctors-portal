import React from 'react';
import footer from '../../assets/images/footer.png';

const Footer = () => {
    return (
        <footer style={{
            background: `url(${footer})`,
            backgroundsize:'cover'
        }} className=" p-10 "><font></font>
        <div className='footer'>
        <div><font></font>
          <span className="footer-title">Services</span> <font></font>
          <a className="link link-hover">Branding</a><font></font>
          <a className="link link-hover">Design</a><font></font>
          <a className="link link-hover">Marketing</a><font></font>
          <a className="link link-hover">Advertisement</a><font></font>
        </div> <font></font>
        <div><font></font>
          <span className="footer-title">Company</span> <font></font>
          <a className="link link-hover">About us</a><font></font>
          <a className="link link-hover">Contact</a><font></font>
          <a className="link link-hover">Jobs</a><font></font>
          <a className="link link-hover">Press kit</a><font></font>
        </div> <font></font>
        <div><font></font>
          <span className="footer-title">Legal</span> <font></font>
          <a className="link link-hover">Terms of use</a><font></font>
          <a className="link link-hover">Privacy policy</a><font></font>
          <a className="link link-hover">Cookie policy</a><font></font>
        </div><font></font>
        </div>
        <div className='my-10 text-center'>
    <p>Copyright © 2022 - All right reserved.</p>
  </div>
      </footer>
    );
};

export default Footer;