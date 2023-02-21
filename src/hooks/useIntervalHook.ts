import { useEffect, useRef } from 'react';

export function useInterval(callback: () => void, delay: number) {
  const savedCallback = useRef<() => void | null>();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  const tick = () => {
    if (savedCallback.current) savedCallback.current();
  };

  useEffect(() => {
    const id = setInterval(tick, delay);
    return () => clearInterval(id);
  }, [delay]);
}
