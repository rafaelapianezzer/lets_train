import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Timer } from './components/main/Timer';
import { Controls } from './components/main/Controls';
import { CustomModal } from './components/main/CustomModal';

import './styles/index.scss'

export const App = () => {
  const [workoutMinutes, setWorkoutMinutes] = useState(0);
  const [workoutSeconds, setWorkoutSeconds] = useState(20);
  const [restMinutes, setRestMinutes] = useState(0);
  const [restSeconds, setRestSeconds] = useState(10);
  const [sets, setSets] = useState(8);
  const [cycles, setCycles] = useState(2);
  const [currentSet, setCurrentSet] = useState();
  const [currentCycle, setCurrentCycle] = useState();
  const [timeLeft, setTimeLeft] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [isWorkout, setIsWorkout] = useState(true);
  const [showSettings, setShowSettings] = useState(false);

  useEffect(() => {
    if (!isRunning || timeLeft === 0) return;

    const timerId = setInterval(() => {
      setTimeLeft(prevTime => prevTime - 1);
    }, 1000);

    return () => clearInterval(timerId);
  }, [isRunning, timeLeft]);

  useEffect(() => {
    if (timeLeft === 0 && isRunning) {
      if (isWorkout) {
        if (currentSet < sets) {
          setCurrentSet(currentSet + 1);
          setTimeLeft(restMinutes * 60 + restSeconds);
          setIsWorkout(false);
        } else if (currentCycle < cycles) {
          setCurrentSet(1);
          setCurrentCycle(currentCycle + 1);
          setTimeLeft(restMinutes * 60 + restSeconds);
          setIsWorkout(false);
        } else {
          setIsRunning(false);
        }
      } else {
        setTimeLeft(workoutMinutes * 60 + workoutSeconds);
        setIsWorkout(true);
      }
    }
  }, [timeLeft, isRunning, isWorkout, currentSet, sets, restMinutes, restSeconds, currentCycle, cycles, workoutMinutes, workoutSeconds]);

  const handlePlayPause = () => {
    if (isRunning) {
      setIsRunning(false);
    } else {
      if (timeLeft === 0) {
        setCurrentSet(1);
        setCurrentCycle(1);
        setIsWorkout(true);
        setTimeLeft(workoutMinutes * 60 + workoutSeconds);
      }
      setIsRunning(true);
    }
  };

  const handleStop = () => {
    // Adicionar uma confirmação se necessário
    setIsRunning(false);
    setCurrentSet(0);
    setCurrentCycle(0);
    setTimeLeft(0);
    setCycles(0);
    setSets(0);
  };

  const handleOpenSettings = () => {
    setShowSettings(true);
  };

  const handleCloseSettings = () => {
    setShowSettings(false);
  };

  const handleSaveSettings = () => {
    // Adicionar lógica para salvar configurações se necessário
  };

  const handleInputChange = (setter, min, max) => (event) => {
    const value = Math.max(min, Math.min(max, Number(event.target.value)));
    setter(value);
  };

  return (
    <div className='container-fluid'>
      <Header />
      <main>
        <Timer
          isWorkout={isWorkout}
          timeLeft={timeLeft}
          currentSet={currentSet}
          sets={sets}
          currentCycle={currentCycle}
          cycles={cycles}
          workoutMinutes={workoutMinutes}
          workoutSeconds={workoutSeconds}
          restMinutes={restMinutes}
          restSeconds={restSeconds}
        />
        <Controls 
          handlePlayPause={handlePlayPause}
          isRunning={isRunning}
          handleStop={handleStop}
          handleOpenSettings={handleOpenSettings}
        />
        <CustomModal 
          showSettings={showSettings}
          handleCloseSettings={handleCloseSettings}
          workoutMinutes={workoutMinutes}
          workoutSeconds={workoutSeconds}
          restMinutes={restMinutes}
          restSeconds={restSeconds}
          sets={sets}
          cycles={cycles}
          handleInputChange={handleInputChange}
          setWorkoutMinutes={setWorkoutMinutes}
          setWorkoutSeconds={setWorkoutSeconds}
          setRestMinutes={setRestMinutes}
          setRestSeconds={setRestSeconds}
          setSets={setSets}
          setCycles={setCycles}
          isRunning={isRunning}
          onSave={handleSaveSettings} 
        />
      </main>
    </div>
  );
};

export default App;
