import { useEffect, useState } from 'react';
import { EVENT_SCROLL } from '../constants';

export const useHideOnScroll = (scrollAmount) => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > scrollAmount) {
        setShow(false);
      } else {
        setShow(true);
      }

      setLastScrollY(window.scrollY);
    };

    window.addEventListener(EVENT_SCROLL, handleScroll);
    return () => window.removeEventListener(EVENT_SCROLL, handleScroll);
  }, [scrollAmount, lastScrollY]);

  return show;
};
