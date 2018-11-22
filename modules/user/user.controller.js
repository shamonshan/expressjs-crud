/*
* Get the list of users
*/
const get = async (req, res, next) => {
  try {
    /*
    * raw:true retruns lightweight object
    */
    const result = await req.app.get('models').User.findAll({
      raw: true,
    });
    res.json({
      users: result,
      message: 'Users found',
    });
  } catch (error) {
    next(error);
  }
};
/*
* Create a new user
*/
const create = async (req, res, next) => {
  try {
    const result = await req.app.get('models').User.create({
      name: req.body.name,
      email: req.body.email,
    });
    res.json({
      user: result,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  get, create,
};
