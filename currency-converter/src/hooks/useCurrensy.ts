import axios from 'axios';
import React, { useEffect, useState } from 'react';

export const useCurrensy = () => {
  const [currencies, setCurrencies] = useState<any>([]);
  const [error, setError] = useState('');

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_CURRENCY_URL}/latest/UAH`)
      .then(respone => {
        setCurrencies([...Object.keys(respone.data.conversion_rates)]);
      })
      .catch((error) => {
        setError(error.message);
      })
  }, []);

  return {
    currencies,
    error
  };
}  