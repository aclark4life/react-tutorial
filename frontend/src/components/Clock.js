import React, { useState, useEffect, useCallback, useRef } from 'react';
import PropTypes from 'prop-types';

const Clock = ({ color = '#fff' }) => {
  const [date, setDate] = useState(new Date());
  const timerID = useRef();
  const tick = useCallback(() => setDate(new Date(), []));

  useEffect(() => {
    timerID.current = setInterval(() => tick(), 1000);

    // Return a cleanup function to be run on component unmount
    return () => clearInterval(timerID.current);
  }, []);

  return (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is <span style={{ color }}>{date.toLocaleTimeString()}</span>.</h2>
    </div>
  );
};

Clock.propTypes = {
  color: PropTypes.string,
};

export default Clock;
