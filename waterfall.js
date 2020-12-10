Promise.waterfall = (requests, onSuccess, onError) => {
  const next = (index, response) => {
    if (index === requests.length) return onSuccess();

    const request = requests[index];

    // If requests[i] is a lonely Promise, send it
    if (!request.length)
      request()
        .then(responses => next(index, responses))
        .catch(error => onError(index, error));
    // If requests[i] is a group of Promises, send them all at same time
    else
      Promise.all(request.map(req => req()))
        .then(responses => next(index, responses))
        .catch(error => onError(index, error));

    index++;

    return response;
  };

  next(0);
};
