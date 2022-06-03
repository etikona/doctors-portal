import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const Navbar = () => {

  const [user, loading, error] = useAuthState(auth);

  const logout = () => {
    signOut(auth);
  };

  return (
    <div className="navbar bg-base-100"><font></font>
      <div className="navbar-start"><font></font>
        <div className="dropdown"><font></font>
          <label strokeindex="0" className="btn btn-ghost lg:hidden"><font></font>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg><font></font>
          </label><font></font>
          <ul strokeindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"><font></font>
            <li><Link to="/">Home</Link></li><font></font>
            <li><Link to="/appoinment">Appoinment</Link></li><font></font>
            <li><Link to="/review">Review</Link></li><font></font>
            <li><Link to="/contact">Contact</Link></li><font></font>
            <li><Link to="/about">About</Link></li><font></font>
            <li>{ user? <button class="btn btn-ghost" onClick={logout}>Sign Out</button> :<Link to="/login">Login</Link>}</li><font></font>
          </ul><font></font>
        </div><font></font>
        <a className="btn btn-ghost normal-case text-xl">Doctors portal</a><font></font>
      </div><font></font>
      <div className="navbar-center hidden lg:flex"><font></font>
        <ul className="menu menu-horizontal p-0"><font></font>
        <li><Link to="/">Home</Link></li><font></font>
            <li><Link to="/appoinment">Appoinment</Link></li><font></font>
            <li><Link to="/review">Review</Link></li><font></font>
            <li><Link to="/contact">Contact</Link></li><font></font>
            <li><Link to="/about">About</Link></li><font></font>
            <li><Link to="/login">Login</Link></li><font></font>
       
        </ul><font></font>
      </div><font></font>
      
    </div>
  );
};

export default Navbar;