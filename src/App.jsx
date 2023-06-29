import { useEffect, useState } from 'react';
import './App.css'
import axios from 'axios';

const App = () => {
  const [advice, setAdvice] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAdvice();
  }, []);

  const fetchAdvice = () => {
    setLoading(true);

    axios.get('https://api.adviceslip.com/advice')
      .then((response) => {
        const { advice } = response.data.slip;
        setAdvice(advice);
        setLoading(false);
        console.log(advice);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };

  return (
    <div className="App">
      <div className='card'>
        {loading ? (
          <div className='loading'>Loading...</div>
        ) : (
          <div className='heading'>{advice}</div>
        )}
        <button className='button' onClick={fetchAdvice} disabled={loading}>
          <span>Generate Advice</span>
        </button>
      </div>
    </div>
  );
};

export default App;
