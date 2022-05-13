import { useEffect, useState } from 'react';
import styles from './analog-clock.module.css';

export default function AnalogClock() {
  const [clockTransform, setClocTransform] = useState({});

  useEffect(() => {
    setInterval(() => {
      const d = new Date(); //object of date()
      const hr = d.getHours();
      const min = d.getMinutes();
      const sec = d.getSeconds();
      const hr_rotation = 30 * hr + min / 2; //converting current time
      const min_rotation = 6 * min;
      const sec_rotation = 6 * sec;

      setClocTransform({
        hr_rotation,
        min_rotation,
        sec_rotation,
      });
    }, 1000);
  }, []);

  return (
    <div id="clockContainer" className={styles.clockContainer}>
      <div>
        <div
          style={{
            position: 'absolute',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            backgroundColor: 'pink',
            width: '100%',
            fontSize: '2rem',
            top: 'calc(50% - 1.2rem)',
            transform: 'rotate(90deg)',
          }}
        >
          <div style={{ transform: 'rotate(-90deg)' }}>12</div>
          <div style={{ transform: 'rotate(-90deg)' }}>6</div>
        </div>
        <div
          style={{
            position: 'absolute',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            backgroundColor: 'pink',
            width: '100%',
            fontSize: '2rem',
            top: 'calc(50% - 1.2rem)',
            transform: 'rotate(0deg)',
          }}
        >
          <div style={{ transform: 'rotate(0deg)' }}>9</div>
          <div style={{ transform: 'rotate(0deg)' }}>3</div>
        </div>
        <div
          style={{
            position: 'absolute',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            backgroundColor: 'pink',
            width: '100%',
            fontSize: '2rem',
            top: 'calc(50% - 1.2rem)',
            transform: 'rotate(-60deg)',
          }}
        >
          <div style={{ transform: 'rotate(60deg)' }}>7</div>
          <div style={{ transform: 'rotate(60deg)' }}>1</div>
        </div>
        <div
          style={{
            position: 'absolute',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            backgroundColor: 'plum',
            width: '100%',
            fontSize: '2rem',
            top: 'calc(50% - 1.2rem)',
            transform: 'rotate(-30deg)',
          }}
        >
          <div style={{ transform: 'rotate(30deg)' }}>8</div>
          <div style={{ transform: 'rotate(30deg)' }}>2</div>
        </div>
        <div
          style={{
            position: 'absolute',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            backgroundColor: 'plum',
            width: '100%',
            fontSize: '2rem',
            top: 'calc(50% - 1.2rem)',
            transform: 'rotate(30deg)',
          }}
        >
          <div style={{ transform: 'rotate(-30deg)' }}>10</div>
          <div style={{ transform: 'rotate(-30deg)' }}>4</div>
        </div>
        <div
          style={{
            position: 'absolute',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            backgroundColor: 'plum',
            width: '100%',
            fontSize: '2rem',
            top: 'calc(50% - 1.2rem)',
            transform: 'rotate(60deg)',
          }}
        >
          <div style={{ transform: 'rotate(-60deg)' }}>11</div>
          <div style={{ transform: 'rotate(-60deg)' }}>5</div>
        </div>
        <div
          id="hour"
          className={styles.hour}
          style={{ transform: `rotate(${clockTransform.hr_rotation}deg)` }}
        ></div>
        <div
          id="minute"
          className={styles.minute}
          style={{ transform: `rotate(${clockTransform.min_rotation}deg)` }}
        ></div>
        <div
          id="second"
          className={styles.minute}
          style={{ transform: `rotate(${clockTransform.sec_rotation}deg)` }}
        ></div>
      </div>
    </div>
  );
}
