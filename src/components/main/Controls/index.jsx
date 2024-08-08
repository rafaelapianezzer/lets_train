import { Button } from 'react-bootstrap';
import styles from './styles.module.scss';
import 'bootstrap-icons/font/bootstrap-icons.css';

export const Controls = ({ handlePlayPause, isRunning, handleStop, handleOpenSettings }) => {
  return (
    <section className={`container d-flex flex-row justify-content-center align-items-center ${styles.buttonsControl}`}>

      <Button className={`btn ${styles.customButton}`} onClick={handleStop}>
        <i className="bi bi-stop"></i>
      </Button>
      <Button className={`btn ${styles.customButton} ${styles.buttonPlay}`} onClick={handlePlayPause}>
        <i className={`bi ${isRunning ? 'bi-pause' : 'bi-play'}`}></i>
      </Button>
      <Button className={`btn ${styles.customButton}`} onClick={handleOpenSettings}>
        <i className="bi bi-gear"></i>
      </Button>
    </section>
  );
};
