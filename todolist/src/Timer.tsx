import React, { FC, useState, useRef } from "react";

const Timer: FC = () => {
  const [seconds, setSeconds] = useState<number>(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null); // 🔁 타이머 ID 저장용

  const startTimer = () => {
    if (intervalRef.current !== null) return; // 이미 실행 중이면 무시

    intervalRef.current = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);
  };

  const stopTimer = () => {
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current); // ⛔ 정지
      intervalRef.current = null; // 다시 시작 가능하게 초기화
    }
  };

  const resetTimer = () => {
    stopTimer(); // 타이머 정지하고
    setSeconds(0); // 시간 초기화
  };

  return (
    <div>
      <h2>⏱️ 타이머: {seconds}초</h2>
      <button onClick={startTimer}>▶ 시작</button>
      <button onClick={stopTimer}>⏹️ 정지</button>
      <button onClick={resetTimer}>🔄 초기화</button>
    </div>
  );
};

export default Timer;
