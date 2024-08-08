import React from 'react';
import { Form } from 'react-bootstrap';
import styles from './styles.module.scss';

export const FormModal = ({
  workoutMinutes, workoutSeconds, restMinutes, restSeconds, sets, cycles,
  handleInputChange, setWorkoutMinutes, setWorkoutSeconds, setRestMinutes, setRestSeconds, setSets, setCycles,
  isRunning
}) => {

  return (
    <Form>
      <Form.Group className="mb-3">
        <Form.Label className={styles.formText}>Tempo de Treino</Form.Label>
        <Form.Control
          type="number"
          value={workoutMinutes === 0 ? '' : workoutMinutes}
          onChange={handleInputChange(setWorkoutMinutes, 0, 59)}
          disabled={isRunning}
          placeholder="Minutos"
          min={0}
          max={59}
          className={styles.customInput}
        />
        <Form.Control
          type="number"
          value={workoutSeconds === 0 ? '' : workoutSeconds}
          onChange={handleInputChange(setWorkoutSeconds, 0, 59)}
          disabled={isRunning}
          placeholder="Segundos"
          min={0}
          max={59}
          className={styles.customInput}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label className={styles.formText}>Tempo de Descanso</Form.Label>
        <Form.Control
          type="number"
          value={restMinutes === 0 ? '' : restMinutes}
          onChange={handleInputChange(setRestMinutes, 0, 59)}
          disabled={isRunning}
          placeholder="Minutos"
          min={0}
          max={59}
          className={styles.customInput}
        />
        <Form.Control
          type="number"
          value={restSeconds === 0 ? '' : restSeconds}
          onChange={handleInputChange(setRestSeconds, 0, 59)}
          disabled={isRunning}
          placeholder="Segundos"
          min={0}
          max={59}
          className={styles.customInput}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label className={styles.formText}>Séries</Form.Label>
        <Form.Control
          type="number"
          value={sets === 0 ? '' : sets}
          onChange={handleInputChange(setSets, 1, 100)}
          disabled={isRunning}
          min={1}
          max={100}
          className={styles.customInput}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label className={styles.formText}>Ciclos</Form.Label>
        <Form.Control
          type="number"
          value={cycles === 0 ? '' : cycles}
          onChange={handleInputChange(setCycles, 1, 100)}
          disabled={isRunning}
          min={1}
          max={100}
          className={styles.customInput}
        />
      </Form.Group>
    </Form>
  );
};
