/*
* Application global error handle here
*/
module.exports = (error) => {
  let errorObject = {
    statusCode: 500,
    message: 'Internal server error',
  };
  /*
  *Handle sequelize errors
  */
  if ('errors' in error) {
    errorObject.statusCode = 400;
    errorObject.message = 'Validation Errors';
    const err = error.errors.map(e => e.message);
    errorObject = Object.assign({}, errorObject, { errors: err });
  }
  return errorObject;
};
