import { useState, useEffect } from 'react';

export default function useRequest({ route, properties }) {
  const [statusCode, setStatusCode] = useState(500);
  const [statusMessage, setStatusMessage] = useState('');
  const [apiData, setApiData] = useState([]);
  const [loading, setLoading] = useState(true);  

  useEffect(() => {
    const requestProperties = properties;
    // const URL = `${process.env.REACT_APP_API_URL}${route}`;
    fetch(URL, undefined).then(async (response) => {
      setStatusCode(response.status);
      setStatusMessage(response.statusText);
      const data = await response.json();
      setApiData(data);
    });
  }, []);
  return {
    data: apiData, statusCode, loading, statusMessage,
  };
}
