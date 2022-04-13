import axios from 'axios';
import React, { useEffect, useState } from 'react';

export const useGetCurrencyBetweenTwo = (currencyFrom: String, currencyTo: String) => {
  const [currency, setCurrency] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_CURRENCY_URL}/pair/${currencyFrom}/${currencyTo}`)
      .then(response => {
        setCurrency(response.data.conversion_rate);
      })
      .finally(() => {
        setIsLoading(false);
      })
  }, [currencyFrom, currencyTo])

  return {
    currency,
    isLoading
  }
} 