import axios from 'axios';
import { useState, useEffect } from 'react';

axios.defaults.baseURL = 'https://mock-server2-jupl.onrender.com/results';

const useDataFetch = ({ category, difficulty, numQuestions }) => {
  const [res, setRes] = useState(null);
  const [err, setError] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('', {
          params: {
            amount: numQuestions,
            category: category,
            difficulty: difficulty,
            type: 'multiple',
          },
        });

        setRes(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [category, difficulty, numQuestions]);

  return { res, err, loading };
};

export default useDataFetch;
