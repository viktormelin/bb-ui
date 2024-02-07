import { useEffect, useState } from 'react';

const useViewport = () => {
  const [width, setWidth] = useState<number>(0);

  const handleWindowSizeChange = () => setWidth(window.innerWidth);

  useEffect(() => {
    setWidth(window.innerWidth);

    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    };
  }, []);

  const isMobile = width <= 768;
  return isMobile;
};

export default useViewport;
