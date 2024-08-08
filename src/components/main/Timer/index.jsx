import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import styles from './styles.module.scss';

export const Timer = ({ isWorkout, timeLeft, currentSet, sets, currentCycle, cycles, workoutMinutes, workoutSeconds, restMinutes, restSeconds }) => {
  const timerText = () => {
    if (timeLeft === 0 && isWorkout) {
      return "Preparar!";
    } else if (isWorkout) {
      return "Treino";
    } else {
      return "Descanso";
    }
  };

  const workoutTotalTime = (workoutMinutes * 60) + workoutSeconds;
  const restTotalTime = (restMinutes * 60) + restSeconds;
  const totalTime = isWorkout ? workoutTotalTime : restTotalTime;
  const percentage = timeLeft > 0 ? (timeLeft / totalTime) * 100 : 0;

  return (
    <section className={'container text-center py-5  text-white pt-2 mt-4'}>
      <div className='mb-3 mb-5 row'>
        <div style={{ width: 180, height: 180, margin: '0 auto' }} >
          <CircularProgressbar
            value={percentage}
            text={`${Math.floor(timeLeft / 60)}:${String(timeLeft % 60).padStart(2, '0')}`}
            styles={buildStyles({
              textColor: "LightSlateGray",
              pathColor: isWorkout ? "Red" : "DeepSkyBlue",
              trailColor: "Snow",
            })}
          />
        </div>
        <h2 className={`display-7 mt-5 ${styles.textTimer}`}>{timerText()}</h2>
      </div >
      <div className='d-flex justify-content-center container'>
        <ul className={`d-flex justify-content-between flex-column col-lg-4 p-0 w-100 ${styles.listInf}`}>
          <li className={`lead d-flex justify-content-between ${styles.textControl}`}>Série: <span>{currentSet ?? '-'}/{sets ?? '-'}</span></li>
          <li className={`lead d-flex justify-content-between ${styles.textControl}`}>Ciclo: <span>{currentCycle ?? '-'}/{cycles ?? '-'}</span></li>
        </ul>
      </div>

    </section>
  );
};
