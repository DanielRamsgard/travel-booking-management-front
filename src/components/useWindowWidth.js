import { useState, useEffect } from 'react';

const useWindowWidth = (threshold) => {
  const [widthBool, setWidthBool] = useState(window.innerWidth < threshold);

  useEffect(() => {
    const handleResize = () => {
      setWidthBool(window.innerWidth < threshold);
    };

    window.addEventListener('resize', handleResize);
    
    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [threshold]);

  return widthBool;
};

export default useWindowWidth;