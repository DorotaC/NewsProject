const postURL = async (url = ' ', data = {}) => {
  const response = await fetch(url, {
    method: 'POST',
    credentials: 'same-origin',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  try {
    const getURL = await response.json();
    return getURL;
  } catch (error) {
    console.log(error);
  };
};

export {postURL}
