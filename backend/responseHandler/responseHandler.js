// handling the req reponse accoring to method or comndition 
const get = (res, message, resData) => {
  return res.json({
    message: message,
    body: resData
  });
}

const post = (res, message, resData) => {
  return res.json({
    message: message,
    body: resData
  });
}

const del = (res, message,resData) => {
  return res.json({
    message: message,
    body: resData
  });
}

const put = (res, message, resData) => {
  return res.status(200).json({
    message: message,
    body: resData
  });
}

const getError = (message) => {
  return {
   
    message: message,
    body: {}
  };
}

const unauthorized = (res, data) => {
  return res.status(401).json({
    message: data,
    body: {}
  });
}

const onError = (res, err, message) => {
  // console.log(message)
  return res.status(400).json(getError(message));
}

const noData = (res, err, message) => {
  return res.status(204).json({
    message: 'User is Unauthorized',
    body: {}
  });
}
const dup = (res, message) => {
  return res.status(422).json({
    message: message,
    body: {}
  });
}
module.exports = {
  get,
  post,
  put,
  del,
  onError,
  noData,
  dup,
  unauthorized
}