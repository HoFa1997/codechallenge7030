import { useEffect, useState } from "react";

const useTimer = () => {
  const [seconds, setSeconds] = useState(10);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval: number | null = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds((seconds) => seconds - 1);
      }, 1000);
    } else if (!isActive && seconds !== 10) {
      clearInterval(interval!);
    }
    return () => {
      clearInterval(interval!);
    };
  }, [isActive, seconds]);

  const start = () => {
    setIsActive(true);
  };

  const stop = () => {
    setIsActive(false);
    setSeconds(10);
  };

  return {
    seconds,
    isActive,
    start,
    stop,
  };
};

export default useTimer;
