import { Button } from 'react-bootstrap';
import styles from './styles.module.scss';
import 'bootstrap-icons/font/bootstrap-icons.css';

export const Controls = ({ handlePlayPause, isRunning, handleStop, handleOpenSettings }) => {
  return (
    <section className={`container d-flex flex-sm-row justify-content-center align-items-center ${styles.buttonsControl}`}>
      <Button className={`w-50 w-sm-50 mb-3 mb-sm-0 ${styles.customButton}`} onClick={handlePlayPause}>
      <i className={`bi ${isRunning ? 'bi-pause' : 'bi-play'}`}></i> {isRunning ? 'Pause' : 'Play'}
      </Button>
      <Button className={`w-50 w-sm-50 mb-3 mb-sm-0 ${styles.customButton}`} onClick={handleStop}>
      <i className="bi bi-stop"></i> Stop
      </Button>
      <Button className={`w-50 w-sm-50 mb-3 mb-sm-0 ${styles.customButton}`} onClick={handleOpenSettings}>
      <i className="bi bi-gear"></i> Settings
      </Button>
    </section>
  );
};
