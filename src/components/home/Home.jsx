import React from 'react';
import { Navigate } from 'react-router-dom';
import image from '../../assets/snap-logo.png';
import './home.css';

export default function Home({ user }) {
  return user ? (
    <Navigate to='/startpage' replace />
  ) : (
    <div className='home'>
      <div className='home-wrapper'>
        <p>Oops!, You are not logged in</p>
        <a href='https://young-harbor-91025.herokuapp.com/auth/snapchat'>
          <div className='snap-logo-btn'>
            <div className='logo-img'>
              <img src={image} alt='snap-logo' />
            </div>
            <div className='snap-btn'>Continue with Snapchat</div>
          </div>
        </a>
      </div>
    </div>
  );
}
