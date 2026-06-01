import { useEffect, useState } from 'react';

export function PageLoader() {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const handleStart = () => setIsLoading(true);
    const handleStop = () => setIsLoading(false);

    window.addEventListener('load', handleStop);
    
    return () => {
      window.removeEventListener('load', handleStop);
    };
  }, []);

  return (
    <>
      {isLoading && (
        <div className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 z-50 animate-pulse">
          <div className="h-full bg-white opacity-30 animate-pulse"></div>
        </div>
      )}
    </>
  );
}
