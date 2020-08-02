const handleResquest = async (response) => {
  if (response.ok) {
    const data = await response.json();
    return data;
  }

  throw new Error('Service Unavailable');
};

const sendRequest = (URL, properties) => fetch(URL, properties).then(handleResquest);

export default {
  sendRequest,
};
