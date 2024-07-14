import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function ClickReveal() {
  const [clicks, setClicks] = useState(0);
  const [isRevealed, setIsRevealed] = useState(false);
  const [hide, setHide] = useState(true);

  const navigate = useNavigate();

  const buttonclick = () => {
    navigate('test-route')
  }

  useEffect(() => {
    const handleClick = () => {
      setClicks(prevClicks => {
        const newClicks = prevClicks + 1;
        if (newClicks === 5) {
          setIsRevealed(true);
          setHide(false);
        }
        return newClicks;
      });
    };

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <div className=''>
        { hide && 
      (<p className='text-center'><span className='hello'>{clicks}</span></p>)
        }
      {isRevealed && (
        <div className="revealed-div">
          <button onClick={buttonclick}>
            <span className='hello text-black font-light underline underline-offset-[6px] ease-in duration-200 hover:underline-offset-4'>Adesuwa</span>
          </button>
        </div>
      )}
    </div>
  );
}

export default ClickReveal;