import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { FormModal } from "./FormModal";
import styles from './styles.module.scss';

export const CustomModal = ({
  showSettings,
  handleCloseSettings,
  workoutMinutes,
  workoutSeconds,
  restMinutes,
  restSeconds,
  sets,
  cycles,
  handleInputChange,
  setWorkoutMinutes,
  setWorkoutSeconds,
  setRestMinutes,
  setRestSeconds,
  setSets,
  setCycles,
  isRunning,
  onSave
}) => {
  const handleSave = () => {
    onSave();
    handleCloseSettings();
  }
  return (
    <Modal
      show={showSettings}
      onHide={handleCloseSettings}
      className={styles.customModal}
    >
      <div className={styles.modalCuston}>
        <Modal.Body>
          <FormModal
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
          />
        </Modal.Body>
        <Modal.Footer>
          <Button className={styles.buttonModal} variant="secondary" onClick={handleSave}>
            Salvar
          </Button>
        </Modal.Footer>
      </div>
    </Modal>
  );
};