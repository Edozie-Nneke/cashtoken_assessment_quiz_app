import React from 'react';
import { Link } from 'react-router-dom';
import './score.css';

export default function Score({ myScore, lengthOfQuiz }) {
  const handleBackToStart = () => {
    //send result to an API
    //Take user back to the home page
  };
  return (
    <div className='score-wrapper'>
      {myScore <= 5 ? (
        <div className='progress-bar'>
          <>
            <iframe
              src='https://giphy.com/embed/MZudgiwXiLJHPV9x73'
              title='jsx-a11y/iframe-has-title'
              width='350'
              height='300'
              frameBorder='0'
              className='giphy-embed'
              allowFullScreen
            ></iframe>
          </>
        </div>
      ) : (
        <div className='progress-bar'>
          <>
            <iframe
              src='https://giphy.com/embed/Qw1gB1YFU91xpTm49w'
              title='jsx-a11y/iframe-has-title'
              width='350'
              height='300'
              frameBorder='0'
              className='giphy-embed'
              allowFullScreen
            ></iframe>
          </>
        </div>
      )}
      <section className='score'>
        <h2>
          You scored:{' '}
          <span>
            {myScore} out of {lengthOfQuiz}
          </span>
        </h2>
        <p>Thank you for playing.</p>
      </section>
      <div className='score-btn-wrapper'>
        <Link to='/callback'>
          <button onClick={() => handleBackToStart}>Play again?</button>
        </Link>
      </div>
    </div>
  );
}
