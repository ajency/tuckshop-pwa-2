const itemSerivce = (body) => {
  return fetch({
    method: 'POST',
    url: `/get-itmes`,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
};

export default itemSerivce;