'use client';

import { useState, useEffect, useRef } from 'react';
import { Pause, Play, RotateCcw } from 'lucide-react';

const Stopwatch = () => {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    } else {
      if (intervalRef.current) clearInterval(intervalRef.current);
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isRunning]);

  const formatTime = (totalSeconds: number) => {
    const hrs = Math.floor(totalSeconds / 3600)
      .toString()
      .padStart(2, '0');
    const mins = Math.floor((totalSeconds % 3600) / 60)
      .toString()
      .padStart(2, '0');
    const secs = (totalSeconds % 60).toString().padStart(2, '0');
    return `${hrs}:${mins}:${secs}`;
  };

  return (
    <div className="bg-[url(/greenbg1.avif)] text-white p-6 rounded-xl shadow-md w-full max-w-sm mx-auto flex flex-col items-center justify-center">
      <h2 className="text-xl font-semibold mb-4">Time Tracker</h2>
      <div className="text-5xl font-mono mb-6">{formatTime(seconds)}</div>
      <div className="flex gap-4">
        <button
          onClick={() => setIsRunning(!isRunning)}
          className={`p-3 rounded-full transition ${
            isRunning
              ? 'bg-yellow-300 text-black hover:bg-yellow-400'
              : 'bg-white text-green-800 hover:bg-gray-200'
          }`}
        >
          {isRunning ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
        </button>
        <button
          onClick={() => {
            setIsRunning(false);
            setSeconds(0);
          }}
          className="p-3 rounded-full bg-red-600 text-white hover:bg-red-700 transition"
        >
          <RotateCcw className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default Stopwatch;
